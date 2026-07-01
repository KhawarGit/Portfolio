// "use client";
// import React, { useRef, useEffect } from 'react';

// type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

// interface GridOffset {
//   x: number;
//   y: number;
// }

// interface ShapeGridProps {
//   direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
//   speed?: number;
//   borderColor?: CanvasStrokeStyle;
//   squareSize?: number;
//   hoverFillColor?: CanvasStrokeStyle;
//   shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
//   hoverTrailAmount?: number;
//   variant?: 'filled' | 'outline';
//   borderWidth?: number;
//   glow?: boolean;
//   glowColor?: string;
//   dashed?: boolean;
//   dualStroke?: boolean;
//   dualStrokeColor?: CanvasStrokeStyle;
// }

// const ShapeGridOutline: React.FC<ShapeGridProps> = ({
//   direction = 'right',
//   speed = 1,
//   borderColor = 'rgba(105, 170, 255, 0.18)',
//   squareSize = 40,
//   hoverFillColor = 'rgba(110, 190, 255, 0.08)',
//   shape = 'square',
//   hoverTrailAmount = 0,
//   variant = 'filled',
//   borderWidth = 1.25,
//   glow = false,
//   glowColor = 'rgba(80, 220, 255, 0.15)',
//   dashed = false,
//   dualStroke = false,
//   dualStrokeColor = 'rgba(255, 255, 255, 0.03)'
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const lastMouseMoveRef = useRef<number>(0);
//   const hoverTimeoutMs = 500;

//   const requestRef = useRef<number | null>(null);
//   const numSquaresX = useRef<number>(0);
//   const numSquaresY = useRef<number>(0);
//   const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
//   const hoveredSquareRef = useRef<GridOffset | null>(null);
  
//   const trailCells = useRef<{ x: number; y: number; t: number }[]>([]);
//   const cellOpacities = useRef<Map<string, number>>(new Map());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     const isHex = shape === 'hexagon';
//     const isTri = shape === 'triangle';
//     const hexHoriz = squareSize * 1.5;
//     const hexVert = squareSize * Math.sqrt(3);

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//       numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
//       numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     const drawHex = (cx: number, cy: number, size: number) => {
//       if (!ctx) return;
//       ctx.beginPath();
//       for (let i = 0; i < 6; i++) {
//         const angle = (Math.PI / 3) * i;
//         const vx = cx + size * Math.cos(angle);
//         const vy = cy + size * Math.sin(angle);
//         if (i === 0) ctx.moveTo(vx, vy);
//         else ctx.lineTo(vx, vy);
//       }
//       ctx.closePath();
//     };

//     const drawCircle = (cx: number, cy: number, size: number) => {
//       if (!ctx) return;
//       ctx.beginPath();
//       ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
//       ctx.closePath();
//     };

//     const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
//       if (!ctx) return;
//       ctx.beginPath();
//       if (flip) {
//         ctx.moveTo(cx, cy + size / 2);
//         ctx.lineTo(cx + size / 2, cy - size / 2);
//         ctx.lineTo(cx - size / 2, cy - size / 2);
//       } else {
//         ctx.moveTo(cx, cy - size / 2);
//         ctx.lineTo(cx + size / 2, cy + size / 2);
//         ctx.lineTo(cx - size / 2, cy + size / 2);
//       }
//       ctx.closePath();
//     };

//     // Centralized rendering helper to manage outline vs filled structures cleanly
//     const renderShape = (draw: () => void, alpha?: number) => {
//       if (!ctx) return;

//       if (variant === 'filled') {
//         // Base structure (Always drawn standard)
//         ctx.globalAlpha = 1;
//         draw();
//         ctx.strokeStyle = borderColor;
//         ctx.lineWidth = borderWidth;
//         ctx.stroke();

//         // Overlap handling for active hovered grid states
//         if (alpha && alpha > 0) {
//           ctx.globalAlpha = alpha;
//           draw();
//           ctx.fillStyle = hoverFillColor;
//           ctx.fill();
//         }
//         ctx.globalAlpha = 1;
//       } else {
//         // Outline HUD Variant Architecture
//         draw();
//         ctx.globalAlpha = alpha ? Math.max(alpha, 0.35) : 0.15; // fallback grid visibility base line

//         if (dashed) {
//           ctx.setLineDash([4, 4]);
//           ctx.lineDashOffset = performance.now() * -0.01;
//         } else {
//           ctx.setLineDash([]);
//         }

//         if (glow) {
//           ctx.shadowBlur = 10;
//           ctx.shadowColor = glowColor as string;
//         }

//         if (dualStroke) {
//           ctx.strokeStyle = dualStrokeColor;
//           ctx.lineWidth = borderWidth * 2;
//           ctx.stroke();
//         }

//         ctx.strokeStyle = borderColor;
//         ctx.lineWidth = borderWidth;
//         ctx.stroke();

//         // Reset modifiers to ensure clean pipeline passes
//         ctx.shadowBlur = 0;
//         ctx.setLineDash([]);
//         ctx.globalAlpha = 1;
//       }
//     };

//     const drawGrid = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       if (isHex) {
//         const colShift = Math.floor(gridOffset.current.x / hexHoriz);
//         const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
//         const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;

//         const cols = Math.ceil(canvas.width / hexHoriz) + 3;
//         const rows = Math.ceil(canvas.height / hexVert) + 3;

//         for (let col = -2; col < cols; col++) {
//           for (let row = -2; row < rows; row++) {
//             const cx = col * hexHoriz + offsetX;
//             const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;

//             const cellKey = `${col},${row}`;
//             const alpha = cellOpacities.current.get(cellKey);

//             renderShape(() => drawHex(cx, cy, squareSize), alpha);
//           }
//         }
//       } else if (isTri) {
//         const halfW = squareSize / 2;
//         const colShift = Math.floor(gridOffset.current.x / halfW);
//         const rowShift = Math.floor(gridOffset.current.y / squareSize);
//         const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

//         const cols = Math.ceil(canvas.width / halfW) + 4;
//         const rows = Math.ceil(canvas.height / squareSize) + 4;

//         for (let col = -2; col < cols; col++) {
//           for (let row = -2; row < rows; row++) {
//             const cx = col * halfW + offsetX;
//             const cy = row * squareSize + squareSize / 2 + offsetY;
//             const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;

//             const cellKey = `${col},${row}`;
//             const alpha = cellOpacities.current.get(cellKey);

//             renderShape(() => drawTriangle(cx, cy, squareSize, flip), alpha);
//           }
//         }
//       } else if (shape === 'circle') {
//         const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

//         const cols = Math.ceil(canvas.width / squareSize) + 3;
//         const rows = Math.ceil(canvas.height / squareSize) + 3;

//         for (let col = -2; col < cols; col++) {
//           for (let row = -2; row < rows; row++) {
//             const cx = col * squareSize + squareSize / 2 + offsetX;
//             const cy = row * squareSize + squareSize / 2 + offsetY;

//             const cellKey = `${col},${row}`;
//             const alpha = cellOpacities.current.get(cellKey);

//             renderShape(() => drawCircle(cx, cy, squareSize), alpha);
//           }
//         }
//       } else {
//         const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

//         const cols = Math.ceil(canvas.width / squareSize) + 3;
//         const rows = Math.ceil(canvas.height / squareSize) + 3;

//         for (let col = -2; col < cols; col++) {
//           for (let row = -2; row < rows; row++) {
//             const sx = col * squareSize + offsetX;
//             const sy = row * squareSize + offsetY;

//             const cellKey = `${col},${row}`;
//             const alpha = cellOpacities.current.get(cellKey);

//             renderShape(() => {
//               ctx.beginPath();
//               ctx.rect(sx, sy, squareSize, squareSize);
//               ctx.closePath();
//             }, alpha);
//           }
//         }
//       }
//     };

//     const updateAnimation = () => {
//       const effectiveSpeed = Math.max(speed, 0.1);
//       const wrapX = isHex ? hexHoriz * 2 : squareSize;
//       const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

//       switch (direction) {
//         case 'right':
//           gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
//           break;
//         case 'left':
//           gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
//           break;
//         case 'up':
//           gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
//           break;
//         case 'down':
//           gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
//           break;
//         case 'diagonal':
//           gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
//           gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
//           break;
//         default:
//           break;
//       }

//       updateCellOpacities();
//       drawGrid();
//       requestRef.current = requestAnimationFrame(updateAnimation);
//     };

//     const updateCellOpacities = () => {
//       const targets = new Map<string, number>();
//       const TRAIL_LIFETIME = 700;
//       const idleTime = Date.now() - lastMouseMoveRef.current;
//       const isIdle = idleTime > hoverTimeoutMs;
//       const now = Date.now();

//       trailCells.current = trailCells.current.filter((t) => now - t.t < TRAIL_LIFETIME);

//       if (!isIdle && hoveredSquareRef.current) {
//         targets.set(`${hoveredSquareRef.current.x},${hoveredSquareRef.current.y}`, 1);
//       }

//       if (hoverTrailAmount > 0) {
//         for (let i = 0; i < trailCells.current.length; i++) {
//           const t = trailCells.current[i];
//           const key = `${t.x},${t.y}`;
//           const tNorm = i / trailCells.current.length;
//           const base = Math.pow(1 - tNorm, 2.2);
//           const decay = isIdle ? 0.25 : 1;
//           targets.set(key, base * decay);
//         }
//       }

//       if (isIdle) {
//         for (const key of cellOpacities.current.keys()) {
//           if (!targets.has(key)) {
//             targets.set(key, 0);
//           }
//         }
//       }

//       for (const [key] of targets) {
//         if (!cellOpacities.current.has(key)) {
//           cellOpacities.current.set(key, 0);
//         }
//       }

//       for (const [key, opacity] of cellOpacities.current) {
//         const target = targets.get(key) ?? 0;
//         const easing = isIdle ? 0.06 : 0.1;
//         const next = opacity + (target - opacity) * easing;
        
//         if (next < 0.01) {
//           cellOpacities.current.set(key, 0);
//         } else {
//           cellOpacities.current.set(key, next);
//         }
//       }

//       if (isIdle) {
//         let stillAlive = false;
//         for (const v of cellOpacities.current.values()) {
//           if (v > 0.01) {
//             stillAlive = true;
//             break;
//           }
//         }
//         if (!stillAlive) {
//           cellOpacities.current.clear();
//           trailCells.current = [];
//           hoveredSquareRef.current = null;
//         }
//       }
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       lastMouseMoveRef.current = Date.now();
//       const rect = canvas.getBoundingClientRect();

//       if (
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom
//       ) {
//         hoveredSquareRef.current = null;
//         return;
//       }
//       const mouseX = event.clientX - rect.left;
//       const mouseY = event.clientY - rect.top;

//       if (isHex) {
//         const colShift = Math.floor(gridOffset.current.x / hexHoriz);
//         const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
//         const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
//         const adjustedX = mouseX - offsetX;
//         const adjustedY = mouseY - offsetY;

//         const col = Math.round(adjustedX / hexHoriz);
//         const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
//         const row = Math.round((adjustedY - rowOffset) / hexVert);

//         if (
//           !hoveredSquareRef.current ||
//           hoveredSquareRef.current.x !== col ||
//           hoveredSquareRef.current.y !== row
//         ) {
//           if (hoveredSquareRef.current && hoverTrailAmount > 0) {
//             trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
//             if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
//           }
//           hoveredSquareRef.current = { x: col, y: row };
//         }
//       } else if (isTri) {
//         const halfW = squareSize / 2;
//         const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
//         const adjustedX = mouseX - offsetX;
//         const adjustedY = mouseY - offsetY;

//         const col = Math.round(adjustedX / halfW);
//         const row = Math.floor(adjustedY / squareSize);

//         if (
//           !hoveredSquareRef.current ||
//           hoveredSquareRef.current.x !== col ||
//           hoveredSquareRef.current.y !== row
//         ) {
//           if (hoveredSquareRef.current && hoverTrailAmount > 0) {
//             trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
//             if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
//           }
//           hoveredSquareRef.current = { x: col, y: row };
//         }
//       } else if (shape === 'circle') {
//         const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
//         const adjustedX = mouseX - offsetX;
//         const adjustedY = mouseY - offsetY;

//         const col = Math.round(adjustedX / squareSize);
//         const row = Math.round(adjustedY / squareSize);

//         if (
//           !hoveredSquareRef.current ||
//           hoveredSquareRef.current.x !== col ||
//           hoveredSquareRef.current.y !== row
//         ) {
//           if (hoveredSquareRef.current && hoverTrailAmount > 0) {
//             trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
//             if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
//           }
//           hoveredSquareRef.current = { x: col, y: row };
//         }
//       } else {
//         const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
//         const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
//         const adjustedX = mouseX - offsetX;
//         const adjustedY = mouseY - offsetY;

//         const col = Math.floor(adjustedX / squareSize);
//         const row = Math.floor(adjustedY / squareSize);

//         if (
//           !hoveredSquareRef.current ||
//           hoveredSquareRef.current.x !== col ||
//           hoveredSquareRef.current.y !== row
//         ) {
//           if (hoveredSquareRef.current && hoverTrailAmount > 0) {
//             trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
//             if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
//           }
//           hoveredSquareRef.current = { x: col, y: row };
//         }
//       }
//     };

//     const handleMouseLeave = () => {
//       if (hoveredSquareRef.current && hoverTrailAmount > 0) {
//         trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
//         if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
//       }
//       hoveredSquareRef.current = null;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);
//     requestRef.current = requestAnimationFrame(updateAnimation);

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       if (requestRef.current) cancelAnimationFrame(requestRef.current);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount, variant, borderWidth, glow, glowColor, dashed, dualStroke, dualStrokeColor]);

//   return <canvas ref={canvasRef} className="w-full h-full border-none block"></canvas>;
// };

// export default ShapeGridOutline;


"use client";
import React, { useRef, useEffect } from 'react';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface ShapeGridProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
  shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
  hoverTrailAmount?: number;
  variant?: 'filled' | 'outline';
  borderWidth?: number;
  glow?: boolean;
  glowColor?: string;
  dashed?: boolean;
  dualStroke?: boolean;
  dualStrokeColor?: CanvasStrokeStyle;
}

const ShapeGridOutline: React.FC<ShapeGridProps> = ({
  direction = 'right',
  speed = 1,
  borderColor = 'rgba(99, 102, 241, 0.15)',
  squareSize = 40,
  hoverFillColor = 'rgba(99, 102, 241, 0.25)',
  shape = 'square',
  hoverTrailAmount = 0,
  variant = 'filled',
  borderWidth = 1.25,
  glow = false,
  glowColor = 'rgba(99, 102, 241, 0.25)',
  dashed = false,
  dualStroke = false,
  dualStrokeColor = 'rgba(255, 255, 255, 0.03)'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastMouseMoveRef = useRef<number>(0);
  const hoverTimeoutMs = 500;

  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);
  
  const trailCells = useRef<{ x: number; y: number; t: number }[]>([]);
  const cellOpacities = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const isHex = shape === 'hexagon';
    const isTri = shape === 'triangle';
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawHex = (cx: number, cy: number, size: number) => {
      if (!ctx) return;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const drawCircle = (cx: number, cy: number, size: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.closePath();
    };

    const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
      if (!ctx) return;
      ctx.beginPath();
      if (flip) {
        ctx.moveTo(cx, cy + size / 2);
        ctx.lineTo(cx + size / 2, cy - size / 2);
        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx.closePath();
    };

    const renderShape = (draw: () => void, alpha?: number) => {
      if (!ctx) return;

      if (variant === 'filled') {
        // Base static grid outline
        ctx.globalAlpha = 1;
        draw();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.stroke();

        // Render hover/trail fill effect layer above baseline
        if (alpha && alpha > 0) {
          ctx.globalAlpha = alpha;
          draw();
          ctx.fillStyle = hoverFillColor;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      } else {
        // Outline Mode: If there's no hover/trail alpha value, bypass rendering completely (0 opacity)
        if (!alpha || alpha <= 0) return;

        ctx.globalAlpha = alpha;
        draw();

        if (dashed) {
          ctx.setLineDash([4, 4]);
          ctx.lineDashOffset = performance.now() * -0.01;
        } else {
          ctx.setLineDash([]);
        }

        if (glow) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = glowColor as string;
        }

        if (dualStroke) {
          ctx.strokeStyle = dualStrokeColor;
          ctx.lineWidth = borderWidth * 2;
          ctx.stroke();
        }

        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.stroke();

        // Cleanup graphics context configurations
        ctx.shadowBlur = 0;
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;

        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows = Math.ceil(canvas.height / hexVert) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * hexHoriz + offsetX;
            const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            renderShape(() => drawHex(cx, cy, squareSize), alpha);
          }
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / halfW) + 4;
        const rows = Math.ceil(canvas.height / squareSize) + 4;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * halfW + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            renderShape(() => drawTriangle(cx, cy, squareSize, flip), alpha);
          }
        }
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const cx = col * squareSize + squareSize / 2 + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            renderShape(() => drawCircle(cx, cy, squareSize), alpha);
          }
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows = Math.ceil(canvas.height / squareSize) + 3;

        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows; row++) {
            const sx = col * squareSize + offsetX;
            const sy = row * squareSize + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);

            renderShape(() => {
              ctx.beginPath();
              ctx.rect(sx, sy, squareSize, squareSize);
              ctx.closePath();
            }, alpha);
          }
        }
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      const wrapX = isHex ? hexHoriz * 2 : squareSize;
      const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;

      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        default:
          break;
      }

      updateCellOpacities();
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const updateCellOpacities = () => {
      const targets = new Map<string, number>();
      const TRAIL_LIFETIME = 700;
      const idleTime = Date.now() - lastMouseMoveRef.current;
      const isIdle = idleTime > hoverTimeoutMs;
      const now = Date.now();

      trailCells.current = trailCells.current.filter((t) => now - t.t < TRAIL_LIFETIME);

      if (!isIdle && hoveredSquareRef.current) {
        targets.set(`${hoveredSquareRef.current.x},${hoveredSquareRef.current.y}`, 1);
      }

      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = `${t.x},${t.y}`;
          const tNorm = i / trailCells.current.length;
          const base = Math.pow(1 - tNorm, 2.2);
          const decay = isIdle ? 0.25 : 1;
          targets.set(key, base * decay);
        }
      }

      if (isIdle) {
        for (const key of cellOpacities.current.keys()) {
          if (!targets.has(key)) {
            targets.set(key, 0);
          }
        }
      }

      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) {
          cellOpacities.current.set(key, 0);
        }
      }

      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) ?? 0;
        const easing = isIdle ? 0.06 : 0.1;
        const next = opacity + (target - opacity) * easing;
        
        if (next < 0.01) {
          cellOpacities.current.set(key, 0);
        } else {
          cellOpacities.current.set(key, next);
        }
      }

      if (isIdle) {
        let stillAlive = false;
        for (const v of cellOpacities.current.values()) {
          if (v > 0.01) {
            stillAlive = true;
            break;
          }
        }
        if (!stillAlive) {
          cellOpacities.current.clear();
          trailCells.current = [];
          hoveredSquareRef.current = null;
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      lastMouseMoveRef.current = Date.now();
      const rect = canvas.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        hoveredSquareRef.current = null;
        return;
      }
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);

        if (
          !hoveredSquareRef.current ||
          hoveredSquareRef.current.x !== col ||
          hoveredSquareRef.current.y !== row
        ) {
          if (hoveredSquareRef.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquareRef.current = { x: col, y: row };
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / halfW);
        const row = Math.floor(adjustedY / squareSize);

        if (
          !hoveredSquareRef.current ||
          hoveredSquareRef.current.x !== col ||
          hoveredSquareRef.current.y !== row
        ) {
          if (hoveredSquareRef.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquareRef.current = { x: col, y: row };
        }
      } else if (shape === 'circle') {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / squareSize);
        const row = Math.round(adjustedY / squareSize);

        if (
          !hoveredSquareRef.current ||
          hoveredSquareRef.current.x !== col ||
          hoveredSquareRef.current.y !== row
        ) {
          if (hoveredSquareRef.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquareRef.current = { x: col, y: row };
        }
      } else {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.floor(adjustedX / squareSize);
        const row = Math.floor(adjustedY / squareSize);

        if (
          !hoveredSquareRef.current ||
          hoveredSquareRef.current.x !== col ||
          hoveredSquareRef.current.y !== row
        ) {
          if (hoveredSquareRef.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquareRef.current = { x: col, y: row };
        }
      }
    };

    const handleMouseLeave = () => {
      if (hoveredSquareRef.current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...hoveredSquareRef.current, t: Date.now() });
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
      }
      hoveredSquareRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount, variant, borderWidth, glow, glowColor, dashed, dualStroke, dualStrokeColor]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block"></canvas>;
};

export default ShapeGridOutline;