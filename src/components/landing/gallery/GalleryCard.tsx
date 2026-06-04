"use client";

import { useState } from "react";

export interface GalleryCardProps {
  id: string;
  caption: string;
  tag: string;
  photo: string;
}

// Deterministic tilt per card — no hydration mismatch
const TILTS = ["-3.2deg", "2.4deg", "-1.6deg", "3.8deg", "-2.8deg", "1.2deg", "-3.6deg", "2.0deg", "-1.2deg"];
// Vertical offsets so cards sit at different heights in the strip
const OFFSETS = ["0px", "24px", "-16px", "32px", "-8px", "20px", "-24px", "12px", "-4px"];

export default function GalleryCard({ id, caption, tag, photo }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false);
  const idx = (parseInt(id, 10) - 1) % TILTS.length;
  const tilt = TILTS[idx];
  const offset = OFFSETS[idx];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="shrink-0 cursor-default"
      style={{
        marginTop: offset,
        transform: hovered
          ? "rotate(0deg) scale(1.07) translateY(-10px)"
          : `rotate(${tilt}) scale(1)`,
        transition: hovered
          ? "transform 280ms cubic-bezier(.2,.7,.2,1), box-shadow 280ms"
          : "transform 520ms cubic-bezier(.2,.7,.2,1), box-shadow 520ms",
        boxShadow: hovered
          ? "0 28px 64px rgba(0,0,0,0.65), 0 4px 16px rgba(0,0,0,0.4)"
          : "0 6px 24px rgba(0,0,0,0.45)",
        willChange: "transform",
        zIndex: hovered ? 10 : "auto",
      }}
    >
      {/* Polaroid frame */}
      <div
        className="bg-[#ece5d8] flex flex-col"
        style={{ width: "210px", padding: "10px 10px 0 10px" }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ height: "210px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={caption}
            className="w-full h-full object-cover object-center"
            style={{
              filter: "sepia(20%) contrast(1.06) brightness(0.96) saturate(0.9)",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 600ms cubic-bezier(.2,.7,.2,1)",
            }}
          />
          {/* grain over photo */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #1a1714 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
          {/* subtle vignette */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(26,23,20,0.22) 100%)" }}
          />
        </div>

        {/* Caption area — the "written on" polaroid space */}
        <div className="px-1 pt-3 pb-4">
          <p className="
            m-0 mb-1
            [font-family:var(--font-instrument-serif)] italic
            text-[13px] leading-snug text-[#1a1714]
          ">
            {caption}
          </p>
          <p className="
            m-0
            [font-family:var(--font-jetbrains-mono)]
            text-[8px] tracking-[0.14em] uppercase text-[#6f665b]
          ">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}
