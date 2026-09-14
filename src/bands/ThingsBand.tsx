import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { listing } from "../content";
import { Band } from "./Band";

const items = [listing.things.rules, listing.things.cancellation, listing.things.safety];

/**
 * Band 10 — Before you book. The reference: three equal columns at 1440 and
 * 820 — house rules, cancellation, safety — each a heading, a few lines, and
 * a link; three equal full-width rows at 390. Flat, peer content, the kind
 * Fibonacci handles worst.
 *
 * At 820 and 1440 it is kept as a band so the failure is visible: house
 * rules (the longest) in the hero on the LEFT (top ccw), the other two in
 * the 1-squares, width capped at 48rem so the flattest content is not also
 * the tallest band. At 390 the honest alternative is used instead: a plain
 * three-row list outside any grid, which is what the reference does. Bands
 * are a choice per block, not a mandate.
 */
export function ThingsBand() {
  const mobile = useViewport() === "mobile";
  const Item = ({ it }: { it: (typeof items)[number] }) => (
    <>
      <h4>{it.title}</h4>
      <ul>{it.lines.map((l) => <li key={l}>{l}</li>)}</ul>
      <p><a href="#things">{listing.cta.learnMore}</a></p>
    </>
  );
  return (
    <Band id="things" title={listing.labels.things} note={mobile ? "no grid at 390 · three plain rows, as the reference" : 'from=1 to=3 · placement="top" · clockwise=false · hero left · flat content, forced'} cap="48rem" cards>
      {mobile ? (
        <div className="rules rules--rows">
          {items.map((it) => <div key={it.title} className="rules__row"><Item it={it} /></div>)}
        </div>
      ) : (
        <GoldenGrid from={1} to={3} placement="top" clockwise={false}>
          {items.map((it) => (
            <GoldenBox key={it.title}><div className="copy rules"><Item it={it} /></div></GoldenBox>
          ))}
        </GoldenGrid>
      )}
    </Band>
  );
}
