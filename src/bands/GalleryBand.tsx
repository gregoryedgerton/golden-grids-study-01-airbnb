import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { assets } from "../assets";
import { useExpandGroup, ExpandedCell, ExpandableMedia, PhotoView } from "../lib/expand";
import { listing, photoSet } from "../content";
import { Band } from "./Band";

// Shots 1–5 of ASSETS.md, in child order: hero, then supports largest to smallest.
const photos = [
  { ...assets.hero, alt: listing.photos.hero, caption: "The hut at dusk" },
  { ...assets.dining, alt: listing.photos.living, caption: "The dining room, kept" },
  { ...assets.arcade, alt: listing.photos.sauna, caption: "The arcade corner" },
  { ...assets.garden, alt: listing.photos.garden, caption: "The kitchen garden" },
  { ...assets.kitchen, alt: listing.photos.kitchen, caption: "The kitchen on the old line" },
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
 * capped so the mosaic and the facts share the first screen at 1440.
 *
 * The reference mosaic is two-level: the hero equals the sum of its four
 * equal supports. The spiral turns those four equals into a descent — a
 * change of weight the writeup defends rather than hides.
 *
 * Every photograph is its own control: clicking one expands that slot to
 * the whole band and shows the picture at size. The corner button opens the
 * full set in the same way. See src/lib/expand.tsx.
 */
export function GalleryBand() {
  const viewport = useViewport();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "bottom"],
    tablet: [5, "top"],
    desktop: [5, "top"],
  });
  const x = useExpandGroup();
  return (
    <Band id="gallery" title={listing.labels.photos} hideTitle flush rounded note={`from=1 to=${to} · placement="${placement}" · clockwise=true · hero left`} cap="64rem">
      <GoldenGrid from={1} to={to} placement={placement}>
        {photos.map((p, i) => (
          <GoldenBox key={i} {...x.boxProps(i === 0 && x.isOpen("all") ? "all" : `p${i}`)}>
            <ExpandableMedia group={x} slotKey={`p${i}`} src={p.src} alt={p.alt} objectPosition={i === 0 ? p.subject : undefined}>
              {i === 0 && <button className="btn btn--corner" {...x.triggerProps("all")}>{listing.cta.showPhotos}</button>}
            </ExpandableMedia>
            {x.isOpen(`p${i}`) && (
              <ExpandedCell id={x.panelId(`p${i}`)} title={p.caption} onClose={x.close} closeRef={x.closeRef}>
                <PhotoView src={p.src} alt={p.alt} caption={p.caption} />
              </ExpandedCell>
            )}
            {i === 0 && x.isOpen("all") && (
              <ExpandedCell id={x.panelId("all")} title={listing.expanded.photos(photoSet.length)} onClose={x.close} closeRef={x.closeRef}>
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
