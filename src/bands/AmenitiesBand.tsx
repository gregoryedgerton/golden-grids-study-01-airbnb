import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { assets } from "../assets";
import { listing, amenityGroups } from "../content";
import { useExpand, ExpandedCell } from "../lib/expand";
import { Band } from "./Band";

const tub = assets.saladBar;

/**
 * Band 5 — Amenities. The reference: ten amenities in two columns at 1440,
 * five in one column at 820 and 390, then a "Show all" call to action. One
 * flat row.
 *
 * The list gets ONE slot, at the reference's own counts (10 / 5 / 5). At 820
 * and 1440 `from={3}` collapses positions 1–2 into a 2×1 placeholder strip
 * that holds the call to action — it is the LAST child. The 2-square holds
 * the one amenity the listing itself singles out in its highlights (the
 * salad bar) as an image tile. At 390 the range opens to 1–3 and the same
 * three children fall into place: list in the 244px hero, tile and CTA in
 * the 122px squares.
 */
export function AmenitiesBand() {
  const viewport = useViewport();
  const from = viewport === "mobile" ? 1 : 3;
  const to = from === 1 ? 3 : 4;
  const items = viewport === "desktop" ? listing.amenities : listing.amenities.slice(0, 5);
  const x = useExpand();
  return (
    <Band id="amenities" title={listing.labels.amenities} note={`from=${from} to=${to} · placement="top" · clockwise=true · ${from > 1 ? "placeholder strip = last child (CTA)" : "no placeholder"} · ${items.length} of ${listing.amenityTotal} listed`} cap="60rem" card>
      <GoldenGrid from={from} to={to} placement="top" outline="1px solid var(--line)">
        <GoldenBox {...x.boxProps}>
          <div className="copy list">
            <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
          {x.expanded && (
            <ExpandedCell id={x.panelId} title={`What this place offers · ${listing.amenityTotal}`} onClose={x.close} closeRef={x.closeRef}>
              {amenityGroups.map((g) => (
                <div className="cell__group" key={g.title}>
                  <h4>{g.title}</h4>
                  <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
            </ExpandedCell>
          )}
        </GoldenBox>
        <GoldenBox>
          <figure className="media media--inset">
            <img src={tub.src} alt={listing.photos.tub} style={{ objectPosition: tub.subject }} />
            <figcaption className="media__tag">Salad bar · stocked for breakfast</figcaption>
          </figure>
        </GoldenBox>
        <GoldenBox className="placeholder-slot">
          <div className="copy copy--center">
            <button className="btn btn--chip" {...x.triggerProps}>{listing.cta.showAmenities} {listing.amenityTotal}{viewport === "mobile" ? "" : " amenities"}</button>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
