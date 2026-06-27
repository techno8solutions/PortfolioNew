import React, { useEffect, useRef } from 'react';

const ParticleWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;
    
    // Interactive mouse positioning
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      targetMouseX = (e.clientX - width / 2) / (width / 2);
      targetMouseY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

      // Wave Grid Configuration
      const cols = 60;
      const rows = 40;
      const spacing = 50;
      
      const amplitude = 70;
      const frequency = 0.06;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth interpolation for mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Time advances faster when mouse is closer to the edge
      const speed = 0.02 + Math.abs(mouseX) * 0.02;
      time += speed;

      const points = [];

      // 1. Calculate 3D points
      for (let z = 0; z < rows; z++) {
        const row = [];
        for (let x = 0; x < cols; x++) {
          const worldX = (x - cols / 2) * spacing;
          const worldZ = z * spacing;
          
          // Organic ocean wave formula (combining multiple frequencies)
          const yOffset = 
            Math.sin(x * frequency + time) * Math.cos(z * frequency + time) * amplitude +
            Math.sin(x * frequency * 2 - time * 1.5) * Math.cos(z * frequency * 1.5 + time) * (amplitude * 0.4);
          
          // Hover interaction: mouse Y alters wave amplitude
          const interactiveAmplitude = yOffset * (1 + mouseY * 0.8);

          row.push({ x: worldX, y: interactiveAmplitude, z: worldZ });
        }
        points.push(row);
      }

      // 2. 3D Rotation Configuration (Pitch & Yaw)
      // Pitch: look down at the grid. MouseY adds slight tilt.
      const pitch = 0.9 - mouseY * 0.2; 
      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);
      
      // Yaw: rotate grid left/right based on MouseX
      const yaw = mouseX * 0.5; 
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);

      // 3. Projection Configuration
      const focalLength = 600;
      const cameraZ = -800;
      
      // Fixed camera position since rotation handles the interaction
      const cameraX = 0;
      const cameraY = -300; 

      const projectedPoints = [];

      // 4. Transform and Project
      for (let z = 0; z < rows; z++) {
        const projectedRow = [];
        for (let x = 0; x < cols; x++) {
          const p = points[z][x];
          
          // --- 3D Rotation Pipeline ---
          
          // 1. Rotate around Y-axis (Yaw)
          const rotatedX1 = p.x * cosYaw - p.z * sinYaw;
          const rotatedZ1 = p.x * sinYaw + p.z * cosYaw;
          const rotatedY1 = p.y;
          
          // 2. Rotate around X-axis (Pitch)
          const rotatedY2 = rotatedY1 * cosPitch - rotatedZ1 * sinPitch;
          const rotatedZ2 = rotatedY1 * sinPitch + rotatedZ1 * cosPitch;
          const rotatedX2 = rotatedX1;

          // 3. Translate to Camera Space
          const cx = rotatedX2 - cameraX;
          const cy = rotatedY2 - cameraY;
          const cz = rotatedZ2 - cameraZ;

          // 4. Perspective Projection
          const scale = focalLength / (focalLength + cz);
          
          // Center the projection on screen, lifting it back to the middle
          const screenX = width / 2 + cx * scale;
          const screenY = height / 2 + cy * scale + 100; // Centered with slight downward push

          projectedRow.push({ x: screenX, y: screenY, scale, z: cz, rawZ: p.z });
        }
        projectedPoints.push(projectedRow);
      }

      // 4. Render Web (Lines & Dots)
      ctx.lineWidth = 1.5;
      
      for (let z = 0; z < rows; z++) {
        for (let x = 0; x < cols; x++) {
          const p = projectedPoints[z][x];
          if (p.scale < 0) continue; // Don't draw points behind the camera
          
          // Depth fading based on original Z depth from camera
          const maxDepth = rows * spacing;
          const opacity = Math.max(0, 1 - (p.rawZ / maxDepth));
          
          // --- Draw Web Lines ---
          // Using slate-400 color for lines (more visible)
          ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.7})`;
          ctx.beginPath();
          
          // Connect to right neighbor
          if (x < cols - 1) {
            const nextX = projectedPoints[z][x + 1];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextX.x, nextX.y);
          }
          
          // Connect to bottom neighbor
          if (z < rows - 1) {
            const nextZ = projectedPoints[z + 1][x];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextZ.x, nextZ.y);
          }
          ctx.stroke();
          
          // --- Draw Particle Dots ---
          // Using slate-500 color for dots (more visible)
          ctx.fillStyle = `rgba(100, 116, 139, ${opacity})`;
          ctx.beginPath();
          // Dot size scales with perspective
          ctx.arc(p.x, p.y, p.scale * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleWave;
