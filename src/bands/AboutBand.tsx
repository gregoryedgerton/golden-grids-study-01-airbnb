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
 * Band 4 — About. In the reference, below the facts: FOUR highlights, each
 * an icon, a bold title and a one-line explainer ("Top 5% of homes", "In the
 * woods near …", "Private hot tub, sauna, and fire pit", "Beautifully
 * designed and spotless"); the description with "Show more"; then "Where
 * you'll sleep" with two equal bedroom cards. Three stacked rows of equal
 * weight, the highlights block the tallest of them at 820.
 *
 * Here: prose in the 3-square hero, the four highlight TITLES in the
 * 2-square (the explainers are dropped — see the asset spec), and the two
 * bedrooms in the two 1-squares, which in a 1–4 are adjacent equals: the
 * reference's own pair. Hero RIGHT (left · cw) to zig-zag against the
 * gallery; at 390 placement rotates to bottom and the hero is a full-width
 * 366px square on top. Word count per width.
 */
export function AboutBand() {
  const viewport = useViewport();
  const mobile = viewport === "mobile";
  return (
    <Band id="about" title="About" note={`from=1 to=4 · placement="${mobile ? "bottom" : "left"}" · clockwise=true · hero ${mobile ? "top" : "right"} · four highlights, titles only`} cap="60rem">
      <GoldenGrid from={1} to={4} placement={mobile ? "bottom" : "left"}>
        <GoldenBox>
          <div className="copy copy--prose">
            <p>{PROSE[viewport]}</p>
            <p><button type="button" className="btn">[Show more]</button></p>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center">
            <ul className="highlights">
              <li>[Top 5% of homes — 4 words]</li>
              <li>[Highlight two, 5 words]</li>
              <li>[Highlight three, 5 words]</li>
              <li>[Highlight four, 4 words]</li>
            </ul>
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
      </GoldenGrid>
    </Band>
  );
}
