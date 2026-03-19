import React from 'react';
import { Bot, Code, Database, Globe, Instagram, Palette, Smartphone, TrendingUp } from 'lucide-react';
import type { Service } from '../data/services';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

type Props = {
  service: Service;
  onViewDetails: (service: Service) => void;
  onRequestQuote?: (service: Service) => void;
  dense?: boolean;
};

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  trendingUp: TrendingUp,
  instagram: Instagram,
  code: Code,
  database: Database,
  palette: Palette,
  bot: Bot,
} as const;

const ServiceCard: React.FC<Props> = ({ service, onViewDetails, onRequestQuote, dense }) => {
  const Icon = iconMap[service.iconKey];

  return (
    <div className="group glass glass-hover rounded-3xl overflow-hidden flex flex-col">
      <div className="relative aspect-[16/10]">
        <div
          className="absolute inset-0 scale-110 blur-xl opacity-50"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden="true" />

        <ImageWithSkeleton
          src={service.image}
          alt={service.title}
          wrapperClassName="absolute inset-0 p-5 sm:p-6"
          className="h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] group-hover:scale-[1.01] transition-transform duration-700"
          decoding="async"
        />

        <div className="absolute top-4 left-4 flex items-center gap-3">
          <div
            className={[
              'w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg shadow-black/30',
              `bg-gradient-to-r ${service.gradient}`,
            ].join(' ')}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div className="text-white/85 text-sm font-semibold tabular-nums">0{service.id}</div>
        </div>

        <div className="absolute bottom-4 left-5 right-5">
          <div className="inline-flex items-center rounded-full px-3 py-1.5 glass text-white/90 text-xs font-semibold">
            {service.timeline}
          </div>
        </div>
      </div>

      <div className={`p-6 flex-1 flex flex-col ${dense ? 'gap-4' : 'gap-5'}`}>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {service.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-full px-3 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-200 border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06]"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-1 gap-3">
          <button
            onClick={() => onViewDetails(service)}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-4 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
          >
            View details
          </button>

          {onRequestQuote && (
            <button
              onClick={() => onRequestQuote(service)}
              className="w-full rounded-2xl glass glass-hover px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
            >
              Request a quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
