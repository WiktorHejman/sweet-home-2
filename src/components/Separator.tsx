'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react';

export default function Separator() {
  const path = useRef<SVGPathElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const progressRef = useRef(0);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef<number | null>(null);

  const setPath = (progress: number) => {
    if (!windowWidth || !path.current) return;
    const controlX = Math.min(Math.max(windowWidth * xRef.current, 0), windowWidth);
    const controlY = Math.min(Math.max(progress, -1000), 1000);
    path.current.setAttributeNS(null, "d", `M0 0 Q${controlX} ${controlY}, ${windowWidth} 0`);
  }

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
  }

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    if (!pathBound) return;

    xRef.current = Math.min(Math.max((clientX - pathBound.left) / pathBound.width, 0), 1);
    progressRef.current += movementY;
    setPath(progressRef.current);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = lerp(progressRef.current, 0, 0.025);
    timeRef.current += 0.2;
    setPath(newProgress);

    if (Math.abs(progressRef.current) > 0.75) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
    reqIdRef.current = null;
  }

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      requestAnimationFrame(() => {
        if (path.current) {
          path.current.setAttributeNS(null, "d", `M0 0 Q${width * 0.5} 0, ${width} 0`);
        }
      });
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, []);

  if (!windowWidth) return null;

  return (
    <div className="h-px w-full relative">
      <div
        className="h-10 w-full relative -top-5 z-10"
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
      />
      <svg
        className="w-full h-[50px] absolute -top-[25px] left-0 right-0"
        preserveAspectRatio="none"
        viewBox={`0 -50 ${windowWidth} 100`}
      >
        <path
          ref={path}
          className="stroke-forest-500/30 stroke-[2px] fill-none [vector-effect:non-scaling-stroke]"
          d={`M0 0 Q${windowWidth * 0.5} 0, ${windowWidth} 0`}
        />
      </svg>
    </div>
  )
};
