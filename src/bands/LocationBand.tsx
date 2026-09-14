import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const map = placeholderImage("MAP", 1400, 1400, 160, { x: 0.5, y: 0.5 });

/**
 * Band 8 — Where you'll be. The reference: a full-width map (≈16:9 at 1440
 * and 820, near-portrait 342×435 at 390 — the second-tallest block on the
 * mobile page), the town line above, "Exact location provided after booking"
 * below.
 *
 * At 820 and 1440 the map fills a square hero on the LEFT (top ccw) so the
 * tail of the page zig-zags: map left, host bio right, house rules left. The
 * two 1-squares hold the town line with its note, and the location highlight
 * the reference itself writes ("in the woods near …, a five-minute walk to
 * …") — a real line, so the tail has weight instead of one sentence in a
 * 299px box. At 390 the band goes portrait (right ccw, hero top): the map is
 * a full-width 366px square with the two lines beneath, the reference's own
 * mobile weight. A map has no composition to lose; the square crop costs
 * nothing.
 */
export function LocationBand() {
  const mobile = useViewport() === "mobile";
  return (
    <Band id="location" title="Where you'll be" note={mobile ? 'from=1 to=3 · placement="right" · clockwise=false · hero top (2:3 portrait)' : 'from=1 to=3 · placement="top" · clockwise=false · hero left'} cap="56rem">
      <GoldenGrid from={1} to={3} placement={mobile ? "right" : "top"} clockwise={false} outline="1px solid var(--line)">
        <GoldenBox>
          <figure className="media">
            <img src={map.src} alt="[Map of the area — a drawn map, not a tile service; alt arrives with the asset]" />
            <figcaption className="media__tag">[map · 1400×1400 · drawn, not tiles]</figcaption>
          </figure>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center facts">
            <strong>[Town, State, Country]</strong>
            <p className="score__sub" style={{ margin: 0 }}>[Exact location provided after booking — 6 words]</p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center rules">
            <h4>[In the woods near Town — 6 words]</h4>
            <p style={{ margin: "0.25em 0 0" }}>[A five-minute walk to the nearest trail — 12 words]</p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
