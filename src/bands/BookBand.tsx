import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { Band } from "./Band";

/**
 * Band 3 — Book. Airbnb's booking card: sticky in the right column at 1440
 * and 820 ("Add dates for prices", check-in, checkout, guests, Check
 * availability), a sticky bottom bar at 390. In a stack of full-width bands
 * it becomes a band of its own, placed where the card first appears.
 *
 * 1–2 is the peer pair: the form and the call to action are equals. The
 * first child sits on the `placement` side, so `left` puts the form left and
 * the CTA right — the order of the reference's mobile bar. At 390 the range
 * is 1–1 (`single`) and the CTA moves INTO the form box, because a single
 * box ignores every child after the first. Width capped at 40rem so the two
 * squares are 320px, not 680px.
 *
 * Two costs, both in the README: the card no longer sticks (a cost of
 * stacking, not of the spiral), and at 390 a 366px square stands in for a
 * ~110px bar — there is no smaller single box.
 *
 * Nothing here books anything. The structure is the deliverable.
 */
export function BookBand() {
  const single = useViewport() === "mobile";
  return (
    <Band id="book" title="Book" hideTitle note={single ? 'from=1 to=1 · single · CTA merged into the form · a 366px square standing in for a ~110px bar' : 'from=1 to=2 · placement="left" · form left (first child on the placement side), CTA right'} cap="40rem">
      <GoldenGrid from={1} to={single ? 1 : 2} placement="left" outline="1px solid var(--line)">
        <GoldenBox>
          <form className="copy form" onSubmit={(e) => e.preventDefault()}>
            <label className="field"><span>Check-in</span><input type="text" placeholder="[Add date]" readOnly /></label>
            <label className="field"><span>Checkout</span><input type="text" placeholder="[Add date]" readOnly /></label>
            <label className="field"><span>Guests</span><input type="text" placeholder="[1 guest]" readOnly /></label>
            {single && <button type="submit" className="btn btn--primary">[Check availability]</button>}
          </form>
        </GoldenBox>
        <GoldenBox>
          <div className="copy form">
            <p className="score__label" style={{ margin: 0 }}>[Add dates for prices]</p>
            <button type="button" className="btn btn--primary">[Check availability]</button>
            <p className="score__sub" style={{ margin: 0 }}>[You won't be charged yet · 6 words]</p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
