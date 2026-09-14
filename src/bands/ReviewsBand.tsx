import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { listing, featuredReview, secondReview } from "../content";
import { Band } from "./Band";

const avatars = [placeholderImage("R1", 200, 200, 300), placeholderImage("R2", 200, 200, 120)];

/**
 * Band 7 — Reviews. The tallest block on the reference page at 1440 and 820:
 * a laurelled score with a badge and blurb, a seven-column category
 * breakdown, a row of topic chips, six reviews at identical weight (two
 * columns at 1440, one at 820, a carousel at 390), a "Show all" link.
 *
 * The score block is the only non-peer element, so it takes the hero at
 * every width. The six equal reviews are where the reference's grid asserts
 * equal weight most plainly — while the site itself already ranks them (the
 * order is not chronological). This band makes that implicit ranking
 * explicit: a featured review in the 3-square, a second in the 2-square, one
 * category score and the "Show all" call to action in the 1-squares. Trims,
 * stated: six reviews → two, seven category columns → one, chips dropped.
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
  const [r1, r2] = listing.reviews;
  return (
    <Band
      id="reviews"
      title={listing.labels.reviews}
      hideTitle
      note={`from=1 to=${to} · placement="${placement}" · clockwise=false · hero ${mobile ? "top (2:3 portrait)" : "left"} · six reviews → ${desktop ? "two" : "one"}, seven categories → one`}
      cap="60rem"
    >
      <GoldenGrid from={1} to={to} placement={placement} clockwise={false}>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">{listing.score}</span>
            <span className="score__label">{listing.badge}</span>
            <span className="score__sub">{listing.badgeBlurb}, according to {listing.reviewCount} guests</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy review">
            <p>“{featuredReview[viewport]}”</p>
            <div className="review__who"><img className="avatar" src={avatars[0].src} alt="" /><span><strong>{r1.name}</strong>, {r1.city} · {r1.when} · {r1.stay}</span></div>
          </div>
        </GoldenBox>
        {desktop && (
          <GoldenBox>
            <div className="copy review">
              <p>“{secondReview}”</p>
              <div className="review__who"><img className="avatar" src={avatars[1].src} alt="" /><span><strong>{r2.name}</strong>, {r2.city} · {r2.when}</span></div>
            </div>
          </GoldenBox>
        )}
        {!mobile && (
          <GoldenBox>
            <div className="copy score score--category">
              <span className="score__n">{listing.categories[0].score}</span>
              <span className="score__sub">{listing.categories[0].label}</span>
            </div>
          </GoldenBox>
        )}
        <GoldenBox>
          <div className="copy copy--center"><p><button type="button" className="btn btn--chip">{listing.cta.showReviews} {listing.reviewCount} reviews</button></p></div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
