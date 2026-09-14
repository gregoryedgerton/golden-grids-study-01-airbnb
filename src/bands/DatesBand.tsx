import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { listing } from "../content";
import { Band } from "./Band";

const days = Array.from({ length: 30 }, (_, i) => i + 1);

function Month({ name }: { name: string }) {
  return (
    <div className="copy">
      <div className="calendar" aria-hidden="true">
        <b>{name}</b>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i} className="calendar__dow">{d}</span>)}
        {days.map((d) => <span key={d}>{d}</span>)}
      </div>
    </div>
  );
}

/**
 * Band 6 — Choose your dates. The reference gives the date picker its own
 * headed section: two months side by side at 1440 and 820, one month at 390.
 * It is as tall as the amenities list beside it in the column.
 *
 * Two months are a peer pair, so 1–2: the first child sits on the `placement`
 * side, and `left` puts the first month on the left, in reading order. At
 * 390, 1–1: one month, as the reference shows. Nothing here selects a date.
 * Width capped at 48rem.
 */
export function DatesBand() {
  const single = useViewport() === "mobile";
  return (
    <Band id="dates" title={listing.labels.dates} note={single ? "from=1 to=1 · single · one month" : 'from=1 to=2 · placement="left" · two months, first child left'} cap="48rem" cards>
      <GoldenGrid from={1} to={single ? 1 : 2} placement="left">
        <GoldenBox><Month name={listing.months[0]} /></GoldenBox>
        <GoldenBox><Month name={listing.months[1]} /></GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
