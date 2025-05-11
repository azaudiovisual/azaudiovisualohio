import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import styled from "styled-components";

const Container = styled.div<{ containerClassName?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.containerClassName}
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: auto;
    min-height: 120vh;
    padding-top: 60px;
  }
`;

const CanvasElement = styled.canvas<{ useCSS: boolean, blur: number }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  ${props => props.useCSS ? `filter: blur(${props.blur}px);` : ''}
`;

const ContentWrapper = styled.div<{ className?: string }>`
  position: relative;
  z-index: 10;
  width: 100%;
  ${props => props.className}
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    padding-top: 50px;
  }
`;

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const [useCSS, setUseCSS] = useState(false);
  
  const drawWave = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, nt: number) => {
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [colors, noise, waveWidth]);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let nt = 0;
    
    const animate = () => {
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      nt += getSpeed();
      drawWave(ctx, canvas.width, canvas.height, nt);
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  }, [backgroundFill, drawWave, getSpeed, waveOpacity]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Only apply canvas filter if we're not using CSS filter
    if (!useCSS) {
      ctx.filter = `blur(${blur}px)`;
    }
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Only apply canvas filter if we're not using CSS filter
    if (!useCSS) {
      ctx.filter = `blur(${blur}px)`;
    }
    };
    
    window.addEventListener('resize', handleResize);
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, render, useCSS]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  useEffect(() => {
    // Detect browsers that might need CSS-based blur instead of canvas filter
    // This includes Safari, Instagram's in-app browser, and other WebViews
    const ua = navigator.userAgent.toLowerCase();
    const isSafari = ua.includes("safari") && !ua.includes("chrome");
    const isInstagramBrowser = ua.includes("instagram");
    const isFacebookBrowser = ua.includes("fbios") || ua.includes("fb_iab");
    const isWebView = ua.includes("wv") || ua.includes("webview");
    
    // Use CSS blur for problematic browsers
    setUseCSS(isSafari || isInstagramBrowser || isFacebookBrowser || isWebView);
  }, []);

  return (
    <Container containerClassName={containerClassName}>
      <CanvasElement
        ref={canvasRef}
        id="canvas"
        useCSS={useCSS}
        blur={blur}
      />
      <ContentWrapper className={className} {...props}>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default WavyBackground;
