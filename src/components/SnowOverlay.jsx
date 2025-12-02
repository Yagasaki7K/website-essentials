"use client";

import { useEffect, useRef, useState } from "react";

const FLAKES = 280;
const MIN_SIZE = 1.2;
const MAX_SIZE = 4;
const MIN_SPEED = 50;
const MAX_SPEED = 100;
const WIND_X = 8;
const PER_FLAKE_DRIFT = 0.6;
const OPACITY_MIN = 0.35;
const OPACITY_MAX = 0.9;

const FORCE_SNOW = process.env.NEXT_PUBLIC_FORCE_SNOW === "true";

function prefersMotionReduced() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SnowOverlay() {
	const canvasRef = useRef(null);
	const rafRef = useRef(null);
	const flakesRef = useRef([]);
	const lastTsRef = useRef(0);

	const [enabled, setEnabled] = useState(false);
	const [isDecember, setIsDecember] = useState(false);
	const [prefersReduced, setPrefersReduced] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const checkMonth = () => {
			const now = new Date();
			const month = now.getMonth();
			const december = month === 11;
			setIsDecember(december);

			console.log(`[SnowOverlay] Month check => month=${month + 1}, december=${december}. Next check in 60 minutes.`);
		};

		checkMonth();
		const interval = window.setInterval(checkMonth, 1000 * 60 * 60);

		return () => window.clearInterval(interval);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const media = window.matchMedia("(prefers-reduced-motion: reduce)");

		const updateEnabled = () => {
			const reduced = media.matches;
			const shouldEnable = FORCE_SNOW || isDecember;

			setPrefersReduced(reduced);
			setEnabled(shouldEnable);

			console.log(`[SnowOverlay] Update enabled => reducedMotion=${reduced}, isDecember=${isDecember}, enabled=${shouldEnable}`);

			if (reduced && isDecember && !FORCE_SNOW) {
				console.info("[SnowOverlay] Reduced motion detected; using gentle snow animation. Set NEXT_PUBLIC_FORCE_SNOW=true to use full animation.");
			}
		};

		updateEnabled();
		media.addEventListener("change", updateEnabled);

		return () => {
			media.removeEventListener("change", updateEnabled);
		};
	}, [isDecember]);

	useEffect(() => {
		if (!enabled) {
			console.log("[SnowOverlay] Animation skipped because overlay is disabled.");
			return;
		}

		const canvas = canvasRef.current;
		if (!canvas) {
			console.warn("[SnowOverlay] Canvas ref missing; snow overlay cannot start.");
			return;
		}

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			console.warn("[SnowOverlay] 2D context unavailable; snow overlay cannot start.");
			return;
		}

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			const width = window.innerWidth;
			const height = window.innerHeight;

			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);

			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const rand = (min, max) => Math.random() * (max - min) + min;

		const spawnFlake = (yRand = true) => {
			const r = rand(MIN_SIZE, MAX_SIZE);
			const speed = rand(MIN_SPEED, MAX_SPEED) + r * 2.2;

			return {
				x: rand(0, window.innerWidth),
				y: yRand ? rand(-window.innerHeight, 0) : -10,
				r,
				speed,
				drift: rand(-PER_FLAKE_DRIFT, PER_FLAKE_DRIFT),
				alpha: rand(OPACITY_MIN, OPACITY_MAX),
			};
		};

		const init = () => {
			resize();

			const flakeTarget = prefersReduced && !FORCE_SNOW ? Math.floor(FLAKES * 0.35) : FLAKES;

			flakesRef.current = Array.from({ length: flakeTarget }, () => spawnFlake());

			lastTsRef.current = performance.now();

			console.log(`[SnowOverlay] Initialized with ${flakesRef.current.length} flakes at ${canvas.width}x${canvas.height} (device pixels).`);
		};

		init();
		window.addEventListener("resize", resize);

		const globalWind = (tSec) => Math.sin(tSec * 0.12) * WIND_X + Math.sin((tSec + 7.13) * 0.04) * (WIND_X * 0.4);

		const step = (ts) => {
			const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
			lastTsRef.current = ts;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const tSec = ts / 1000;
			const windScale = prefersReduced && !FORCE_SNOW ? 0.35 : 1;
			const wind = windScale * globalWind(tSec);

			for (let i = 0; i < flakesRef.current.length; i++) {
				const f = flakesRef.current[i];
				const speedScale = windScale;

				f.y += f.speed * dt * speedScale;
				f.x += (wind + f.drift) * dt * speedScale;

				if (f.y - f.r > window.innerHeight) {
					flakesRef.current[i] = spawnFlake(false);
					continue;
				}

				if (f.x < -10) f.x = window.innerWidth + 10;
				if (f.x > window.innerWidth + 10) f.x = -10;

				ctx.globalAlpha = f.alpha;
				ctx.beginPath();
				ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
				ctx.fillStyle = "#ffffff";
				ctx.fill();

				ctx.globalAlpha = f.alpha * 0.5;
				ctx.beginPath();
				ctx.arc(f.x + f.r * 0.35, f.y + f.r * 0.35, f.r * 0.6, 0, Math.PI * 2);
				ctx.fill();
			}

			rafRef.current = requestAnimationFrame(step);
		};

		rafRef.current = requestAnimationFrame(step);

		return () => {
			window.removeEventListener("resize", resize);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			console.log("[SnowOverlay] Animation stopped and listeners removed.");
		};
	}, [enabled, prefersReduced]);

	if (!enabled) return null;

	return (
		<div
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				zIndex: 9999,
			}}
		>
			<canvas ref={canvasRef} width={300} height={150} />
		</div>
	);
}
