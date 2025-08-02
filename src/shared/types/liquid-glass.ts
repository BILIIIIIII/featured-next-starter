import { CSSProperties, ReactNode } from "react";

// Types
export interface LiquidGlassConfig {
  width?: number;
  height?: number;
  radius?: number;
  frost?: number;
  saturation?: number;
  border?: number;
  alpha?: number;
  lightness?: number;
  blur?: number;
  scale?: number;
  r?: number;
  g?: number;
  b?: number;
  displace?: number;
  x?: "R" | "G" | "B" | "A";
  y?: "R" | "G" | "B" | "A";
  blend?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "difference"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light";
}

export interface LiquidGlassContainerProps {
  children: ReactNode;
  config?: LiquidGlassConfig;
  className?: string;
  style?: CSSProperties;
  position?: "fixed" | "sticky" | "absolute" | "relative" | "static";
  positionProps?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
  zIndex?: number;
  id?: string;
  onClick?: () => void;
  onHover?: () => void;
  responsive?: {
    mobile?: Partial<LiquidGlassConfig>;
    tablet?: Partial<LiquidGlassConfig>;
    desktop?: Partial<LiquidGlassConfig>;
  };
  animation?: {
    hover?: boolean;
    scale?: number;
    duration?: string;
  };
  debug?: boolean;
}
