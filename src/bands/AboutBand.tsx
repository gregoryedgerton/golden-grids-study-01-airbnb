import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { listing, description } from "../content";
import { Band } from "./Band";

const bedroomArt = [
  placeholderImage("BEDROOM 1", 1000, 1000, 40, { x: 0.5, y: 0.5 }),
  placeholderImage("BEDROOM 2", 1000, 1000, 60, { x: 0.5, y: 0.5 }),
];

/**
 * Band 4 — Sleeping arrangements. In the reference, below the facts: FOUR
 * highlights, each an icon, a bold title and a one-line explainer; the
 * description with "Show more"; then two equal bedroom cards. Three stacked
 * rows of equal weight, the highlights block the tallest of them at 820.
 *
 * Here: prose in the 3-square hero, the four highlight TITLES in the
 * 2-square (the explainers are dropped — see the asset spec), and the two
 * bedrooms in the two 1-squares, which in a 1–4 are adjacent equals: the
 * reference's own pair. Hero RIGHT (left · cw) to zig-zag against the
 * mosaic; at 390 placement rotates to bottom and the hero is a full-width
 * 366px square on top. Word count per width.
 */
export function AboutBand() {
  const viewport = useViewport();
  const mobile = viewport === "mobile";
  return (
    <Band id="about" title={listing.labels.sleep} note={`from=1 to=4 · placement="${mobile ? "bottom" : "left"}" · clockwise=true · hero ${mobile ? "top" : "right"} · four highlights, titles only`} cap="60rem">
      <GoldenGrid from={1} to={4} placement={mobile ? "bottom" : "left"}>
        <GoldenBox>
          <div className="copy copy--prose">
            <p>{description[viewport]}</p>
            <p><button type="button" className="btn">{listing.cta.showMore}</button></p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center">
            <ul className="highlights">
              {listing.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </GoldenBox>
        {listing.bedrooms.map((b, i) => (
          <GoldenBox key={b.name}>
            <figure className="media media--inset">
              <img src={bedroomArt[i].src} alt={b.alt} />
              <figcaption className="media__caption">{b.name}<small>{b.bed}</small></figcaption>
            </figure>
          </GoldenBox>
        ))}
      </GoldenGrid>
    </Band>
  );
}
