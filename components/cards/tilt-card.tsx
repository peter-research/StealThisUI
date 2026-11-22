"use client";

import React, { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 12,
  scale = 1.05,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    if (glare) {
      const glareEl = card.querySelector(".tilt-glare") as HTMLElement;
      if (glareEl) {
        glareEl.style.opacity = "1";
        glareEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25), transparent 60%)`;
      }
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    const glareEl = card.querySelector(".tilt-glare") as HTMLElement;
    if (glareEl) glareEl.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-transform duration-200 ease-out will-change-transform",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {glare && (
        <div className="tilt-glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
      )}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </div>
  );
}
