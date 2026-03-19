import React, { useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

const ImageWithSkeleton: React.FC<Props> = ({ wrapperClassName, className, onLoad, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName ?? ''}`}>
      {!isLoaded && <div className="absolute inset-0 skeleton-soft" aria-hidden="true" />}
      <img
        {...props}
        className={`${className ?? ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;

