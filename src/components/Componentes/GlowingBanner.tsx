
import React from "react";

interface GlowingBannerProps {
  phrases: string[];
  index: number;
}

const GlowingBanner: React.FC<GlowingBannerProps> = ({ phrases, index }) => {
  return (
    <div className="relative mt-10 mb-12 min-h-[120px] flex items-center justify-center">
      {/* Halo o fondo luminoso */}
      <div
        className="absolute z-10 rounded-full pointer-events-none"
        style={{
          width: "1500px",
          height: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(45px)",
          background:
            "radial-gradient(circle at center, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 30%, transparent 100%)",
          opacity: 0.9,
        }}
      />

      {/* Texto sobre el halo */}
      <div className="relative z-20 flex items-center justify-center min-h-[120px] w-full">
        <span className="text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-[2000ms] ease-in-out">
          {phrases[index]}
        </span>
      </div>
    </div>
  );
};

export default GlowingBanner;