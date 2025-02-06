'use client'

import { MouseEvent, useEffect, useRef } from 'react';

export default function Separator() {
  const path = useRef<SVGPathElement>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  const setPath = (progress: number) => {
    const width = window.innerWidth;
    path.current?.setAttributeNS(null, "d", `M0 0 Q${width * x} ${progress}, ${width} 0`)
  }

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    const pathBound = path.current!.getBoundingClientRect();
    x = (clientX - pathBound!.left) / pathBound!.width;
    progress += movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    }
    else {
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  useEffect(() => {
    setPath(progress);
  }, [])

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
        viewBox={`0 -50 ${window.innerWidth} 100`}
      >
        <path
          ref={path}
          className="stroke-forest-500/30 stroke-[2px] fill-none [vector-effect:non-scaling-stroke]"
        />
      </svg>
    </div>
  )
};
