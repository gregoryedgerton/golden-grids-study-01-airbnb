import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const avatar = placeholderImage("HOST", 400, 400, 20);

const BIO = {
  desktop: "[Host bio, 60 words. Who they are, where they are from, why they host, what they are proud of, and one sentence a guest would remember. Sixty words is what the hero holds at 1440 under the 56rem cap; the real bio arrives against this count and keeps its own voice.]",
  tablet: "[Host bio, 45 words. Who they are, where they are from, why they host, what they are proud of, and one sentence a guest would remember. Forty-five words at this width.]",
  mobile: "[Host bio, 30 words. Who they are, why they host, and one sentence a guest would remember.]",
} as const;

/**
 * Band 8 — Meet your host. The reference: a host card (avatar, name,
 * Superhost, 159 reviews, 4.99, 2 years) on the left, bio and "Message host"
 * on the right, then "Host details" (response rate and time).
 *
 * Here: bio in the hero (bottom · ccw puts it on the right), the card and
 * the call to action in the 1-squares. At 390 the band collapses to one
 * `single` box that holds the whole card laid out by plain CSS — a single
 * box ignores later children, so everything moves into the first.
 */
export function HostBand() {
  const viewport = useViewport();
  const single = viewport === "mobile";
  return (
    <Band id="host" title="Meet your host" note={single ? "from=1 to=1 · single · card and bio in one box" : 'from=1 to=3 · placement="bottom" · clockwise=false · hero right'} cap="56rem">
      <GoldenGrid from={1} to={single ? 1 : 3} placement="bottom" clockwise={false}>
        <GoldenBox style={{ background: "rgba(127, 127, 127, 0.12)" }}>
          <div className="copy copy--prose">
            {single && (
              <div className="review__who" style={{ marginBottom: "0.5em" }}>
                <img className="avatar" src={avatar.src} alt="" />
                <span><strong>[Host name]</strong> · [Superhost] · [159 reviews · 4.99 · 2 years]</span>
              </div>
            )}
            <p>{BIO[viewport]}</p>
            <p className="score__sub">[Response rate 100% · Responds within an hour]</p>
            {single && <p><button type="button" className="btn">[Message host]</button></p>}
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy card">
            <img className="avatar" src={avatar.src} alt="" />
            <span className="card__name">[Host name]</span>
            <span className="card__stats"><span>[159 reviews]</span><span>[4.99 ★]</span><span>[2 years]</span></span>
            <span className="score__sub">[Superhost]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center"><p><button type="button" className="btn">[Message host]</button></p></div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
