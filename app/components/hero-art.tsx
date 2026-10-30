"use client";

import { useEffect, useRef } from "react";

export default function HeroArt() {
  const artRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = artRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty("--pointer-x", `${x}%`);
      element.style.setProperty("--pointer-y", `${y}%`);
      frameRef.current = null;
    });
  }

  function handlePointerLeave() {
    const element = artRef.current;
    if (!element) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    element.style.setProperty("--pointer-x", "50%");
    element.style.setProperty("--pointer-y", "50%");
  }

  return (
    <div className="hero-art" ref={artRef} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} aria-hidden="true">
      <div className="art-grid" />
      <div className="art-glow" />
      <div className="art-ring ring-one" />
      <div className="art-ring ring-two" />
      <div className="art-ring ring-three" />
      <div className="art-center"><div className="art-center-inner"><span>ECE</span><strong>SOFTWARE</strong></div></div>
      <div className="art-node node-one" />
      <div className="art-node node-two" />
      <div className="art-node node-three" />
      <div className="art-corner corner-top-left" />
      <div className="art-corner corner-top-right" />
      <div className="art-corner corner-bottom-left" />
      <div className="art-corner corner-bottom-right" />
      <div className="art-label label-top">BUILD / LEARN / SHARE</div>
      <div className="art-label label-bottom">40°14′ N &nbsp; 111°39′ W</div>
      <div className="art-index">01 — 04</div>
    </div>
  );
}
