import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const map = placeholderImage("MAP", 1400, 1400, 160, { x: 0.5, y: 0.5 });

/**
 * Band 7 — Where you'll be. The reference: a full-width map roughly 16:9,
 * the town line above it, "Exact location provided after booking" below.
 *
 * Here the map fills a square hero on the right and the two lines take the
 * 1-squares on the left. Airbnb's map is wide because its grid is wide; a
 * map has no composition to lose, so the square crop costs nothing. Same
 * 3:2 band at every width. No lever; width capped.
 */
export function LocationBand() {
  return (
    <Band id="location" title="Where you'll be" note='from=1 to=3 · placement="top" · clockwise=true · hero right' cap="56rem">
      <GoldenGrid from={1} to={3} placement="top" outline="1px solid var(--line)">
        <GoldenBox>
          <figure className="media">
            <img src={map.src} alt="[Map of the area — a drawn map, not a tile service; alt arrives with the asset]" />
            <figcaption className="media__tag">[map · 1400×1400 · drawn, not tiles]</figcaption>
          </figure>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center facts"><strong>[Town, State, Country]</strong></div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center"><p className="score__sub">[Exact location provided after booking — 6 words]</p></div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
