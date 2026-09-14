import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./expand.css";

/**
 * Expand a cell. A slot that shows a summary grows to cover its whole band
 * and shows the rest; the same box, the same band, more content. This is
 * the study's answer to content a slot cannot hold — the reference reaches
 * for a modal; here the spiral's slot becomes the stage.
 *
 * Mechanics: the GoldenBox that owns the summary gets `cell--expanded`, and
 * expand.css uses `:has()` to lift its positioned parent (the library's
 * `.golden-grid__box`) to inset 0 above its siblings. The library is not
 * touched; its inline geometry is overridden with !important for the
 * duration. Focus moves to the close control on open and back to the
 * trigger on close; Escape closes; the trigger carries aria-expanded.
 */
export function useExpand() {
  const [expanded, setExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  const open = useCallback(() => setExpanded(true), []);
  const close = useCallback(() => {
    setExpanded(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!expanded) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, close]);

  return {
    expanded,
    open,
    close,
    panelId: id,
    /** Spread on the GoldenBox that owns the summary. */
    boxProps: { className: expanded ? "cell--expanded" : undefined },
    /** Spread on the call-to-action button. */
    triggerProps: { ref: triggerRef, type: "button" as const, "aria-expanded": expanded, "aria-controls": id, onClick: open },
    closeRef,
  };
}

/** The expanded view: a header with a close control and a scrolling body. */
export function ExpandedCell({
  id, title, onClose, closeRef, children,
}: {
  id: string;
  title: string;
  onClose: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
  children: ReactNode;
}) {
  return (
    <section className="cell" id={id} aria-label={title}>
      <header className="cell__head">
        <h3 className="cell__title">{title}</h3>
        <button ref={closeRef} type="button" className="cell__close" onClick={onClose} aria-label="Close">×</button>
      </header>
      <div className="cell__body">{children}</div>
    </section>
  );
}
