import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { assets } from "../assets";
import { listing } from "../content";
import { Band } from "./Band";

const map = assets.map;

/**
 * Band 8 — Location. The reference: a full-width map (≈16:9 at 1440 and
 * 820, near-portrait at 390 — the second-tallest block on the mobile page),
 * the town line above, a note below that the exact address follows booking.
 *
 * At 820 and 1440 the map fills a square hero on the LEFT (top ccw) so the
 * tail of the page zig-zags: map left, host bio right, house rules left. The
 * two 1-squares hold the town line with its note, and the location
 * highlight — a real line, so the tail has weight instead of one sentence in
 * a 299px box. At 390 the band goes portrait (right ccw, hero top): the map
 * is a full-width 366px square with the two lines beneath, the reference's
 * own mobile weight. A map has no composition to lose; the square crop costs
 * nothing.
 */
export function LocationBand() {
  const mobile = useViewport() === "mobile";
  return (
    <Band id="location" title={listing.labels.location} note={mobile ? 'from=1 to=3 · placement="right" · clockwise=false · hero top (2:3 portrait)' : 'from=1 to=3 · placement="top" · clockwise=false · hero left'} cap="56rem" card>
      <GoldenGrid from={1} to={3} placement={mobile ? "right" : "top"} clockwise={false} outline="1px solid var(--line)">
        <GoldenBox>
          <figure className="media">
            <img src={map.src} alt={listing.photos.map} />
          </figure>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center facts">
            <p>{listing.town.line}</p>
            <p>{listing.town.note}</p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center rules">
            <h4>{listing.locationHighlight.title}</h4>
            <p style={{ marginTop: 0 }}>{listing.locationHighlight.body}</p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
