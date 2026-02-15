"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const ringStyle = useRef({
    width: 32,
    height: 32,
    borderRadius: "50%",
    opacity: 0.5,
    borderWidth: "1px"
  });

  const hElement = useRef<HTMLElement | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button") ||
        t.classList.contains("cursor-wrap");

      if (interactive) {
        hElement.current = (t.closest("a") || t.closest("button") || (t.classList.contains("cursor-wrap") ? t : null)) as HTMLElement;
      } else {
        hElement.current = null;
      }
    };

    function tick() {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      const dot = dotRef.current;
      const ring = ringRef.current;

      if (hElement.current) {
        const rect = hElement.current.getBoundingClientRect();
        const padding = 8;

        // Target values for "wrap" mode
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        const targetW = rect.width + padding * 2;
        const targetH = rect.height + padding * 2;
        const targetRadius = window.getComputedStyle(hElement.current).borderRadius;

        // Sticky magnetic pull — 30% towards center of element
        pos.current.x += (targetX - pos.current.x) * 0.15;
        pos.current.y += (targetY - pos.current.y) * 0.15;

        // Morph ring
        ringStyle.current.width += (targetW - ringStyle.current.width) * 0.2;
        ringStyle.current.height += (targetH - ringStyle.current.height) * 0.2;
        ringStyle.current.opacity += (1 - ringStyle.current.opacity) * 0.2;
        ringStyle.current.borderWidth = "2px";

        // Match border radius
        if (ring) ring.style.borderRadius = targetRadius || "8px";
        if (dot) dot.style.opacity = "0";
      } else {
        // Normal mode
        pos.current.x += (mx - pos.current.x) * 0.35;
        pos.current.y += (my - pos.current.y) * 0.35;

        ringStyle.current.width += (32 - ringStyle.current.width) * 0.2;
        ringStyle.current.height += (32 - ringStyle.current.height) * 0.2;
        ringStyle.current.opacity += (0.5 - ringStyle.current.opacity) * 0.2;
        ringStyle.current.borderWidth = "1px";

        if (ring) ring.style.borderRadius = "50%";
        if (dot) {
          dot.style.opacity = "1";
          dot.style.transform = `translate3d(${mx - 8}px, ${my - 8}px, 0)`;
        }
      }

      if (ring) {
        ring.style.width = `${ringStyle.current.width}px`;
        ring.style.height = `${ringStyle.current.height}px`;
        ring.style.opacity = `${ringStyle.current.opacity}`;
        ring.style.borderWidth = ringStyle.current.borderWidth;
        ring.style.transform = `translate3d(${pos.current.x - ringStyle.current.width / 2}px, ${pos.current.y - ringStyle.current.height / 2}px, 0)`;
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
          body { cursor: none !important; }
          a, button, .cursor-pointer { cursor: none !important; }
        }
      `}</style>

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ willChange: "transform, opacity" }}
      />

      <div
        ref={ringRef}
        className="fixed top-0 left-0 border border-primary pointer-events-none z-[9998] transition-[border-radius] duration-300 ease-out"
        style={{ willChange: "transform, width, height, opacity, border-radius" }}
      />
    </>
  );
}
