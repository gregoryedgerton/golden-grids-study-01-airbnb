import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { assets } from "../assets";
import { useExpand, ExpandedCell } from "../lib/expand";
import { photoSet } from "../content";
import { listing } from "../content";
import { Band } from "./Band";

// Shots 1–5 of ASSETS.md, in child order: hero, then supports largest to smallest.
const photos = [
  { ...assets.hero, alt: listing.photos.hero },
  { ...assets.dining, alt: listing.photos.living },
  { ...assets.arcade, alt: listing.photos.sauna },
  { ...assets.bedroom, alt: listing.photos.bedroom },
  { ...assets.kitchen, alt: listing.photos.kitchen },
];

/**
 * Band 1 — Photos. The reference's mosaic: one hero photograph on the left,
 * four supporting shots in a 2×2 on the right, identical at 1440 and 820.
 * At 390 it collapses to a one-photo carousel and the hierarchy is carried
 * by order alone.
 *
 * Here the full 1+4 descent is kept at 820 and 1440 (1–5, top cw, hero
 * left) and a 1–3 descent replaces the carousel at 390 (bottom cw, hero
 * still left, still landscape): hero plus supports on one phone screen is
 * the structural claim. Declare all five photographs; `to` trims. Width is
 * capped so the mosaic and the facts share the first screen at 1440, as
 * they do in the reference.
 *
 * The reference mosaic is two-level: the hero equals the sum of its four
 * equal supports. The spiral turns those four equals into a descent — a
 * change of weight the writeup defends rather than hides.
 *
 * "Show all photos" expands the hero cell to cover the band with the full
 * set (src/lib/expand.tsx): the slot that showed the summary shows the rest.
 */
export function GalleryBand() {
  const viewport = useViewport();
  const x = useExpand();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "bottom"],
    tablet: [5, "top"],
    desktop: [5, "top"],
  });
  return (
    <Band id="gallery" title={listing.labels.photos} hideTitle flush rounded note={`from=1 to=${to} · placement="${placement}" · clockwise=true · hero left`} cap="64rem">
      <GoldenGrid from={1} to={to} placement={placement}>
        {photos.map((p, i) => (
          <GoldenBox key={i} {...(i === 0 ? x.boxProps : {})}>
            <figure className="media media--inset">
              <img src={p.src} alt={p.alt} style={i === 0 ? { objectPosition: p.subject } : undefined} />
              {i === 0 && <button className="btn btn--corner" {...x.triggerProps}>{listing.cta.showPhotos}</button>}
            </figure>
            {i === 0 && x.expanded && (
              <ExpandedCell id={x.panelId} title={listing.expanded.photos(photoSet.length)} onClose={x.close} closeRef={x.closeRef}>
                <div className="cell__photos">
                  {photoSet.map((ph) => (
                    <figure key={ph.key}>
                      <img src={assets[ph.key].src} alt={ph.alt} style={{ objectPosition: assets[ph.key].subject }} />
                      <figcaption>{ph.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </ExpandedCell>
            )}
          </GoldenBox>
        ))}
      </GoldenGrid>
    </Band>
  );
}
