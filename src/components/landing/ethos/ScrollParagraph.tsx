interface ScrollParagraphProps {
  text: string;
  lead?: boolean;
}

export default function ScrollParagraph({ text, lead }: ScrollParagraphProps) {
  const words = text.split(" ");

  return (
    <p
      data-lbl
      className={[
        "font-[family-name:var(--font-space-grotesk)] font-normal",
        lead
          ? "text-[clamp(34px,3.8vw,60px)] leading-[1.18] tracking-[-0.025em] text-[var(--lofi-ink)] mb-24 max-w-[20ch]"
          : "text-[clamp(26px,2.8vw,44px)] leading-[1.28] tracking-[-0.02em] text-[var(--lofi-ink-soft)] mb-16 max-w-[24ch]",
      ].join(" ")}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="lofi-word"
          style={{ transitionDelay: `${i * 18}ms` }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
