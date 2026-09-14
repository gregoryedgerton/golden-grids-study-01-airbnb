import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { listing } from "../content";
import { Band } from "./Band";

/**
 * Band 3 — Book. The reference's booking card: sticky in the right column at
 * 1440 and 820 (a price prompt, check-in, checkout, guests, a call to
 * action), a sticky bottom bar at 390. In a stack of full-width bands it
 * becomes a band of its own, placed where the card first appears.
 *
 * 1–2 is the peer pair: the form and the call to action are equals. The
 * first child sits on the `placement` side, so `left` puts the form left and
 * the CTA right — the order of the reference's mobile bar. At 390 the range
 * is 1–1 (`single`) and the CTA moves INTO the form box, because a single
 * box ignores every child after the first. Width capped at 40rem.
 *
 * Two costs, both in the README: the card no longer sticks (a cost of
 * stacking, not of the spiral), and at 390 a 366px square stands in for a
 * ~110px bar — there is no smaller single box.
 *
 * Nothing here books anything. The structure is the deliverable.
 */
export function BookBand() {
  const single = useViewport() === "mobile";
  const f = listing.fields;
  return (
    <Band id="book" title={listing.labels.book} hideTitle note={single ? 'from=1 to=1 · single · CTA merged into the form · a 366px square standing in for a ~110px bar' : 'from=1 to=2 · placement="left" · form left (first child on the placement side), CTA right'} cap="40rem">
      <GoldenGrid from={1} to={single ? 1 : 2} placement="left" outline="1px solid var(--line)">
        <GoldenBox>
          <form className="copy form" onSubmit={(e) => e.preventDefault()}>
            <label className="field"><span>{f.checkin}</span><input type="text" placeholder={f.datePlaceholder} readOnly /></label>
            <label className="field"><span>{f.checkout}</span><input type="text" placeholder={f.datePlaceholder} readOnly /></label>
            <label className="field"><span>{f.guests}</span><input type="text" placeholder={f.guestsPlaceholder} readOnly /></label>
            {single && <button type="submit" className="btn btn--primary">{listing.booking.cta}</button>}
          </form>
        </GoldenBox>
        <GoldenBox>
          <div className="copy form">
            <p className="score__label" style={{ margin: 0 }}>{listing.booking.prompt}</p>
            <button type="button" className="btn btn--primary">{listing.booking.cta}</button>
            <p className="score__sub" style={{ margin: 0 }}>{listing.booking.note}</p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
