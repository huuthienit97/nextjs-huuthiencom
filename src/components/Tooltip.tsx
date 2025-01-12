"use client";

import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

interface TooltipProps {
  isVisible: boolean;
  name: string;
  description: string;
  link: string;
  position: 'left' | 'right';
  style: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Tooltip = ({ 
  isVisible, 
  name, 
  description, 
  link, 
  position, 
  style,
  onMouseEnter,
  onMouseLeave 
}: TooltipProps) => {
  const router = useRouter();
  if (typeof document === 'undefined' || !isVisible) return null;

  const arrowPosition = style.left ? 'left' : 'right';

  return createPortal(
    <div 
      className="transition-all duration-300 fixed bg-black/90 text-white p-4 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm w-64 border border-white/10 relative"
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
      data-tooltip={name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2 text-white/90">{name}</h3>
        <p className="text-sm mb-3 text-white/70">{description}</p>
        <button 
          onClick={() => router.push(link)}
          className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors border border-white/20"
        >
          Xem thêm
        </button>
      </div>

      {/* Arrow Container */}
      <div 
        className={`absolute z-0 ${
          arrowPosition === 'left'
            ? 'left-0 top-[calc(50%-13px)] -translate-x-[100%]'
            : 'right-0 top-[calc(50%-13px)] translate-x-[100%]'
        }`}
      >
        {/* Arrow Background */}
        <div 
          className={`absolute border-[13px] border-transparent ${
            arrowPosition === 'left'
              ? '-right-[1px] border-r-white/10'
              : '-left-[1px] border-l-white/10'
          }`}
        />
        {/* Arrow Foreground */}
        <div 
          className={`absolute border-[12px] border-transparent ${
            arrowPosition === 'left'
              ? 'right-0 border-r-black/90'
              : 'left-0 border-l-black/90'
          }`}
        />
      </div>
    </div>,
    document.body
  );
};

export default Tooltip; 