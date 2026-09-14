import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { Band } from "./Band";

/**
 * Band 9 — Things to know. The reference: three equal columns — cancellation
 * policy, house rules, safety and property — each a heading, three lines, and
 * a "Learn more" link. Flat, peer content, the kind Fibonacci handles worst.
 *
 * Here the house rules (the longest) take the hero on the right and the other
 * two share the 1-squares. This is forced and the writeup says so; the
 * honest alternative is a plain three-column block outside the grid, which a
 * study is allowed to do — bands are a choice per block, not a mandate.
 */
export function ThingsBand() {
  return (
    <Band id="things" title="Things to know" note='from=1 to=3 · placement="top" · clockwise=true · hero right · flat content, forced' cap="56rem">
      <GoldenGrid from={1} to={3} placement="top" outline="1px solid var(--line)">
        <GoldenBox>
          <div className="copy rules">
            <h4>[House rules]</h4>
            <ul><li>[Check-in after 4:00 PM]</li><li>[Checkout before 11:00 AM]</li><li>[4 guests maximum]</li><li>[Rule four, 5 words]</li></ul>
            <p><a href="#things">[Learn more]</a></p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy rules">
            <h4>[Cancellation policy]</h4>
            <ul><li>[Policy line, 8 words]</li></ul>
            <p><a href="#things">[Learn more]</a></p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy rules">
            <h4>[Safety &amp; property]</h4>
            <ul><li>[Safety line one, 5 words]</li><li>[Safety line two, 5 words]</li></ul>
            <p><a href="#things">[Learn more]</a></p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
