import React from 'react';

interface IBLogoProps {
  className?: string;
  color?: string; // default signature studio olive #58654a
  hasShadow?: boolean;
}

export const IBLogo: React.FC<IBLogoProps> = ({
  className = "h-11 w-auto",
  color = "#58654a",
  hasShadow = true,
}) => {
  return (
    <svg
      viewBox="0 0 450 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      style={{
        filter: hasShadow ? 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.12))' : undefined,
      }}
      aria-label="IB Design Monogram"
    >
      <g fill={color}>
        {/* Left 'I' stem with flared serifs */}
        <path d="
          M 55 40
          C 65 40, 95 50, 95 78
          L 95 432
          C 95 460, 65 470, 55 470
          L 106 470
          C 106 460, 104 438, 102 420
          L 102 90
          C 104 72, 106 50, 106 40
          Z
        " />

        {/* Central vertical needle and descending diagonal crossbar */}
        <path d="
          M 125 470
          L 125 78
          L 142 68
          L 155 110
          L 340 350
          C 340 350, 325 365, 305 368
          L 152 180
          L 152 460
          C 152 466, 156 470, 168 470
          Z
        " />

        {/* Top horizontal cap, outer upper lobe, and calligraphic finial hook */}
        <path d="
          M 55 40
          L 325 40
          C 375 40, 400 68, 400 115
          C 400 162, 368 200, 305 200
          C 310 192, 320 180, 332 165
          C 350 142, 362 122, 362 105
          C 362 82, 342 68, 308 68
          L 95 68
          L 55 40
          Z
        " />

        {/* Expansive lower lobe and bottom baseline */}
        <path d="
          M 305 200
          C 350 228, 412 285, 412 345
          C 412 410, 368 470, 275 470
          L 125 470
          L 125 448
          L 275 448
          C 350 448, 382 405, 382 348
          C 382 305, 332 255, 280 218
          Z
        " />
      </g>
    </svg>
  );
};
