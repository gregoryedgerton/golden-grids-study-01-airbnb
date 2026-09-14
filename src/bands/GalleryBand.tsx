import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

// ASSET SPEC — see README.md "Images". Sources at or above these sizes.
const photos = [
  placeholderImage("HERO · EXTERIOR", 1600, 1067, 150, { x: 0.5, y: 0.42 }),
  placeholderImage("LIVING", 1200, 800, 30),
  placeholderImage("HOT TUB", 1000, 1000, 200),
  placeholderImage("BEDROOM", 1200, 900, 40),
  placeholderImage("KITCHEN", 1200, 800, 100),
];

/**
 * Band 1 — Gallery. Airbnb's mosaic: one hero photograph on the left, four
 * supporting shots in a 2×2 on the right, identical at 1440 and 820. At 390
 * it collapses to a one-photo carousel ("1 / 91") and the hierarchy is
 * carried by order alone.
 *
 * Here the full 1+4 descent is kept at 820 and 1440 (1–5, top cw, hero
 * left) and a 1–3 descent replaces the carousel at 390 (bottom cw, hero
 * still left, still landscape): hero plus supports on one phone screen is
 * the structural claim. Declare all five photographs; `to` trims. Width is
 * capped so the gallery and the facts share the first screen at 1440, as
 * they do in the reference (its mosaic is ~470px tall).
 *
 * The reference mosaic is two-level: the hero equals the sum of its four
 * equal supports. The spiral turns those four equals into a descent — a
 * change of weight the writeup defends rather than hides.
 *
 * Airbnb's grid demands 1:1 and 3:2 crops from the photographer. Here every
 * slot crops for itself: sources are any shape, the box owns the crop, and
 * only the subject placement is specified.
 */
export function GalleryBand() {
  const viewport = useViewport();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "bottom"],
    tablet: [5, "top"],
    desktop: [5, "top"],
  });
  return (
    <Band id="gallery" title="Photos" hideTitle flush rounded note={`from=1 to=${to} · placement="${placement}" · clockwise=true · hero left`} cap="64rem">
      <GoldenGrid from={1} to={to} placement={placement}>
        {photos.map((p, i) => (
          <GoldenBox key={i}>
            <figure className="media media--inset">
              <img
                src={p.src}
                alt={i === 0 ? "[Hero: the cabin exterior — alt text arrives with the asset]" : ""}
                style={i === 0 ? { objectPosition: p.subject } : undefined}
              />
              {i === 0 && <button type="button" className="btn btn--corner">[Show all photos]</button>}
            </figure>
          </GoldenBox>
        ))}
      </GoldenGrid>
    </Band>
  );
}
