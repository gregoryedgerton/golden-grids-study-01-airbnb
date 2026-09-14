import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { placeholderImage } from "../lib/placeholder";
import { Band } from "./Band";

const avatar = placeholderImage("HOST", 400, 400, 20);

const BIO = {
  mobile: "[Host bio, 30 words. Who they are, why they host, and one sentence a guest would remember.]",
  tablet: "[Host bio, 50 words. Who they are, where they are from, why they host, what they are proud of, and one sentence a guest would remember. Fifty words is what the 514px hero holds at 820.]",
  desktop: "[Host bio, 80 words. Who they are, where they are from, why they host, what they are proud of, what they do when they are not hosting, and one sentence a guest would remember. Eighty words is what the reference's own bio runs to and what the 597px hero holds under the 56rem cap; the real bio arrives against this count and keeps its own voice.]",
} as const;

/**
 * Band 9 — Meet your host. The reference: an elevated host card (avatar,
 * name, Superhost, 159 / 4.99 / 2 years in large numerals) left; two
 * personal facts, the bio, a Superhost explainer, "Host details" (response
 * rate and time) and "Message host" right; a payment-protection notice
 * below. At 390 it is the tallest block on the page.
 *
 * Here the bio takes the hero on the RIGHT (bottom ccw) — the card is the
 * reference's visual lead, and demoting it to a 1-square is a stated cost.
 * The card 1-square carries avatar, name, Superhost, the three numerals and
 * the two personal facts; the other 1-square carries the host details and
 * the call to action, as the reference's right column does. The Superhost
 * explainer and the payment notice are dropped (README). At 390 the band is
 * one `single` box holding the whole card, laid out by plain CSS.
 */
export function HostBand() {
  const viewport = useViewport();
  const single = viewport === "mobile";
  return (
    <Band id="host" title="Meet your host" note={single ? "from=1 to=1 · single · card, bio, details and CTA in one box" : 'from=1 to=3 · placement="bottom" · clockwise=false · hero right · card demoted to a 1-square'} cap="56rem">
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
            {single && (
              <>
                <p className="score__sub">[Response rate 100% · Responds within an hour]</p>
                <p><button type="button" className="btn">[Message host]</button></p>
              </>
            )}
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy card">
            <img className="avatar" src={avatar.src} alt="" />
            <span className="card__name">[Host name]</span>
            <span className="score__sub">[Superhost]</span>
            <span className="card__stats"><span>[159 reviews]</span><span>[4.99 ★]</span><span>[2 years]</span></span>
            <span className="score__sub">[Personal fact one · 4 words] · [Personal fact two · 5 words]</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center rules">
            <h4>[Host details]</h4>
            <p style={{ margin: "0.25em 0 0.75em" }}>[Response rate 100%]<br />[Responds within an hour]</p>
            <p style={{ margin: 0 }}><button type="button" className="btn">[Message host]</button></p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
