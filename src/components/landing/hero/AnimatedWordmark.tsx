"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * SVG coordinate system (per letter):
 *   em-square  = 1000 SVG units  →  maps to CSS height="1em"
 *   font-size  = 800 SVG units   (= 0.8 × CSS font-size)
 *   baseline   = y=0
 *   ascender   = y=-800 (top of viewBox)
 *   descender  = y=+200 (bottom of viewBox)
 *
 * strokeWidth=28 → ~28/1000 × CSS font-size (≈ 2.8% of font-size at any size).
 */
const CHAR: Record<string, { w: number; dash: number }> = {
  L: { w: 620,  dash: 2400 },
  O: { w: 820,  dash: 5000 },
  F: { w: 640,  dash: 2800 },
  I: { w: 320,  dash: 2000 },
  S: { w: 700,  dash: 5200 },
  T: { w: 690,  dash: 2600 },
  A: { w: 790,  dash: 5400 },
  C: { w: 770,  dash: 4400 },
  K: { w: 760,  dash: 5000 },
};

const LETTERS = ["L", "O", "F", "I", "S", "T", "A", "C", "K"];
const TOTAL_REL_W = LETTERS.reduce((sum, l) => sum + CHAR[l].w / 1000, 0);

export type WordmarkMode = "idle" | "spread" | "collapsed" | "final";

interface Props {
  mode: WordmarkMode;
  revealedCount: number;
  onFirstLetterLeft?: (left: number) => void;
}

export default function AnimatedWordmark({ mode, revealedCount, onFirstLetterLeft }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spreadGap, setSpreadGap] = useState(0);
  const [fontSize, setFontSize] = useState("clamp(72px, 14vw, 260px)");

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const containerW = el.offsetWidth;
      const naturalFs = parseFloat(getComputedStyle(el).fontSize);
      // Cap so letters never overflow the container
      const fs = Math.min(naturalFs, containerW / TOTAL_REL_W);
      const totalLetterW = TOTAL_REL_W * fs;

      setFontSize(`${fs}px`);
      // spreadGap is only used in spread mode; in collapsed/final space-between handles it
      setSpreadGap(Math.max(0, (containerW - totalLetterW) / (LETTERS.length - 1)));

      if (onFirstLetterLeft) {
        const sectionEl = el.closest("section");
        const sectionLeft = sectionEl ? sectionEl.getBoundingClientRect().left : 0;
        const elLeft = el.getBoundingClientRect().left - sectionLeft;
        // In spread mode letters are centered; in collapsed/final L is at the container left
        const offset = mode === "spread" ? (containerW - totalLetterW) / 2 : 0;
        onFirstLetterLeft(elLeft + offset);
      }
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [mode, onFirstLetterLeft]);

  const isCollapsed = mode === "collapsed" || mode === "final";
  const isFinal     = mode === "final";

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", overflow: "visible", fontSize: "clamp(72px, 14vw, 260px)" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          width: "100%",
          fontSize,
          lineHeight: 0.82,
          userSelect: "none",
          whiteSpace: "nowrap",
          // spread: explicit gap centered; collapsed/final: space-between fills L→K exactly
          justifyContent: isCollapsed ? "space-between" : "center",
          gap: isCollapsed ? 0 : `${spreadGap}px`,
          transition: isCollapsed
            ? "gap 1100ms cubic-bezier(.7,0,.2,1), font-size 1100ms cubic-bezier(.7,0,.2,1)"
            : "none",
        }}
      >
        {LETTERS.map((letter, i) => {
          const { w, dash } = CHAR[letter];
          const isIn = isFinal || i < revealedCount;
          const delay = isFinal ? 0 : i * 150;

          return (
            <span
              key={letter}
              style={{ display: "inline-block", position: "relative", lineHeight: 1 }}
            >
              <svg
                viewBox={`0 -800 ${w} 1000`}
                width={`${(w / 1000).toFixed(3)}em`}
                height="1em"
                overflow="visible"
                aria-hidden
                focusable="false"
                style={{ display: "inline-block", verticalAlign: "baseline" }}
              >
                <text
                  x={0}
                  y={0}
                  fontSize={800}
                  fontWeight={700}
                  fontFamily="Space Grotesk, 'Helvetica Neue', Arial, sans-serif"
                  fill="none"
                  strokeWidth={28}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  strokeDasharray={dash}
                  style={{
                    stroke: "var(--lofi-ink)",
                    strokeDashoffset: isIn ? 0 : dash,
                    transition: isIn
                      ? `stroke-dashoffset 1200ms cubic-bezier(.45,.05,.2,1) ${delay}ms`
                      : "none",
                  }}
                >
                  {letter}
                </text>
              </svg>

              {/* Accent tick — visible only in spread mode */}
              {i < LETTERS.length - 1 && (
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: "100%",
                    bottom: "0.10em",
                    width: "2px",
                    height: "0.16em",
                    background: "var(--lofi-accent)",
                    opacity: mode === "spread" && isIn ? 0.9 : 0,
                    transition: "opacity 240ms ease 200ms",
                    transform: `translateX(${spreadGap / 2 - 1}px)`,
                    pointerEvents: "none",
                  }}
                />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
