import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const reviewer1 = placeholderImage("R1", 200, 200, 300);
const reviewer2 = placeholderImage("R2", 200, 200, 120);

const FEATURED = {
  desktop: "[Featured review, 60 words. The one review that decides a booking, given the room it needs: what the guest came for, what surprised them, what they would say to a friend. Sixty words is what this hero holds at 1440, and the real review is chosen against that count rather than trimmed to fit it.]",
  tablet: "[Featured review, 45 words. The one review that decides a booking, given the room it needs: what the guest came for, what surprised them, what they would tell a friend. Forty-five words at this width.]",
  mobile: "[Featured review, 30 words. What the guest came for, what surprised them, what they would tell a friend. Thirty words at this width.]",
} as const;

/**
 * Band 6 — Reviews. The reference gives this section more vertical space
 * than anything except the gallery: a laurelled 4.99 with "Guest favorite",
 * six category ratings in a row, review chips, six reviews in two columns,
 * "Show all 159 reviews". Every one of those rows is full width and equal.
 *
 * Here: a featured review in the hero, the score in the 3-square, a second
 * review in the 2-square, two of the six category ratings in the 1-squares.
 * Hero LEFT at every width; the range shrinks 5 → 4 → 3 with placement
 * rotated in lockstep (bottom ccw / right ccw / top ccw). Word count per
 * width. At 390 there is no 2-square, so the second review is omitted
 * rather than squeezed into a 122px box; the score and one category rating
 * take the 1-squares. The brief called this band "small and deliberately restrained";
 * the live page disagrees, and the live page wins — see README.
 */
export function ReviewsBand() {
  const viewport = useViewport();
  const [to, placement] = pick<readonly [number, PlacementValue]>(viewport, {
    mobile: [3, "top"],
    tablet: [4, "right"],
    desktop: [5, "bottom"],
  });
  return (
    <Band id="reviews" title="Reviews" note={`from=1 to=${to} · placement="${placement}" · clockwise=false · hero left`} cap="60rem">
      <GoldenGrid from={1} to={to} placement={placement} clockwise={false}>
        <GoldenBox>
          <div className="copy review">
            <p>“{FEATURED[viewport]}”</p>
            <div className="review__who"><img className="avatar" src={reviewer1.src} alt="" /><span>[Name, City] · [Month Year] · [Stayed a few nights]</span></div>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">4.99</span>
            <span className="score__label">[Guest favorite]</span>
            <span className="score__sub">[One of the most loved homes on Airbnb — 12 words]</span>
            <button type="button" className="btn">[Show all 159 reviews]</button>
          </div>
        </GoldenBox>
        {viewport !== "mobile" && (
        <GoldenBox>
          <div className="copy review">
            <p>“[Second review, 25 words. Shorter, a different guest, a different reason to book. Twenty-five words is what the 2-square holds.]”</p>
            <div className="review__who"><img className="avatar" src={reviewer2.src} alt="" /><span>[Name, City] · [Month Year]</span></div>
          </div>
        </GoldenBox>
        )}
        <GoldenBox>
          <div className="copy score">
            <span className="score__n" style={{ fontSize: "clamp(1rem, 26cqw, 3rem)" }}>5.0</span>
            <span className="score__sub">[Cleanliness]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n" style={{ fontSize: "clamp(1rem, 26cqw, 3rem)" }}>4.9</span>
            <span className="score__sub">[Location]</span>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
