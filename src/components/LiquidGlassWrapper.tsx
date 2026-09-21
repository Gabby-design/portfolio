'use client';

import React, { useState, useEffect } from 'react';
import { LiquidGlass } from 'quick-liquid/react';

export interface LiquidGlassWrapperProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  config?: {
    material?: 'clear' | 'thin' | 'regular' | 'thick' | 'ultra' | 'adaptive';
    blur?: number;
    saturation?: number;
    tint?: string;
    tintOpacity?: number;
    refractionStrength?: number;
    bezelWidth?: number;
    thickness?: number;
    ior?: number;
    chromaticAberration?: number;
    lightAngle?: number;
    edgeHighlight?: number;
    specularStrength?: number;
    dispersionMode?: 'auto' | 'exact';
    respectPreferences?: boolean;
    fresnelPower?: number;
    hoverLighting?: boolean;
    cursorTracking?: boolean;
    dynamicLighting?: boolean;
    parallax?: boolean;
    elevation?: number;
    borderRadius?: number;
    quality?: 'high' | 'medium' | 'low';
    refractionMode?: 'auto' | 'svg' | 'css';
    appearance?: 'light' | 'dark' | 'auto';
  };
  liquidPress?: boolean | {
    scale?: number;
    squish?: number;
  };
  animateIn?: boolean | number;
  jiggle?: boolean | number;
  fallbackClassName?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const DEFAULT_LIQUID_PRESS = Object.freeze({ scale: 0.95, squish: 0.02 });

const BASE_GLASS_CONFIG = Object.freeze({
  material: 'thin' as const,
  quality: 'medium' as const,
  tintOpacity: 0.02,
  blur: 1,
  refractionStrength: 30,
  edgeHighlight: 0.98,
  specularStrength: 0.6,
  chromaticAberration: 0.25,
  lightAngle: -90,
  borderRadius: 16,
  cursorTracking: false,
  hoverLighting: true,
  dynamicLighting: true,
});

const LiquidGlassWrapperComponent: React.FC<LiquidGlassWrapperProps> = ({
  config,
  liquidPress,
  animateIn,
  jiggle,
  fallbackClassName = 'liquid-glass-fallback',
  className = '',
  style,
  children,
  as: Component = 'div',
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Stable config reference to prevent unnecessary engine rebuilds in QuickLiquid
  const configString = config ? JSON.stringify(config) : null;
  const mergedConfig = React.useMemo(() => {
    if (!config) return BASE_GLASS_CONFIG;
    return {
      ...BASE_GLASS_CONFIG,
      ...config,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configString]);

  const liquidPressScale = typeof liquidPress === 'object' ? liquidPress.scale : undefined;
  const liquidPressSquish = typeof liquidPress === 'object' ? liquidPress.squish : undefined;

  // Stable liquidPress reference so event listeners aren't torn down and recreated on every render
  const resolvedLiquidPress = React.useMemo(() => {
    if (liquidPress === false) return false;
    if (liquidPress === true || liquidPress === undefined) return DEFAULT_LIQUID_PRESS;
    return {
      scale: liquidPressScale ?? DEFAULT_LIQUID_PRESS.scale,
      squish: liquidPressSquish ?? DEFAULT_LIQUID_PRESS.squish,
    };
  }, [liquidPress, liquidPressScale, liquidPressSquish]);

  // During SSR or before client hydration, render with fallback glass styling
  if (!isMounted) {
    const FallbackTag = Component;
    return (
      <FallbackTag
        suppressHydrationWarning
        className={`${fallbackClassName} ${className}`}
        style={style}
        {...props}
      >
        <div style={{ position: 'relative', zIndex: 10 }} className="ql-content">
          {children}
        </div>
      </FallbackTag>
    );
  }

  return (
    <LiquidGlass
      config={mergedConfig}
      liquidPress={resolvedLiquidPress}
      animateIn={animateIn}
      jiggle={jiggle}
      as={Component as unknown as keyof React.JSX.IntrinsicElements}
      className={`${fallbackClassName} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export const LiquidGlassWrapper = React.memo(LiquidGlassWrapperComponent);
export default LiquidGlassWrapper;
