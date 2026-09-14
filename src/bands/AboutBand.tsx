import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const bedroom1 = placeholderImage("BEDROOM 1", 1000, 1000, 40, { x: 0.5, y: 0.5 });
const bedroom2 = placeholderImage("BEDROOM 2", 1000, 1000, 60, { x: 0.5, y: 0.5 });

const PROSE = {
  desktop: "[Description, 90 words. The listing's own prose slot: what the place is, what it is near, what is in it. Sentence four names the bed and mattress details Airbnb hosts always name. Sentence five says who it suits. Sentence six mentions the season. Sentence seven mentions the town. Sentence eight closes on the view. This placeholder is ninety words long so the slot is measured against a real paragraph rather than a short label, and the real copy arrives against exactly this count.]",
  tablet: "[Description, 60 words. The listing's own prose slot: what the place is, what it is near, what is in it. Sentence four names the bed details. Sentence five says who it suits. Sentence six mentions the season and the town. This placeholder is sixty words so the slot is measured against a real paragraph and the real copy arrives against this count.]",
  mobile: "[Description, 40 words. What the place is, what it is near, what is in it, who it suits, and the season. Forty words is what a 366px hero holds at this size; the real copy arrives against this count, with a Show more.]",
} as const;

/**
 * Band 4 — About. In the reference, below the facts: three highlights with
 * icons, the description prose with "Show more", then "Where you'll sleep"
 * with two bedroom cards. Three stacked rows of equal weight.
 *
 * Here: prose in the hero, bedroom 1 in the 2-square, bedroom 2 and the
 * highlights in the 1-squares. Hero RIGHT (left · cw) to zig-zag against the
 * gallery's hero-left; at 390 placement rotates to bottom and the hero is a
 * full-width 366px square on top. Word count per width.
 */
export function AboutBand() {
  const viewport = useViewport();
  const mobile = viewport === "mobile";
  return (
    <Band id="about" title="About" note={`from=1 to=4 · placement="${mobile ? "bottom" : "left"}" · clockwise=true · hero ${mobile ? "top" : "right"}`} cap="60rem">
      <GoldenGrid from={1} to={4} placement={mobile ? "bottom" : "left"}>
        <GoldenBox>
          <div className="copy copy--prose">
            <p>{PROSE[viewport]}</p>
            <p><button type="button" className="btn">[Show more]</button></p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <figure className="media media--inset">
            <img src={bedroom1.src} alt="[Bedroom 1 — alt arrives with the asset]" />
            <figcaption className="media__tag">[Bedroom 1 · 1 queen bed]</figcaption>
          </figure>
        </GoldenBox>
        <GoldenBox>
          <figure className="media media--inset">
            <img src={bedroom2.src} alt="[Bedroom 2 — alt arrives with the asset]" />
            <figcaption className="media__tag">[Bedroom 2 · 1 queen bed]</figcaption>
          </figure>
        </GoldenBox>
        <GoldenBox>
          <div className="copy">
            <ul className="highlights">
              <li>[Highlight one, 6 words]</li>
              <li>[Highlight two, 6 words]</li>
              <li>[Highlight three, 6 words]</li>
            </ul>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
