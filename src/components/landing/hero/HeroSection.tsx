"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedWordmark, { WordmarkMode } from "./AnimatedWordmark";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SectionTag from "@/components/common/SectionTag";
import CtaButton from "@/components/common/CtaButton";
import { ArrowRightIcon, PauseIcon, PlayIcon } from "lucide-react";

// ── Sequence timing (ms from phase start) ─────────────────────────
const T = {
  INIT_DELAY: 400,
  LETTER_STAGGER: 150,
  COLLAPSE_AFTER: 1800,
  EXIT_AFTER: 2800,
  TAG_TYPE_AFTER: 3500,
  TAG_PARK_AFTER: 5200,
  DESC_STAGGER_AFTER: 5900,
  DESC_PARK_AFTER: 8500,
  FINAL_WM_AFTER: 9300,
  REST_AFTER: 10100,
};

const TAGLINE = "A quiet workspace for loud ideas";
const DESC_TEXT =
  "Lofistack is a stack of tools, sounds and small rituals for people who make things at low volume";

type Phase =
  | "idle"
  | "wm-reveal"
  | "wm-collapse"
  | "wm-exit"
  | "tag-type"
  | "tag-park"
  | "desc-stagger"
  | "desc-park"
  | "final-wm"
  | "rest";

function useTypewriter(text: string, speed: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => {
      clearInterval(id);
      setDisplayed("");
    };
  }, [active, text, speed]);
  return displayed;
}

export default function HeroSection() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [revealedCount, setRevealedCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const after = (ms: number, fn: () => void) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const playAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/lofi_sound.mp3");
      audioRef.current.addEventListener("ended", () => setAudioPlaying(false));
    }
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then(() => setAudioPlaying(true))
      .catch(() => {});
  }, []);

  const stopAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.src = "";
    audioRef.current = null;
    setAudioPlaying(false);
  }, []);

  const runSequence = useCallback(() => {
    clearTimers();
    setPhase("idle");
    setRevealedCount(0);
    playAudio();

    after(T.INIT_DELAY, () => {
      setPhase("wm-reveal");
      for (let i = 0; i < 9; i++) {
        after(i * T.LETTER_STAGGER, () =>
          setRevealedCount((n) => Math.max(n, i + 1)),
        );
      }
      after(T.COLLAPSE_AFTER, () => setPhase("wm-collapse"));
      after(T.EXIT_AFTER, () => setPhase("wm-exit"));
      after(T.TAG_TYPE_AFTER, () => setPhase("tag-type"));
      after(T.TAG_PARK_AFTER, () => setPhase("tag-park"));
      after(T.DESC_STAGGER_AFTER, () => setPhase("desc-stagger"));
      after(T.DESC_PARK_AFTER, () => setPhase("desc-park"));
      after(T.FINAL_WM_AFTER, () => {
        setRevealedCount(9);
        setPhase("final-wm");
      });
      after(T.REST_AFTER, () => setPhase("rest"));
    });
  }, [playAudio]);

  useEffect(() => {
    const id = setTimeout(() => runSequence(), 0);
    return () => {
      clearTimeout(id);
      clearTimers();
    };
  }, [runSequence]);

  // ── Derived visibility ───────────────────────────────────────────
  const showWordmark = [
    "wm-reveal",
    "wm-collapse",
    "final-wm",
    "rest",
  ].includes(phase);
  const showTagBig = phase === "tag-type";
  const showTagSmall = [
    "tag-park",
    "desc-stagger",
    "desc-park",
    "final-wm",
    "rest",
  ].includes(phase);
  const showDescBig = phase === "desc-stagger";
  const showDescSmall = ["desc-park", "final-wm", "rest"].includes(phase);
  const showCta = ["desc-park", "final-wm", "rest"].includes(phase);

  const wm_mode: WordmarkMode =
    phase === "wm-reveal"
      ? "spread"
      : phase === "wm-collapse"
        ? "collapsed"
        : phase === "final-wm" || phase === "rest"
          ? "final"
          : "collapsed";

  const typewriterActive = phase === "tag-type";
  const typewriterText = useTypewriter(TAGLINE, 45, typewriterActive);
  const descWords = DESC_TEXT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="flex flex-col relative min-h-[calc(100vh-65px)] overflow-clip px-[calc(100%/12)]"
    >
      {/* 12-column grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--lofi-line) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      {/* ── Section tag — full-width, sticky ── */}
      <SectionTag label="[ 01 - Hero ]" variant="dark" phase={phase} />

      {/* ── Main (columns 1–11) ── */}
      <Card className="flex flex-col flex-1 rounded-none ring-0 gap-0 py-0 bg-transparent text-[var(--lofi-ink)]">
        {/* ── Body ── */}
        <CardContent className="flex-1 relative z-[2] px-0">
          {/* Floating wordmark — spans grid lines 1 to 11 */}
          <div
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-[650ms] ease-in-out"
            style={{
              left: wm_mode === "spread" ? "48px" : "0px",
              right: wm_mode === "spread" ? "48px" : "0px",
              opacity: showWordmark ? 1 : 0,
              pointerEvents: showWordmark ? "auto" : "none",
              transitionDelay: showWordmark ? "220ms" : "0ms",
            }}
          >
            <AnimatedWordmark mode={wm_mode} revealedCount={revealedCount} />
          </div>

          {/* Big tagline (typewriter) */}
          <div
            className="absolute left-12 right-12 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-[650ms] ease-in-out font-[family-name:var(--font-space-grotesk)] font-medium text-[clamp(36px,5.6vw,84px)] tracking-[-0.025em] leading-[1.1] text-center px-4"
            style={{
              opacity: showTagBig ? 1 : 0,
              pointerEvents: showTagBig ? "auto" : "none",
              transitionDelay: showTagBig ? "220ms" : "0ms",
            }}
          >
            <span className="tw">
              {typewriterText}
              {typewriterActive && <span className="tw-caret" />}
            </span>
          </div>

          {/* Big description (stagger words) */}
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-wrap items-center justify-center transition-opacity duration-[650ms] ease-in-out font-[family-name:var(--font-space-grotesk)] font-medium text-[clamp(22px,3.2vw,48px)] tracking-[-0.015em] leading-[1.2] text-center px-12 max-w-[22ch] mx-auto"
            style={{
              opacity: showDescBig ? 1 : 0,
              pointerEvents: showDescBig ? "auto" : "none",
              transitionDelay: showDescBig ? "220ms" : "0ms",
            }}
          >
            {descWords.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className={`sw-word${showDescBig ? " in" : ""}`}
                style={{
                  transitionDelay: showDescBig ? `${i * 130}ms` : "0ms",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </div>
        </CardContent>

        {/* ── Footer ── */}
        <CardFooter className="justify-between items-end relative z-[3] pb-8 mb-8 px-0 border-0 rounded-none bg-transparent">
          {/* Parked tagline (left) */}
          <div
            className="font-[family-name:var(--font-instrument-serif)] italic font-normal leading-[1.18] text-[var(--lofi-ink-soft)] tracking-[-0.005em] text-left transition-opacity duration-[700ms] ease-in-out"
            style={{
              opacity: showTagSmall ? 1 : 0,
              pointerEvents: showTagSmall ? "auto" : "none",
              transitionDelay: showTagSmall ? "320ms" : "0ms",
            }}
          >
            <span className="block not-italic font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.1em] text-[var(--lofi-muted)] mb-[10px] opacity-70">
              —
            </span>
            <span className="block italic text-[var(--lofi-muted)] text-[clamp(14px,1.5vw,18px)] tracking-[0.005em] whitespace-nowrap">
              A quiet workspace for
            </span>
            <span className="block italic text-[var(--lofi-accent)] text-[clamp(28px,3vw,44px)] leading-[1.02] tracking-[-0.015em] mt-1">
              loud ideas.
            </span>
          </div>

          {/* Parked desc + CTA (right) */}
          <div className="flex flex-col items-end gap-4">
            <div
              className="max-w-[38ch] font-[family-name:var(--font-jetbrains-mono)] text-[clamp(10px,1vw,12px)] leading-[1.65] text-[var(--lofi-muted)] tracking-[0.01em] text-right transition-opacity duration-[700ms] ease-in-out"
              style={{
                opacity: showDescSmall ? 1 : 0,
                pointerEvents: showDescSmall ? "auto" : "none",
                transitionDelay: showDescSmall ? "320ms" : "0ms",
              }}
            >
              {DESC_TEXT}
            </div>
            <div
              className="flex transition-opacity duration-[700ms] ease-in-out"
              style={{
                opacity: showCta || audioPlaying ? 1 : 0,
                pointerEvents: showCta || audioPlaying ? "auto" : "none",
                transitionDelay: showCta ? "360ms" : "0ms",
              }}
            >
              <div className="flex flex-col items-end gap-[6px]">
                <span
                  className={`now-playing${audioPlaying ? " visible" : ""}`}
                >
                  <span className="now-playing-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                  now playing
                </span>
                <div className="flex gap-2 items-center">
                  <CtaButton
                    variant="ghost"
                    onClick={() => (audioPlaying ? stopAudio() : runSequence())}
                  >
                    {audioPlaying ? (
                      <>
                        <PauseIcon className="size-3" /> Stop
                      </>
                    ) : (
                      <>
                        <PlayIcon className="size-3" /> Play Intro
                      </>
                    )}
                  </CtaButton>
                  <CtaButton variant="primary" href="#" className="group">
                    Book a Consultation{" "}
                    <ArrowRightIcon className="transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
