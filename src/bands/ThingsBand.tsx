import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { Band } from "./Band";

const items = [
  { title: "[House rules]", lines: ["[Check-in after 4:00 PM]", "[Checkout before 11:00 AM]", "[4 guests maximum]", "[Rule four, 5 words]"] },
  { title: "[Cancellation policy]", lines: ["[Policy line, 8 words]"] },
  { title: "[Safety & property]", lines: ["[Safety line one, 5 words]", "[Safety line two, 5 words]"] },
];

/**
 * Band 10 — Things to know. The reference: three equal columns at 1440 and
 * 820 — cancellation policy, house rules, safety and property — each a
 * heading, a few lines, and "Learn more"; three equal full-width rows at
 * 390. Flat, peer content, the kind Fibonacci handles worst.
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
  return (
    <Band id="things" title="Things to know" note={mobile ? "no grid at 390 · three plain rows, as the reference" : 'from=1 to=3 · placement="top" · clockwise=false · hero left · flat content, forced'} cap="48rem">
      {mobile ? (
        <div className="rules rules--rows">
          {items.map((it) => (
            <div key={it.title} className="rules__row">
              <h4>{it.title}</h4>
              <ul>{it.lines.map((l) => <li key={l}>{l}</li>)}</ul>
              <p><a href="#things">[Learn more]</a></p>
            </div>
          ))}
        </div>
      ) : (
        <GoldenGrid from={1} to={3} placement="top" clockwise={false} outline="1px solid var(--line)">
          {items.map((it) => (
            <GoldenBox key={it.title}>
              <div className="copy rules">
                <h4>{it.title}</h4>
                <ul>{it.lines.map((l) => <li key={l}>{l}</li>)}</ul>
                <p><a href="#things">[Learn more]</a></p>
              </div>
            </GoldenBox>
          ))}
        </GoldenGrid>
      )}
    </Band>
  );
}
