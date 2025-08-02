"use client";

import React, { CSSProperties } from "react";
import {
  LiquidGlassConfig,
  LiquidGlassContainerProps,
} from "../types/liquid-glass";

// Default configurations for different presets
const PRESETS = {
  header: {
    width: 500,
    height: 64,
    radius: 16,
    frost: 0.05,
    saturation: 1,
    border: 0.07,
    alpha: 0.93,
    lightness: 50,
    blur: 11,
    scale: -180,
    r: 0,
    g: 0,
    b: 0,
    displace: 0.2,
    x: "R" as const,
    y: "B" as const,
    blend: "difference" as const,
  },
  card: {
    width: 300,
    height: 200,
    radius: 12,
    frost: 0.03,
    saturation: 1.2,
    border: 0.05,
    alpha: 0.9,
    lightness: 45,
    blur: 8,
    scale: -120,
    r: 0,
    g: 5,
    b: 15,
    displace: 0.15,
    x: "R" as const,
    y: "B" as const,
    blend: "difference" as const,
  },
  modal: {
    width: 400,
    height: 300,
    radius: 20,
    frost: 0.08,
    saturation: 0.8,
    border: 0.08,
    alpha: 0.95,
    lightness: 55,
    blur: 15,
    scale: -200,
    r: 0,
    g: 8,
    b: 25,
    displace: 0.25,
    x: "R" as const,
    y: "B" as const,
    blend: "difference" as const,
  },
  dock: {
    width: 336,
    height: 96,
    radius: 16,
    frost: 0.05,
    saturation: 1,
    border: 0.07,
    alpha: 0.93,
    lightness: 50,
    blur: 11,
    scale: -180,
    r: 0,
    g: 10,
    b: 20,
    displace: 0.2,
    x: "R" as const,
    y: "B" as const,
    blend: "difference" as const,
  },
  pill: {
    width: 200,
    height: 60,
    radius: 30,
    frost: 0.04,
    saturation: 1.1,
    border: 0.06,
    alpha: 0.92,
    lightness: 48,
    blur: 9,
    scale: -150,
    r: 0,
    g: 7,
    b: 18,
    displace: 0.18,
    x: "R" as const,
    y: "B" as const,
    blend: "difference" as const,
  },
};

export const LiquidGlassContainer: React.FC<LiquidGlassContainerProps> = ({
  children,
  config = PRESETS.header,
  className = "",
  style = {},
  position = "relative",
  positionProps = {},
  zIndex = 10,
  id,
  onClick,
  onHover,
  responsive,
  animation = { hover: true, scale: 1.0, duration: "300ms" },
  debug = false,
}) => {
  // Merge config with preset
  const finalConfig = { ...PRESETS.header, ...config };

  const buildDisplacementImage = (): string => {
    const border =
      Math.min(finalConfig.width!, finalConfig.height!) *
      (finalConfig.border! * 0.5);
    return `
      <svg viewBox="0 0 ${finalConfig.width} ${
      finalConfig.height
    }" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red-${
            id || "default"
          }" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue-${
            id || "default"
          }" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${finalConfig.width}" height="${
      finalConfig.height
    }" fill="black"></rect>
        <rect x="0" y="0" width="${finalConfig.width}" height="${
      finalConfig.height
    }" rx="${finalConfig.radius}" fill="url(#red-${id || "default"})" />
        <rect x="0" y="0" width="${finalConfig.width}" height="${
      finalConfig.height
    }" rx="${finalConfig.radius}" fill="url(#blue-${
      id || "default"
    })" style="mix-blend-mode: ${finalConfig.blend}" />
        <rect x="${border}" y="${border}" width="${
      finalConfig.width! - border * 2
    }" height="${finalConfig.height! - border * 2}" rx="${
      finalConfig.radius
    }" fill="hsl(0 0% ${finalConfig.lightness}% / ${
      finalConfig.alpha
    })" style="filter:blur(${finalConfig.blur}px)" />
      </svg>
    `;
  };

  const getDisplacementDataUri = (): string => {
    const svg = buildDisplacementImage();
    const encoded = encodeURIComponent(svg);
    return `data:image/svg+xml,${encoded}`;
  };

  const containerStyle: CSSProperties = {
    position,
    ...positionProps,
    zIndex,
    width: `${finalConfig.width}px`,
    height: `${finalConfig.height}px`,
    borderRadius: `${finalConfig.radius}px`,
    background: `hsl(0 0% 100% / ${finalConfig.frost})`,
    backdropFilter: `url(#filter-${id || "default"}) saturate(${
      finalConfig.saturation
    })`,
    WebkitBackdropFilter: `url(#filter-${id || "default"}) saturate(${
      finalConfig.saturation
    })`,
    boxShadow: `
      0 0 2px 1px oklch(0.141 0.005 285.823 / 0.15) inset,
      0 0 10px 4px oklch(0.141 0.005 285.823 / 0.1) inset,
      0px 4px 16px rgba(17, 17, 26, 0.05),
      0px 8px 24px rgba(17, 17, 26, 0.05),
      0px 16px 56px rgba(17, 17, 26, 0.05)
    `,
    transition: animation.hover
      ? `all ${animation.duration} ease-out`
      : undefined,
    cursor: onClick ? "pointer" : undefined,
    ...style,
  };

  const hoverStyle = animation.hover
    ? {
        transform: `scale(${animation.scale})`,
      }
    : {};

  return (
    <div
      id={id}
      className={`transition-all duration-300 ease-out ${className} ${
        animation.hover ? "hover:scale-100" : ""
      }`}
      style={containerStyle}
      onClick={onClick}
      onMouseEnter={onHover}
    >
      <div className="w-full h-full overflow-hidden rounded-[inherit] relative backdrop-blur-2xl">
        {children}
      </div>

      {/* SVG Filter */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none "
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={`filter-${id || "default"}`}
            colorInterpolationFilters="sRGB"
          >
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              result="map"
              href={getDisplacementDataUri()}
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={finalConfig.x}
              yChannelSelector={finalConfig.y}
              scale={finalConfig.scale! + finalConfig.r!}
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="red"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={finalConfig.x}
              yChannelSelector={finalConfig.y}
              scale={finalConfig.scale! + finalConfig.g!}
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="green"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={finalConfig.x}
              yChannelSelector={finalConfig.y}
              scale={finalConfig.scale! + finalConfig.b!}
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
              result="blue"
            />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur in="output" stdDeviation={finalConfig.displace} />
          </filter>
        </defs>
      </svg>

      {/* Debug Displacement Preview */}
      {debug && (
        <div
          className="absolute pointer-events-none transition-all duration-300 ease-out z-[-1]"
          style={{
            width: "100%",
            height: "100%",
            transform: "translateY(calc(100% + 1rem)) scale(1)",
            opacity: 1,
          }}
        >
          <div
            className="w-full h-full rounded-[inherit]"
            style={{ borderRadius: `${finalConfig.radius}px` }}
            dangerouslySetInnerHTML={{ __html: buildDisplacementImage() }}
          />
          <div className="absolute left-1/2 top-full mt-2">
            <span className="inline-block text-sm font-mono bg-black/75 backdrop-blur-sm px-3 py-2 rounded-md whitespace-nowrap -translate-x-1/2 text-white">
              displacement image
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export { PRESETS as LiquidGlassPresets };

// Helper function untuk membuat config custom
export const createLiquidGlassConfig = (
  basePreset: keyof typeof PRESETS,
  overrides: Partial<LiquidGlassConfig> = {}
): LiquidGlassConfig => {
  return { ...PRESETS[basePreset], ...overrides };
};

// Export types
export type { LiquidGlassConfig, LiquidGlassContainerProps };
