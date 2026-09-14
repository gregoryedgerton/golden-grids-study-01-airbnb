import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { assets } from "../assets";
import { listing, hostBio } from "../content";
import { Band } from "./Band";

const avatar = assets.hosts;

/**
 * Band 9 — Your host. The reference: an elevated host card (avatar, name,
 * badge, three numerals) left; two personal facts, the bio, a badge
 * explainer, host details (response rate and time) and a message button
 * right; a payment notice below. At 390 it is the tallest block on the page.
 *
 * Here the bio takes the hero on the RIGHT (bottom ccw) — the card is the
 * reference's visual lead, and demoting it to a 1-square is a stated cost.
 * The card 1-square carries avatar, name, badge and the three numerals; the
 * other 1-square carries the host details and the call to action, as the
 * reference's right column does. At 390 the band is one `single` box holding
 * the whole card, laid out by plain CSS.
 */
export function HostBand() {
  const viewport = useViewport();
  const single = viewport === "mobile";
  const h = listing.host;
  return (
    <Band id="host" title={listing.labels.host} note={single ? "from=1 to=1 · single · card, bio, details and CTA in one box" : 'from=1 to=3 · placement="bottom" · clockwise=false · hero right · card demoted to a 1-square'} cap="56rem">
      <GoldenGrid from={1} to={single ? 1 : 3} placement="bottom" clockwise={false}>
        <GoldenBox>
          <div className="copy copy--prose">
            {single && (
              <>
                <span className="card__name card__name--inline">{h.name}</span>
                <div className="review__who" style={{ marginBottom: 16 }}>
                  <img className="avatar" src={avatar.src} alt="" />
                  <span>{h.tag} · {listing.reviewCount} reviews · {listing.score} · {h.years} years</span>
                </div>
              </>
            )}
            <p>{hostBio[viewport]}</p>
            {single && <p><button type="button" className="btn">{listing.cta.message}</button></p>}
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy">
            <div className="card">
              <img className="avatar" src={avatar.src} alt="" />
              <span className="card__name">{h.name}</span>
              <span className="score__sub">{h.tag}</span>
              <span className="card__stats"><span>{listing.reviewCount}<small>reviews</small></span><span>{listing.score} ★<small>rating</small></span><span>{h.years}<small>years hosting</small></span></span>
            </div>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy copy--center rules">
            <h4>Host details</h4>
            <p style={{ margin: "0 0 12px" }}>Response rate {h.responseRate}<br />Responds {h.responseTime}</p>
            <p style={{ margin: 0 }}><button type="button" className="btn btn--chip">{listing.cta.message}</button></p>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
