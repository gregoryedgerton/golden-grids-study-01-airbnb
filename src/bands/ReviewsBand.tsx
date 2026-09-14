import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const reviewer1 = placeholderImage("R1", 200, 200, 300);
const reviewer2 = placeholderImage("R2", 200, 200, 120);

const FEATURED = {
  mobile: "[Featured review, 20 words. What the guest came for and what they would tell a friend. Twenty words.]",
  tablet: "[Featured review, 40 words. The one review that decides a booking, given the room it needs: what the guest came for, what surprised them, what they would tell a friend. Forty words at this width.]",
  desktop: "[Featured review, 60 words. The one review that decides a booking, given the room it needs: what the guest came for, what surprised them, what they would say to a friend. Sixty words is what the 3-square holds at 1440, and the real review is chosen against that count rather than trimmed to fit it.]",
} as const;

/**
 * Band 7 — Reviews. The tallest block on the reference page at 1440 and 820:
 * a laurelled 4.99 with "Guest favorite" and "top 5% of eligible listings",
 * a seven-column category breakdown (overall histogram + six scores), a row
 * of "Guest reviews mention" chips, six reviews at identical weight (two
 * columns at 1440, one at 820, a carousel at 390), "Show all 159 reviews".
 *
 * The score block is the only non-peer element, so it takes the hero at
 * every width. The six equal reviews are where the reference's grid asserts
 * equal weight most plainly — while Airbnb itself already ranks them (the
 * order is not chronological). This band makes that implicit ranking
 * explicit: a featured review in the 3-square, a second in the 2-square, one
 * category score and the "Show all 159" call to action in the 1-squares.
 * Trims, stated: six reviews → two, seven category columns → one, chips
 * dropped (README lists them).
 *
 * Hero LEFT at 820 and 1440 (right ccw, bottom ccw). At 390 the band goes
 * portrait (right ccw with three boxes is 2:3, hero on top): a 366px score
 * on top and two 183px squares beneath — the featured review at 20 words
 * and the call to action. Word count rises with the slot: 20 / 40 / 60.
 */
export function ReviewsBand() {
  const viewport = useViewport();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "right"],
    tablet: [4, "right"],
    desktop: [5, "bottom"],
  });
  const desktop = viewport === "desktop";
  const mobile = viewport === "mobile";
  return (
    <Band
      id="reviews"
      title="Reviews"
      hideTitle
      note={`from=1 to=${to} · placement="${placement}" · clockwise=false · hero ${mobile ? "top (2:3 portrait)" : "left"} · six reviews → ${desktop ? "two" : "one"}, seven categories → one`}
      cap="60rem"
    >
      <GoldenGrid from={1} to={to} placement={placement} clockwise={false}>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">4.99</span>
            <span className="score__label">[Guest favorite]</span>
            <span className="score__sub">[One of the most loved homes on Airbnb, according to guests — 12 words]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy review">
            <p>“{FEATURED[viewport]}”</p>
            <div className="review__who"><img className="avatar" src={reviewer1.src} alt="" /><span>[Name, City] · [Month Year]</span></div>
          </div>
        </GoldenBox>
        {desktop && (
          <GoldenBox>
            <div className="copy review">
              <p>“[Second review, 25 words. Shorter, a different guest, a different reason to book. Twenty-five words is what the 2-square holds.]”</p>
              <div className="review__who"><img className="avatar" src={reviewer2.src} alt="" /><span>[Name, City] · [Month Year]</span></div>
            </div>
          </GoldenBox>
        )}
        {!mobile && (
          <GoldenBox>
            <div className="copy score">
              <span className="score__n" style={{ fontSize: "clamp(1rem, 26cqw, 3rem)" }}>5.0</span>
              <span className="score__sub">[Cleanliness]</span>
            </div>
          </GoldenBox>
        )}
        <GoldenBox>
          <div className="copy copy--center"><p><button type="button" className="btn btn--small">[Show all 159 reviews]</button></p></div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
