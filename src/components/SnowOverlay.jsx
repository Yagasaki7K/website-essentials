"use client";

import { useEffect, useRef, useState } from "react";

// --- Configurações do efeito ---
const FLAKES = 280; // quantidade de flocos
const MIN_SIZE = 1.2; // tamanho mínimo (px)
const MAX_SIZE = 4; // tamanho máximo (px)
const MIN_SPEED = 50; // velocidade mínima base (px/seg)
const MAX_SPEED = 100; // velocidade máxima base (px/seg)
const WIND_X = 8; // amplitude máxima do vento global (px/seg) — varia suavemente
const PER_FLAKE_DRIFT = 0.6; // desvio horizontal constante por floco (px/seg)
const OPACITY_MIN = 0.35; // opacidade mínima
const OPACITY_MAX = 0.9; // opacidade máxima

// Função utilitária: retorna true se estamos entre 01/12 e 02/01 (inclusive).
function isHolidayWindow(d) {
	// Meses no JS são 0-baseados: Jan=0, Dez=11
	const m = d.getMonth();
	const day = d.getDate();
	// Dezembro (>= 1) OU Janeiro (<= 2)
	return (m === 11 && day >= 1) || (m === 0 && day <= 2);
}

// Respeitar `prefers-reduced-motion`
function prefersReducedMotion() {
	if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SnowOverlay() {
	const canvasRef = useRef(null);
	const rafRef = useRef(null);
	const flakesRef = useRef([]);
	const lastTsRef = useRef(0);
	const [enabled, setEnabled] = useState(false);

	// Ativar apenas de 01/12 a 02/01 (descomente para usar a janela sazonal)
	useEffect(() => {
		if (typeof window === "undefined") return;
		const now = new Date();
		const active = isHolidayWindow(now) && !prefersReducedMotion();
		setEnabled(active);
	}, []);

	useEffect(() => {
		if (!enabled) return; // fora da janela de datas ou usuário prefere menos movimento

		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Ajusta o tamanho do canvas para viewport
		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = window.innerWidth + "px";
			canvas.style.height = window.innerHeight + "px";
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		// Inicializa flocos
		const rand = (min, max) => Math.random() * (max - min) + min;

		const spawnFlake = (yRand = true) => {
			const r = rand(MIN_SIZE, MAX_SIZE);
			// velocidade base + componente proporcional ao tamanho (maiores caem um pouco mais rápido)
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
			flakesRef.current = Array.from({ length: FLAKES }, () => spawnFlake(true));
			lastTsRef.current = performance.now();
		};

		init();
		window.addEventListener("resize", resize);

		// Vento global suave: varia lentamente com o tempo (sem zig-zag por floco)
		// Dois senos de baixa frequência para dar sensação de rajadas ocasionais.
		const globalWind = (tSec) => Math.sin(tSec * 0.12) * (WIND_X * 1) + Math.sin((tSec + 7.13) * 0.04) * (WIND_X * 0.4);

		const step = (ts) => {
			const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000); // delta time (s), cap para estabilidade
			lastTsRef.current = ts;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const tSec = ts / 1000;
			const wind = globalWind(tSec);

			for (let i = 0; i < flakesRef.current.length; i++) {
				const f = flakesRef.current[i];

				// Atualiza posição: queda vertical + vento global + drift leve e constante do floco
				f.y += f.speed * dt;
				f.x += (wind + f.drift) * dt;

				// Reaparece no topo se sair da tela inferior
				if (f.y - f.r > window.innerHeight) {
					flakesRef.current[i] = spawnFlake(false);
					continue;
				}
				// Teleporta para o outro lado se sair lateralmente (efeito wrap sutil)
				if (f.x < -10) f.x = window.innerWidth + 10;
				if (f.x > window.innerWidth + 10) f.x = -10;

				// Desenha floco
				ctx.globalAlpha = f.alpha;
				ctx.beginPath();
				ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
				ctx.fillStyle = "#ffffff";
				ctx.fill();

				// brilho suave
				ctx.globalAlpha = Math.min(1, f.alpha * 0.5);
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
		};
	}, [enabled]);

	if (!enabled) return null;

	// Canvas overlay em tela cheia, sem bloquear cliques
	return (
		<div
			aria-hidden
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				zIndex: 9999, // acima de tudo, mas sem interatividade
			}}
		>
			<canvas ref={canvasRef} />
		</div>
	);
}
