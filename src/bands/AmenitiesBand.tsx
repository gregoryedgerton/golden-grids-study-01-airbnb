import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { Band } from "./Band";

const items = ["[Kitchen]", "[Wifi]", "[Free parking]", "[Hot tub]", "[Sauna]", "[Pets allowed]", "[TV]", "[Washer]", "[Dryer]", "[Workspace]"];
const days = Array.from({ length: 30 }, (_, i) => i + 1);

/**
 * Band 5 — Amenities and dates. In the reference: "What this place offers",
 * ten of 69 amenities in two columns with "Show all 69 amenities", then the
 * two-month date picker. Two more stacked rows.
 *
 * The list gets ONE slot. `from={3}` collapses positions 1–2 into a 2×1
 * placeholder strip that holds the "Show all" call to action — it is the LAST
 * child. The 2-square holds one month of the picker; when its box is too
 * small for a grid of days (390) a container query swaps in a button. At 390
 * the range opens to 1–3 and the same three children fall into place.
 */
export function AmenitiesBand() {
  const from = useViewport() === "mobile" ? 1 : 3;
  const to = from === 1 ? 3 : 4;
  return (
    <Band id="amenities" title="What this place offers" note={`from=${from} to=${to} · placement="top" · clockwise=true · ${from > 1 ? "placeholder strip = last child" : "no placeholder"}`} cap="60rem">
      <GoldenGrid from={from} to={to} placement="top" outline="1px solid var(--line)">
        <GoldenBox>
          <div className="copy list">
            <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy">
            <span className="score__label">[Select check-in date]</span>
            <div className="calendar" aria-hidden="true">
              <b>[September 2026]</b>
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
              {days.map((d) => <span key={d}>{d}</span>)}
            </div>
            <p className="calendar__cta"><button type="button" className="btn">[Add dates]</button></p>
          </div>
        </GoldenBox>
        <GoldenBox className="placeholder-slot">
          <div className="copy copy--center">
            <button type="button" className="btn">[Show all 69 amenities]</button>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
