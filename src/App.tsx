import { useViewport } from "./lib/viewport";
import { listing } from "./content";
import { GalleryBand } from "./bands/GalleryBand";
import { FactsBand } from "./bands/FactsBand";
import { BookBand } from "./bands/BookBand";
import { AboutBand } from "./bands/AboutBand";
import { AmenitiesBand } from "./bands/AmenitiesBand";
import { DatesBand } from "./bands/DatesBand";
import { ReviewsBand } from "./bands/ReviewsBand";
import { LocationBand } from "./bands/LocationBand";
import { HostBand } from "./bands/HostBand";
import { ThingsBand } from "./bands/ThingsBand";

/**
 * Study 01 — an Airbnb listing page, rebuilt as a stack of golden bands.
 *
 * Reference: https://www.airbnb.com/rooms/1364092196011014873 (captured
 * 2026-09-13 at 390 / 820 / 1440; see captures/). The block order below is
 * the reference's order. Airbnb renders the body as a two-column grid with a
 * sticky booking card; here every block is a full-width band and the booking
 * card is a band of its own, in the position the card first appears.
 *
 * Copy is original (src/content.ts), written for a fictional listing at the
 * word counts the asset spec asks for. Images are still placeholders at the
 * resolutions the spec asks for.
 */
export function App() {
  const viewport = useViewport();

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <header className="masthead">
        <p className="masthead__kicker">Layout study 01 · unaffiliated · original assets</p>
        <h1>{listing.title}</h1>
        <p className="masthead__claim">
          Listing pages already have a golden hierarchy. The twelve-column grid flattens it below the fold.
        </p>
        <p className="masthead__viewport" aria-live="polite">
          viewport: <code>{viewport}</code>
        </p>
      </header>

      <main id="content">
        <GalleryBand />
        <FactsBand />
        <BookBand />
        <AboutBand />
        <AmenitiesBand />
        <DatesBand />
        <ReviewsBand />
        <LocationBand />
        <HostBand />
        <ThingsBand />
      </main>

      <footer className="colophon">
        <p>
          An unaffiliated layout study of an{" "}
          <a href="https://www.airbnb.com/rooms/1364092196011014873">Airbnb listing page</a>. All
          imagery and copy are original; nothing from Airbnb or the listing is reproduced. Built with{" "}
          <a href="https://github.com/gregoryedgerton/golden-grids">Golden Grids</a> ·{" "}
          <a href="https://www.npmjs.com/package/@gifcommit/golden-grids">npm</a> ·{" "}
          <a href="https://gregoryedgerton.github.io/golden-grids/">generator</a> ·{" "}
          <a href="https://github.com/gregoryedgerton/golden-grids-study-01-airbnb">source</a>.
        </p>
      </footer>
    </>
  );
}
