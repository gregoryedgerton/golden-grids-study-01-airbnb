import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { assets } from "../assets";
import { listing } from "../content";
import { Band } from "./Band";

const avatar = assets.hosts;

/**
 * Band 2 — About this place. The reference's first text block: the summary
 * line, the capacity line, the top-rated badge with its score and review
 * count, and the host row. Four stacked full-width rows of equal weight.
 *
 * THE HONEST RISK, named in the brief. Score, review count, capacity and
 * host are peers; the reference draws score and count as typographic equals
 * inside one bordered card. Fibonacci insists one box dominates. The choice
 * made here: the booking-deciding facts (what it is, where, how many it
 * sleeps) take the hero; the score takes the 2-square; review count and
 * host share the 1-squares. Whether that reads as forced is for the writeup
 * to say, not for smaller type to hide. Lines are the reference's own: 1px
 * #dddddd, the border of its rating card.
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
      title={listing.labels.facts}
      hideTitle
      note={mobile ? 'from=1 to=3 · placement="top" · clockwise=true · hero right · host merged into hero' : 'from=1 to=4 · placement="right" · clockwise=false · hero left'}
      cap="48rem"
      card
    >
      <GoldenGrid from={1} to={mobile ? 3 : 4} placement={mobile ? "top" : "right"} clockwise={mobile} outline="1px solid var(--line)">
        <GoldenBox>
          <div className="copy copy--center facts">
            <strong>{listing.summary}</strong>
            <span>{listing.capacity.join(" · ")}</span>
            {mobile && <p className="host-line">Hosted by {listing.host.name}<small>{listing.host.tag} · {listing.host.years} years hosting</small></p>}
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">{listing.score}</span>
            <span className="score__label">{listing.badge}</span>
            <span className="score__sub score__sub--blurb">{listing.badgeBlurb}</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <span className="score__n">{listing.reviewCount}</span>
            <span className="score__sub score__sub--count">reviews</span>
          </div>
        </GoldenBox>
        <GoldenBox>
          <div className="copy score">
            <img className="avatar" src={avatar.src} alt="" />
            <span className="host-line">Hosted by {listing.host.name}<small>{listing.host.tag} · {listing.host.years} years hosting</small></span>
          </div>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
