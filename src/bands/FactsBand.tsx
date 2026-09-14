import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const avatar = placeholderImage("HOST", 400, 400, 20);

/**
 * Band 2 — Facts. The reference's first text block: the summary line
 * ("Entire cabin in Saugerties, New York"), the capacity line ("4 guests ·
 * 2 bedrooms · 2 beds · 2 baths"), the Guest favorite badge with its rating
 * and review count, and the host row. Airbnb lays these out as four stacked
 * full-width rows of equal weight.
 *
 * THE HONEST RISK, named in the brief. Rating, review count and capacity are
 * peers: nothing about 4.99 outranks 159 reviews. Fibonacci insists one box
 * dominates. The choice made here: the booking-deciding facts (what it is,
 * where, how many it sleeps) take the hero; the rating takes the 2-square;
 * review count and host share the 1-squares. Whether that reads as forced is
 * for the writeup to say, not for smaller type to hide.
 *
 * At 390 the host row merges into the hero and the range drops to 1–3 so the
 * band stays landscape (3:2) rather than 3:5 portrait. Width is capped at
 * 48rem so the hero is a 461px square, not 816px: the band should fail, if
 * it fails, for forced hierarchy — not for emptiness.
 */
export function FactsBand() {
  const mobile = useViewport() === "mobile";
  return (
    <Band
      id="facts"
      title="Facts"
      note={mobile ? 'from=1 to=3 · placement="top" · clockwise=true · hero right · host merged into hero' : 'from=1 to=4 · placement="right" · clockwise=false · hero left'}
      cap="48rem"
    >
      <GoldenGrid from={1} to={mobile ? 3 : 4} placement={mobile ? "top" : "right"} clockwise={mobile} color="#efe6d6">
        <GoldenBox>
          <div className="copy copy--center facts">
            <strong>[Entire cabin in Town, State — 6 words]</strong>
            <span>[4 guests · 2 bedrooms · 2 beds · 2 baths]</span>
            {mobile && (
              <p className="muted" style={{ marginTop: "0.5em" }}>
                [Hosted by Name · Superhost · 2 years hosting]
              </p>
            )}
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">4.99</span>
            <span className="score__label">[Guest favorite]</span>
            <span className="score__sub">[One of the most loved homes on Airbnb — 10 words]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n" style={{ fontSize: "clamp(1.2rem, 22cqw, 4rem)" }}>159</span>
            <span className="score__sub">[reviews]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy card">
            <img className="avatar" src={avatar.src} alt="" />
            <span className="score__sub">[Hosted by Name · Superhost · 2 years]</span>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
