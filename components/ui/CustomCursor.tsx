"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button") ||
        t.classList.contains("cursor-pointer");
    };

    function tick() {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Dot follows mouse almost instantly (high lerp = fast)
      dotPos.current.x += (mx - dotPos.current.x) * 0.6;
      dotPos.current.y += (my - dotPos.current.y) * 0.6;

      // Ring trails slightly behind (lower lerp = trailing effect)
      ringPos.current.x += (mx - ringPos.current.x) * 0.25;
      ringPos.current.y += (my - ringPos.current.y) * 0.25;

      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot) {
        const s = hovering.current ? 0.5 : 1;
        dot.style.transform = `translate3d(${dotPos.current.x - 8}px, ${dotPos.current.y - 8}px, 0) scale(${s})`;
      }

      if (ring) {
        const s = hovering.current ? 1.5 : 1;
        ring.style.opacity = hovering.current ? "1" : "0.5";
        ring.style.transform = `translate3d(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px, 0) scale(${s})`;
      }

      rafId.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, .cursor-pointer { cursor: none !important; }
        }
      `}</style>

      {/* Main Dot — snaps to cursor fast */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary/80 rounded-full pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />

      {/* Trailing Ring — gentle trail behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998]"
        style={{ willChange: "transform, opacity" }}
      />
    </>
  );
}
