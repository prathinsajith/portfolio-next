"use client";

import { useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    shape: "rect" | "circle" | "strip";
}

const COLORS = [
    "#00ffff", "#ffc62c", "#bd2426", "#ff6b9d",
    "#c084fc", "#34d399", "#fbbf24", "#60a5fa",
    "#f472b6", "#a78bfa", "#fb923c", "#22d3ee",
];

function spawnBurst(W: number, H: number, count = 60): Particle[] {
    const batch: Particle[] = [];

    for (let i = 0; i < count; i++) {
        const fromLeft = i % 2 === 0;
        const originX = fromLeft ? -50 : W + 50;
        const originY = H + 50; // Use bottom corners

        // Angle pointing upwards and inwards (global standard cannon style)
        const baseAngle = fromLeft
            ? -Math.PI * 0.15 - Math.random() * Math.PI * 0.25 // Top-right trajectory
            : -Math.PI * 0.6 - Math.random() * Math.PI * 0.25;  // Top-left trajectory

        const speed = 15 + Math.random() * 25; // Higher speed for upward launch
        const shapes: Particle["shape"][] = ["rect", "circle", "strip"];

        batch.push({
            x: originX,
            y: originY,
            vx: Math.cos(baseAngle) * speed,
            vy: Math.sin(baseAngle) * speed,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: 2 + Math.random() * 4,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.4,
            opacity: 1,
            shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
    }

    return batch;
}

export function useConfetti() {
    const fire = useCallback(() => {
        const canvas = document.createElement("canvas");
        canvas.style.cssText =
            "position:fixed;inset:0;z-index:99999;pointer-events:none;";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            canvas.remove();
            return;
        }

        const W = canvas.width;
        const H = canvas.height;
        let particles: Particle[] = [];

        // Denser initial burst for impact
        particles.push(...spawnBurst(W, H, 200));

        // Rapid secondary bursts within the first 1s
        const burstTimers: ReturnType<typeof setTimeout>[] = [];
        const burstIntervals = [100, 250, 400, 600, 800];
        for (const delay of burstIntervals) {
            burstTimers.push(setTimeout(() => {
                particles.push(...spawnBurst(W, H, 60));
            }, delay));
        }

        const gravity = 0.25; // Standard gravity for nice arc
        const friction = 0.985;
        let animId: number;
        const startTime = Date.now();
        const DURATION = 1000;

        function animate() {
            const elapsed = Date.now() - startTime;
            ctx!.clearRect(0, 0, canvas.width, canvas.height);

            let alive = false;

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.vy += gravity;
                p.vx *= friction;
                p.vy *= friction;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                // Fast fade-out after the 1s peak
                if (elapsed > DURATION) {
                    p.opacity -= 0.04;
                }

                if (p.opacity <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                alive = true;

                ctx!.save();
                ctx!.translate(p.x, p.y);
                ctx!.rotate(p.rotation);
                ctx!.globalAlpha = Math.max(0, p.opacity);
                ctx!.fillStyle = p.color;

                if (p.shape === "rect") {
                    ctx!.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                } else if (p.shape === "strip") {
                    ctx!.fillRect(-p.size / 2, -p.size / 6, p.size * 1.5, p.size / 3);
                } else {
                    ctx!.beginPath();
                    ctx!.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    ctx!.fill();
                }

                ctx!.restore();
            }

            // Keep animating as long as particles are visible, even if duration is over
            if (alive) {
                animId = requestAnimationFrame(animate);
            } else {
                cancelAnimationFrame(animId);
                canvas.remove();
            }
        }

        animId = requestAnimationFrame(animate);

        // Safety cleanup - extended to ensure animation finishes
        setTimeout(() => {
            cancelAnimationFrame(animId);
            burstTimers.forEach(clearTimeout);
            if (canvas.parentNode) canvas.remove();
        }, 5000); // 5s absolute max life
    }, []);

    return fire;
}
