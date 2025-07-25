
'use client';

import React from "react";

interface ZAnimationProps {
  startAnimation: boolean;
}

const ZAnimation: React.FC<ZAnimationProps> = ({ startAnimation }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <svg
          className="w-full h-auto"
          viewBox="0 0 3035 570"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* TOP Z */}
          <path
            className={`z-path stroke-blue-500 ${startAnimation ? "animate" : ""}`}
            d="M0,25 H1649 l-365,433 h1090 l660,-2"
            fill="none"
          />
          <path
            className={`z-path stroke-black ${startAnimation ? "animate" : ""}`}
            d="M0,25 H1649 l-365,433 h1090 l660,-2"
            fill="none"
          />

          {/* BOTTOM Z */}
          <path
            className={`z-path stroke-blue-500 ${startAnimation ? "animate" : ""}`}
            d="M0,100 H1485 L1120,533 h1090 l850,-2"
            fill="none"
          />
          <path
            className={`z-path stroke-black ${startAnimation ? "animate" : ""}`}
            d="M0,100 H1485 L1120,533 h1090 l850,-2"
            fill="none"
          />
        </svg>
      </div>

      {/* Custom CSS inside the component */}
      <style jsx>{`
        .z-path {
          fill: none;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-dasharray: 4200;
          stroke-dashoffset: 4200;
        }

        .z-path.animate {
          animation: draw 2s ease forwards;
        }

        .stroke-blue-500 {
          stroke-width: 50;
          animation-delay: 0s;
        }

        .stroke-black {
          stroke-width: 45;
          animation-delay: 0.1s;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ZAnimation;
