import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const ALL = ["[Kitchen]", "[Wifi]", "[Free parking]", "[Hot tub]", "[Sauna]", "[Pets allowed]", "[TV]", "[Washer]", "[Dryer]", "[Workspace]"];
const hotTub = placeholderImage("HOT TUB", 1000, 1000, 200, { x: 0.5, y: 0.55 });

/**
 * Band 5 — What this place offers. The reference: ten amenities in two
 * columns at 1440, five in one column at 820 and 390, then "Show all 69
 * amenities". One flat row.
 *
 * The list gets ONE slot, at the reference's own counts (10 / 5 / 5). At 820
 * and 1440 `from={3}` collapses positions 1–2 into a 2×1 placeholder strip
 * that holds the call to action — it is the LAST child. The 2-square holds
 * the one amenity the reference itself singles out in the highlights (the
 * hot tub) as an image tile. At 390 the range opens to 1–3 and the same
 * three children fall into place: list in the 244px hero, tile and CTA in
 * the 122px squares.
 */
export function AmenitiesBand() {
  const viewport = useViewport();
  const from = viewport === "mobile" ? 1 : 3;
  const to = from === 1 ? 3 : 4;
  const items = viewport === "desktop" ? ALL : ALL.slice(0, 5);
  return (
    <Band id="amenities" title="What this place offers" note={`from=${from} to=${to} · placement="top" · clockwise=true · ${from > 1 ? "placeholder strip = last child (CTA)" : "no placeholder"} · ${items.length} of 69 listed`} cap="60rem">
      <GoldenGrid from={from} to={to} placement="top" outline="1px solid var(--line)">
        <GoldenBox>
          <div className="copy list" style={viewport === "desktop" ? undefined : { columns: 1 }}>
            <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        </GoldenBox>
        <GoldenBox>
          <figure className="media media--inset">
            <img src={hotTub.src} alt="[The hot tub — alt arrives with the asset]" style={{ objectPosition: hotTub.subject }} />
            <figcaption className="media__tag">[Private hot tub · all year]</figcaption>
          </figure>
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
