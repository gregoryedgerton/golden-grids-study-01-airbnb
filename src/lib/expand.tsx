import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./expand.css";

/**
 * Expand a cell. A slot that shows a summary becomes the whole band and
 * shows the rest; the same box, the same band, more content. This is the
 * study's answer to content a slot cannot hold — the reference reaches for
 * a modal; here the spiral's slot becomes the page.
 *
 * Mechanics: the GoldenBox that owns the summary gets `cell--expanded`, and
 * expand.css uses `:has()` to release the grid's fixed proportion, take the
 * sibling slots out of the flow, and return the expanded slot to normal
 * flow, where its content sets the height. The band grows and everything
 * below it moves down — nothing scrolls inside a box. The library is not
 * touched; its inline geometry is overridden only for the duration.
 *
 * What the overlay implies, and therefore does:
 *   - Everything the panel covers goes `inert` while it is open, so nothing
 *     underneath can be tabbed to or read. That includes the trigger, which
 *     the panel sits directly on top of.
 *   - Escape closes only the panel that contains focus, and focus returns to
 *     that panel's trigger. A field elsewhere on the page keeps its Escape.
 *   - One cell at a time: opening one closes any other.
 *   - The band grows to fit the panel and everything below moves down; the
 *     panel has no scroll container of its own.
 */

/** Every open cell's close function, so opening one can close the others. */
const openCells = new Set<() => void>();

export function useExpand() {
  const [expanded, setExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  const close = useCallback(() => {
    setExpanded(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const open = useCallback(() => {
    for (const other of openCells) other();
    setExpanded(true);
  }, []);

  // Escape, scoped to the panel that has focus. Capture phase so this runs
  // before the tools panel's own window listener and can stop it.
  useEffect(() => {
    if (!expanded) return;
    openCells.add(close);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      const panel = document.getElementById(id);
      if (!panel || !panel.contains(document.activeElement)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      close();
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      openCells.delete(close);
      window.removeEventListener("keydown", onKey, true);
    };
  }, [expanded, close, id]);

  return {
    expanded,
    open,
    close,
    panelId: id,
    /** Spread on the GoldenBox that owns the summary. */
    boxProps: { className: expanded ? "cell--expanded" : undefined },
    /** Spread on the call-to-action button. */
    triggerProps: {
      ref: triggerRef,
      type: "button" as const,
      "aria-expanded": expanded,
      "aria-controls": expanded ? id : undefined,
      onClick: () => (expanded ? close() : open()),
    },
    closeRef,
  };
}

/**
 * The expanded view: a header with a close control and a scrolling body.
 * Focus lands on Close on every mount, so a breakpoint change that remounts
 * the panel in a different slot does not drop focus to the body. Everything
 * the panel covers — its own summary, the trigger, the sibling slots — is
 * made inert for as long as it is open.
 */
export function ExpandedCell({
  id, title, onClose, closeRef, children,
}: {
  id: string;
  title: string;
  onClose: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, [closeRef]);

  // Inert everything this panel covers: the summary beside it in the same
  // slot, and every sibling slot in the same grid.
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    const grid = panel.closest(".golden-grid");
    if (!grid) return;
    const covered: HTMLElement[] = [];
    // Walk down from each slot until the panel's own branch is left; the
    // GoldenBox wrapper of the expanded slot holds both the summary and the
    // panel, so it is descended into rather than inerted whole.
    const mark = (node: Element) => {
      for (const child of Array.from(node.children)) {
        if (child === panel) continue;
        if (child.contains(panel)) { mark(child); continue; }
        const el = child as HTMLElement;
        if (el.inert) continue;
        el.inert = true;
        covered.push(el);
      }
    };
    mark(grid);
    return () => { for (const el of covered) el.inert = false; };
  }, []);

  return (
    <section className="cell" id={id} ref={ref} aria-label={title}>
      <header className="cell__head">
        <h3 className="cell__title">{title}</h3>
        <button ref={closeRef} type="button" className="cell__close" onClick={onClose} aria-label="Close">×</button>
      </header>
      <div className="cell__body">{children}</div>
    </section>
  );
}
