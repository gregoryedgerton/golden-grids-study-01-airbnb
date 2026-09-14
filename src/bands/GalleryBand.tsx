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
 * supporting shots in a 2×2 on the right (1440). At 820 the mosaic keeps the
 * hero and two supporting shots; at 390 it collapses to a one-photo carousel.
 *
 * Here the descent is kept at every width instead of a carousel: 1–5, 1–4,
 * 1–3 with placement rotated in lockstep so the hero stays LEFT and the band
 * stays landscape. Declare all five photographs; `to` trims.
 *
 * Airbnb's grid demands 1:1 and 3:2 crops from the photographer. Here every
 * slot crops for itself: sources are any shape, the box owns the crop, and
 * only the subject placement is specified.
 */
export function GalleryBand() {
  const viewport = useViewport();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "bottom"],
    tablet: [4, "right"],
    desktop: [5, "top"],
  });
  return (
    <Band id="gallery" title="Gallery" note={`from=1 to=${to} · placement="${placement}" · clockwise=true · hero left`}>
      <GoldenGrid from={1} to={to} placement={placement}>
        {photos.map((p, i) => (
          <GoldenBox key={i}>
            <figure className="media media--inset">
              <img
                src={p.src}
                alt={i === 0 ? "[Hero: the cabin exterior — alt text arrives with the asset]" : ""}
                style={i === 0 ? { objectPosition: p.subject } : undefined}
              />
              {i === 0 && <button type="button" className="btn btn--corner">[Show all 24 photos]</button>}
            </figure>
          </GoldenBox>
        ))}
      </GoldenGrid>
    </Band>
  );
}
