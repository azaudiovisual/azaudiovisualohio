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
`;

const CanvasElement = styled.canvas<{ isSafari: boolean, blur: number }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  ${props => props.isSafari ? `filter: blur(${props.blur}px);` : ''}
`;

const ContentWrapper = styled.div<{ className?: string }>`
  position: relative;
  z-index: 10;
  ${props => props.className}
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
  const [isSafari, setIsSafari] = useState(false);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

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
    ctx.filter = `blur(${blur}px)`;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    
    window.addEventListener('resize', handleResize);
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, render]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  useEffect(() => {
    // Support for Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <Container containerClassName={containerClassName}>
      <CanvasElement
        ref={canvasRef}
        id="canvas"
        isSafari={isSafari}
        blur={blur}
      />
      <ContentWrapper className={className} {...props}>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default WavyBackground;
