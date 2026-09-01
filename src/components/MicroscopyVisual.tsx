import { useEffect, useRef, useState, type MouseEvent } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  membranePoints: { angle: number; distance: number; speed: number }[];
  hue: number;
  opacity: number;
}

export function MicroscopyVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewMode, setViewMode] = useState<'canvas' | 'photo'>('canvas');
  const [activeMagnification, setActiveMagnification] = useState<'100x' | '400x' | '1000x'>('400x');
  const [isInteractive, setIsInteractive] = useState(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    const observer = new ResizeObserver(resize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Generate scientific cellular particles
    const particleCount = 14;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = 14 + Math.random() * 28;
      const membranePointsCount = 8;
      const membranePoints = [];
      for (let j = 0; j < membranePointsCount; j++) {
        membranePoints.push({
          angle: (j * 2 * Math.PI) / membranePointsCount,
          distance: 0.9 + Math.random() * 0.2,
          speed: 0.005 + Math.random() * 0.015
        });
      }

      particles.push({
        x: Math.random() * (width || 400),
        y: Math.random() * (height || 400),
        radius: baseRadius,
        baseRadius,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        membranePoints,
        hue: i % 3 === 0 ? 160 : 180, // subtle sage/teal spectrum
        opacity: 0.15 + Math.random() * 0.35
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle optical reticle circle
      const centerX = width / 2;
      const centerY = height / 2;
      const fieldRadius = Math.min(width, height) * 0.44;

      // Outer focus ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, fieldRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(24, 24, 27, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Inner high-precision aperture
      ctx.beginPath();
      ctx.arc(centerX, centerY, fieldRadius * 0.88, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(13, 92, 70, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Precision crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - 16, centerY);
      ctx.lineTo(centerX + 16, centerY);
      ctx.moveTo(centerX, centerY - 16);
      ctx.lineTo(centerX, centerY + 16);
      ctx.strokeStyle = 'rgba(13, 92, 70, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Tick markers at 4 compass points
      const tickLength = 6;
      [
        [centerX, centerY - fieldRadius],
        [centerX, centerY + fieldRadius],
        [centerX - fieldRadius, centerY],
        [centerX + fieldRadius, centerY]
      ].forEach(([tx, ty], idx) => {
        ctx.beginPath();
        if (idx < 2) {
          ctx.moveTo(tx - tickLength, ty);
          ctx.lineTo(tx + tickLength, ty);
        } else {
          ctx.moveTo(tx, ty - tickLength);
          ctx.lineTo(tx, ty + tickLength);
        }
        ctx.strokeStyle = 'rgba(24, 24, 27, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 2. Animate and draw cellular vesicle entities
      particles.forEach((p, index) => {
        // Move with subtle Brownian drift
        p.x += p.vx;
        p.y += p.vy;

        // Interactive gentle repulsion/influence
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 1) {
            const force = (120 - dist) / 120 * 0.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Wrap around bounds with buffer
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // Draw organic fluid membrane using smoothed curves
        ctx.beginPath();
        const pts = p.membranePoints;
        const currentPoints: { x: number; y: number }[] = [];

        for (let j = 0; j < pts.length; j++) {
          const angle = pts[j].angle + time * pts[j].speed;
          const wave = Math.sin(time * 2 + j) * 2.5;
          const r = p.radius * pts[j].distance + wave;
          currentPoints.push({
            x: p.x + Math.cos(angle) * r,
            y: p.y + Math.sin(angle) * r
          });
        }

        // Close path with smooth Bezier splines
        if (currentPoints.length > 0) {
          ctx.moveTo(currentPoints[0].x, currentPoints[0].y);
          for (let j = 0; j < currentPoints.length; j++) {
            const next = currentPoints[(j + 1) % currentPoints.length];
            const midX = (currentPoints[j].x + next.x) / 2;
            const midY = (currentPoints[j].y + next.y) / 2;
            ctx.quadraticCurveTo(currentPoints[j].x, currentPoints[j].y, midX, midY);
          }
          ctx.closePath();

          // Subtle organic fill & membrane stroke
          const isHighlight = index % 4 === 0;
          ctx.fillStyle = isHighlight
            ? `rgba(13, 92, 70, ${p.opacity * 0.12})`
            : `rgba(24, 24, 27, ${p.opacity * 0.05})`;
          ctx.fill();

          ctx.strokeStyle = isHighlight
            ? `rgba(13, 92, 70, ${p.opacity * 0.45})`
            : `rgba(24, 24, 27, ${p.opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Tiny internal nucleoid / organelle dot
          ctx.beginPath();
          ctx.arc(p.x + Math.sin(time + index) * 3, p.y + Math.cos(time + index) * 3, 2, 0, Math.PI * 2);
          ctx.fillStyle = isHighlight ? 'rgba(13, 92, 70, 0.4)' : 'rgba(24, 24, 27, 0.2)';
          ctx.fill();
        }

        // Draw delicate filament / intercellular connection to nearest neighbor
        if (index > 0) {
          const prev = particles[index - 1];
          const dist = Math.hypot(p.x - prev.x, p.y - prev.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(prev.x, prev.y);
            ctx.strokeStyle = `rgba(13, 92, 70, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [activeMagnification]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
    if (!isInteractive) setIsInteractive(true);
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div
      id="microscopy-visual-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[340px] md:min-h-[420px] rounded-2xl border border-stone-200/80 bg-white/80 backdrop-blur-[2px] p-4 flex flex-col justify-between overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
    >
      {/* Top telemetry bar with View Switcher */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono-code text-stone-500 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <div className="flex items-center gap-1 bg-stone-100/90 p-0.5 rounded border border-stone-200/70 text-[10px]">
            <button
              onClick={() => setViewMode('canvas')}
              className={`px-2 py-0.5 rounded transition-all ${
                viewMode === 'canvas'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Optics Simulation
            </button>
            <button
              onClick={() => setViewMode('photo')}
              className={`px-2 py-0.5 rounded transition-all ${
                viewMode === 'photo'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Lab Micrograph
            </button>
          </div>
        </div>

        {viewMode === 'canvas' ? (
          <div className="flex items-center gap-1.5 bg-stone-100/80 px-2 py-0.5 rounded border border-stone-200/60 text-[10px]">
            {(['100x', '400x', '1000x'] as const).map((mag) => (
              <button
                key={mag}
                onClick={() => setActiveMagnification(mag)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  activeMagnification === mag
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {mag}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-[10px] text-stone-500 bg-stone-100/80 px-2 py-0.5 rounded border border-stone-200/60">
            AGAR COLONY BIOBURDEN
          </span>
        )}
      </div>

      {/* Canvas Mode */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
          viewMode === 'canvas' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* High Quality Micrograph Photo Mode */}
      {viewMode === 'photo' && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="Microbiology culture agar plate in sterile pharmaceutical laboratory"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-105 filter brightness-95 opacity-90 transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle laboratory grid & reticle overlay */}
          <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-grid-delicate pointer-events-none opacity-40" />
          
          {/* Scientific Reticle Target */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 rounded-full border border-white/40 border-dashed flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/60 relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/60 -translate-y-1/2" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/60 -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom telemetry overlay */}
      <div className="relative z-20 flex items-end justify-between text-[10px] font-mono-code text-stone-600 bg-white/85 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-stone-200/70 mt-auto shadow-xs">
        <div>
          <span className="text-stone-900 font-semibold">
            {viewMode === 'canvas' ? 'SPECIMEN:' : 'ASSAY:'}
          </span>{' '}
          {viewMode === 'canvas' ? 'IN-VITRO MEMBRANE DYNAMICS' : 'PURIFIED WATER BIOBURDEN (CFU/mL)'}
        </div>
        <div className="text-right flex items-center gap-2 sm:gap-3">
          <span>SCALE: 10 µm</span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span className="hidden sm:inline text-stone-700 font-medium">ISO 14644-1 GRADE A</span>
        </div>
      </div>
    </div>
  );
}
