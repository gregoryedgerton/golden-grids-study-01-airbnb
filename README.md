# Layout study 01 — an Airbnb listing page

**Live:** https://gregoryedgerton.github.io/golden-grids-study-01-airbnb/

An unaffiliated layout study. It rebuilds the structure of a named page using
stacked golden grids, so the comparison is between two ways of laying out the
same content hierarchy. All imagery and copy here are original. Nothing from
Airbnb or the listing — photography, wordmarks, marketing copy — is reproduced.

Built with [Golden Grids](https://github.com/gregoryedgerton/golden-grids)
([npm](https://www.npmjs.com/package/@gifcommit/golden-grids) ·
[generator](https://gregoryedgerton.github.io/golden-grids/)), from the
[study template](https://github.com/gregoryedgerton/golden-grids-study-template).

> **Status: pass two complete.** Structure, visual register, original copy
> and original images. The listing is fictional: a 1991 Pizza Hut in
> Catskill, New York, converted into a two-bedroom stay that kept the hut
> roof, the trapezoid windows, the red lamps, the booths, the salad bar and
> the red tumblers. Copy is `src/content.ts`; the twelve images in
> `public/assets/` were produced against the shot list in
> [`ASSETS.md`](ASSETS.md) and are mapped to slots in `src/assets.ts`.
> Remaining: the written post.

---

## Reference

**Page:** a single-property listing on airbnb.com — "Luxury Catskills A-Frame
Cabin | Hot Tub & Sauna", Saugerties, New York.
https://www.airbnb.com/rooms/1364092196011014873

**Captured:** 2026-09-13, signed out, no dates selected, at 390 / 820 / 1440,
full page. The captures are in [`captures/`](captures/) and are the left half
of every side-by-side. They are commentary on a named page; nothing from them
is used as an asset.

| Width  | Reference                         | Rebuild                       |
| ------ | --------------------------------- | ----------------------------- |
| 390px  | ![](captures/reference-390.png)   | ![](captures/study-390.png)   |
| 820px  | ![](captures/reference-820.png)   | ![](captures/study-820.png)   |
| 1440px | ![](captures/reference-1440.png)  | ![](captures/study-1440.png)  |

## The claim

Listing pages already have a golden hierarchy — one hero photograph, a few
supporting shots, then a descending tail of facts, prose, amenities, reviews,
map, host — and the twelve-column grid flattens that descent into equal-weight
full-width rows the moment the gallery ends.

## Structural inventory

Derived from the captures, not from memory. Where the brief in
`docs/program/STUDY-BRIEF.md` disagreed with the live page, the live page won;
the differences are listed after the table.

| # | Block (reference order) | 1440 | 820 | 390 |
| - | --- | --- | --- | --- |
| 1 | Site header | full-width nav | same | icon bar |
| 2 | Title | h1 + Share/Save | same | h1 over photo |
| 3 | Photo mosaic | 1 hero left (≈ half) + 2×2 supporting right, "Show all photos" | hero + 2 supporting | one-photo carousel, full width |
| 4 | Summary + capacity | "Entire cabin in …" and "4 guests · 2 bedrooms · 2 beds · 2 baths", left column | same | full width |
| 5 | Guest favorite badge | badge · 4.99 · 159 reviews in one row | same | same |
| 6 | Host row | avatar, "Hosted by …", Superhost · 2 years | same | same |
| 7 | Booking card | sticky right column: "Add dates for prices", check-in, checkout, guests, Check availability | sticky right, narrower | sticky bottom bar |
| 8 | Highlights | four icon rows, each a bold title and a one-line explainer | same | same |
| 9 | Description | prose + Show more | same | same |
| 10 | Where you'll sleep | two bedroom cards | same | two cards, side by side |
| 11 | Amenities | ten in two columns + "Show all 69" | one column | one column |
| 12 | Select check-in date | its own headed section: two months side by side, "Clear dates" | two months | one month, below the map |
| 13 | Reviews | laurelled 4.99, six category ratings, review chips, six reviews in two columns, "Show all 159" | one column | horizontal carousel |
| 14 | Map | full width ≈ 16:9, town line, "Exact location provided after booking" | same | same, above the date picker |
| 15 | Meet your host | host card left, bio + Message host right, host details | same | stacked |
| 16 | Things to know | three columns | three columns | stacked |
| 17 | Explore other options | link farm | same | same |
| 18 | Footer | link columns | same | stacked |

Everything below the mosaic is a left column of equal-weight rows beside a
sticky card, then a run of full-width rows. Relative weight is carried by
vertical space alone; the reviews section takes more of it than anything but
the gallery.

**What changed from the brief:**

- **No price without dates.** The brief's facts band assumed "price and
  capacity". Signed out with no dates, the live page shows "Add dates for
  prices" in the booking card and no nightly rate anywhere. The peer-facts
  risk is real but the peers are rating, review count, capacity, and host.
- **Reviews are not "small and deliberately restrained".** The live page gives
  them the largest text section on the page, with a laurelled score. The
  study gives reviews a full band with the score in the 3-square, and says so.
- **The booking card is a block, not a sidebar.** In a stack of full-width
  bands it becomes a band of its own, placed where the card first appears.
- **Mobile drops the mosaic for a carousel.** The study keeps a three-box
  descent at 390 instead. That is a structural claim in itself: the hierarchy
  survives at phone width without a carousel.
- **Omitted, deliberately:** the site header, breadcrumb, "Explore other
  options" link block and footer link columns (chrome, not the listing); the
  "Report this listing" link and the payment-protection notice (boilerplate);
  the "Guest reviews mention" chip row and six of the seven review category
  columns (the reviews band keeps the score, two reviews, one category and
  the "Show all 159" call to action — trims stated in the band); the
  highlight explainers (titles only, four of them); the Superhost explainer
  and the host's two personal facts' icons.
- **Weight changes, deliberately:** the reference gallery is two-level — the
  hero equals the sum of its four equal supports — and the spiral turns the
  four equals into a descent. The two bedroom cards stay equals (adjacent
  1-squares). The host card, the reference's visual lead in its section, is
  demoted to a 1-square beside the bio hero.

## Visual register

The structure is the argument, so everything that is not structure is held
constant: the rebuild uses the reference's own palette, type sizes, spacing
and line weights, measured from the live page's computed styles on
2026-09-13 (`captures/tokens.cjs` → `captures/reference-tokens.json`). A
side-by-side then differs only in the grid.

| Token | Reference (measured) | Rebuild |
| --- | --- | --- |
| Face | Airbnb Cereal VF, falling back to Circular, -apple-system, system-ui, Roboto, Helvetica Neue | the same fallback stack; Cereal is proprietary and is not shipped |
| Body text | 14px/18px 400, `#222222` | same |
| Secondary text | `#6c6c6c`; tertiary `#b0b0b0`; field borders `#8c8c8c` | same |
| Prose, reviews | 16px/24px 400; 14px/20px at 390 | same |
| Section heading | 22px/26px 500, −0.44em tracking; 600 at 390 | same |
| Page title | 26px/30px 500 | same |
| Badge card | score, label and count all 22px/26px 500 −0.44px; the count's word 12px/16px 500; the blurb 16px/20px 500 | same; 18px/24px 500 below 1100 |
| Laurelled score | 100px 500; 72px and its label 26px/30px 600 at 390 | same |
| Category cell | score and label both 12px/16px 500 `#222` | same |
| Bed captions | 16px/20px 500 over 14px/18px 400 muted | same |
| Rules, host details | headings 14px/18px 500 (18px/24px for "Host details"); lines 14px/18px 400 muted | same |
| Calendar | month 16px/20px 500; weekday letters 12px/16px 500 muted; days 14px | same |
| Price prompt | 22px 500 at desktop, 16px 700 at 390 | same |
| **Radius scale** | 8px images and 32px chips · 12px cards and buttons · 16px topic chips · 24px host card · 50% avatars | same tokens |
| Card edge | 1px solid `#dddddd`, 12px radius, 22–26px padding (the rating card) | every slot in a `cards` band |
| Booking card | 12px radius, 1px `#dddddd`, `0 6px 16px rgba(0,0,0,.12)`, 24px padding | same |
| Form fields | one group, 12px on the outer corners only, 1px `#8c8c8c` throughout, internal dividers | same |
| Host card | 24px radius, no border, `0 0 0 1px rgba(0,0,0,.02), 0 6px 16px rgba(0,0,0,.12)`, 24px 16px padding (32px 24px at 390), 88px avatar | same |
| Topic chip | 16px radius, 1px `#f2f2f2`, `0 4px 20px rgba(0,0,0,.07)`, 12px 18px 12px 14px, 14px/500 (12px at 390) | same |
| Primary button | rausch gradient `#e61e4d → #d70466`, white, 999px pill, 14px 24px, 16px/500 | same |
| Secondary button | `#f2f2f2`, `#222222`, 12px radius, 14px 24px, 16px/500; a 32px 12px/500 chip variant at 8px radius | same |
| Photo mosaic | 8px gutters, 12px corners on the whole mosaic, square corners on each photo | same; 8px corners on photographs outside the mosaic |
| Dividers | 1px solid `#dddddd`, sections 48px apart (32px at 390) | same, one per band |
| Content column | 1120px at 1440 (160px margins); 342px at 390 (24px) | `min(100% − 2·gutter, 1120px)` |
| Colour scheme | light only | light only |

**The grid is not a grid.** The reference never draws a continuous set of
shared square edges; it draws rounded cards separated by white. The study
therefore does not use the library's `outline` prop anywhere. Instead a band
marked `cards` gives every slot the reference's card: inset 4px inside its
slot, 1px `#dddddd`, 12px radius. The spiral still decides the geometry; the
cards just stop pretending to be a table.

Things the reference has that the rebuild deliberately does not: the site
header, the rausch wordmark, icons in the amenity and highlight lists (the
icon set is Airbnb's), and the laurels around the score.

## Bands

A study is a short vertical stack of bands. Each band is one small-range
`GoldenGrid` with one editorial job. Bands stack; they never nest.

| Band | Range at 390 / 820 / 1440 | `placement` · `clockwise` | Editorial job | Responsive lever |
| --- | --- | --- | --- | --- |
| 1 Gallery | 1–3 / 1–5 / 1–5 | bottom / top / top · cw (hero left) | hero photograph and four supporting shots, the reference's full mosaic at 820 and 1440; a three-box descent replaces the carousel at 390 | shrink range with placement rotated; cap 64rem so gallery and facts share the first screen |
| 2 Facts | 1–3 / 1–4 / 1–4 | top cw / right ccw / right ccw | summary and capacity, score with its blurb, review count, host row — the named honest risk | rotate placement; merge host into hero at 390; cap 48rem |
| 3 Book | 1–1 / 1–2 / 1–2 | left · cw | the booking card: form left, call to action right (the mobile bar's order) | collapse to single with the CTA merged; cap 40rem |
| 4 About | 1–4 at all | bottom / left / left · cw | description in the hero, four highlight titles in the 2-square, the two bedrooms as adjacent equal 1-squares | rotate placement; word count per width; cap 60rem |
| 5 Amenities | 1–3 / 3–4 / 3–4 | top · cw | 10 / 5 / 5 amenities in one slot, the hot tub as an image tile, "Show all 69" in the placeholder strip | open `from` at 390; cap 60rem |
| 6 Dates | 1–1 / 1–2 / 1–2 | left · cw | the date picker: two months as a peer pair, one at 390 | collapse to single; cap 48rem |
| 7 Reviews | 1–3 / 1–4 / 1–5 | right ccw (2:3) / right ccw / bottom ccw | score in the hero at every width; featured review, second review (1440 only), one category, "Show all 159" — makes Airbnb's implicit ranking explicit | shrink range; portrait at 390; children trimmed per width; cap 60rem |
| 8 Location | 1–3 at all | right ccw (2:3) / top ccw / top ccw | map hero (left at 820/1440, full-width on top at 390), town line and note, the location highlight | portrait at 390; cap 56rem |
| 9 Host | 1–1 / 1–3 / 1–3 | bottom · ccw | bio hero right, host card and host details in the 1-squares | collapse to single at 390; cap 56rem |
| 10 Things to know | none / 1–3 / 1–3 | top · ccw | house rules hero left, cancellation and safety in the 1-squares — flat content, kept as a band so the failure is visible | plain three-row list at 390 (no grid); cap 48rem |

Breakpoints live in one place, [`src/lib/viewport.ts`](src/lib/viewport.ts).
Each band picks its own range, placement, and children from the viewport; no
band carries a media query. Every band is width-capped (40–64rem) because
height follows width. Hero sides down the page at 1440: left, left, pair,
right, right, pair, left, left, right, left.

## Asset spec

The handoff artifact. Pass one ends here: structure built, every slot
inventoried. Pass two fills these slots with original assets. No slot is
filled with invented content and called done.

Media fills its slot with `object-fit: cover`. The slot owns the crop, so no
aspect ratio is specified — only resolution, subject placement, and what must
survive the crop at all three widths. The largest rendered size of each slot
is listed so sources are never upscaled.

### Images

| Slot | Band | Role | Largest render (px) | Min. source | Subject placement | Safe area |
| --- | --- | --- | --- | --- | --- | --- |
| Hero exterior | 1 | the shot that sells the place: the hut from outside at dusk, roof and windows | 640×640 (1440), 482×482 (820), 244×244 (390) | 1600×1067, any shape | subject centred-upper; `object-position: 50% 42%` | the building and its immediate ground; the slot is square at every width, so the outer thirds of a 3:2 source are lost at every width |
| Supporting 1 | 1 | the dining room as living room: booths, lamps, jukebox | 384×384 (1440), 289×289 (820), 122×122 (390) | 1200×800 | centre | centre 60% |
| Supporting 2 | 1 | the arcade corner | 256×256 (1440), 193×193 (820), 122×122 (390) | 1000×1000 | centre | centre 60% |
| Supporting 3 | 1 | the main bedroom | 170×170 (1440), 96×96 (820) | 1200×900 | centre | centre 50% |
| Supporting 4 | 1 | the kitchen on the old line, wood oven | 170×170 (1440), 96×96 (820) | 1200×800 | centre | centre 50% |
| Salad bar tile | 5 | the amenity the listing singles out | 384×384 (1440), 308×308 (820), 122×122 (390) | 1000×1000 | tub centred-low; `object-position: 50% 55%` | the tub |
| Host avatar | 2, 9 | the host, square crop | 128×128 | 400×400 | face centred | face |
| Bedroom 1, Bedroom 2 | 4 | the two bedrooms, equal | 192×192 (1440), 154×154 (820), 122×122 (390) | 1000×1000 each | bed centred | the bed |
| Reviewer avatars ×2 | 7 | reviewers | 64×64 | 200×200 | face centred | face |
| Map | 8 | a drawn map of Catskill's old strip, not a tile service (licensing, and a drawn map reads at 244px) | 597×597 (1440), 514×514 (820), 366×366 (390) | 1400×1400 | the property marker centred | marker and the two nearest labels |

### Copy

Word counts are what the slot holds at each width. Where a slot holds
different counts per width, three versions are needed.

| Slot | Band | Role | Words at 390 / 820 / 1440 |
| --- | --- | --- | --- |
| Title | masthead | listing title | 9 |
| Summary line | 2 | "Entire cabin in Town, State" | 6 |
| Capacity line | 2 | guests · bedrooms · beds · baths | 4 items |
| Score + badge + blurb | 2, 7 | score to two decimals, "Guest favorite", "One of the most loved homes on Airbnb, according to guests" | 1 number + 2 words + 10–12 words |
| Review count | 2, 7 | integer | 1 |
| Host line | 2, 9 | name · Superhost · years hosting | 8 |
| Booking note | 3 | "Add dates for prices", "You won't be charged yet" | 4 + 6 |
| Highlights | 4 | four titles, no explainers | 4 × 4–5 |
| Description | 4 | prose, with Show more | 40 / 60 / 90 |
| Bedroom captions | 4 | "Bedroom 1 · 1 queen bed" | 2 × 5 |
| Amenities | 5 | the reference's own counts, plus the total | 5 / 5 / 10 items + "Show all 69" |
| Salad bar caption | 5 | "Salad bar · stocked for breakfast" | 5 |
| Month names | 6 | two months at 820/1440, one at 390 | 2 |
| Featured review | 7 | the review that decides a booking | 20 / 40 / 50 |
| Second review | 7 | a different guest, a different reason | – / – / 25 |
| Reviewer lines | 7 | name, city, month | 2 × 6 |
| Category rating | 7 | one of six: label + score | 2 |
| Town line + note | 8 | "Town, State, Country"; "Exact location provided after booking" | 3 + 6 |
| Location highlight | 8 | the reference's own line: where it is, what it is near | 6 + 12 |
| Host bio | 9 | the host in their own voice | 30 / 50 / 80 |
| Host card | 9 | Superhost; reviews · rating · years; two personal facts | 1 + 3 + (4 + 5) |
| Host details | 9 | response rate and time | 8 |
| House rules | 10 | heading + four lines | 4 × 5 |
| Cancellation | 10 | heading + one line | 8 |
| Safety | 10 | heading + two lines | 2 × 5 |

## What worked

Pass-one observations; revised after real assets land.

- **The gallery.** The 1+4 mosaic is already a golden descent and the library
  renders it without adjustment. Airbnb needs 1:1 and 3:2 sources; here the
  slots crop and only the subject placement is specified.
- **Lockstep rotation.** Shrinking the gallery and reviews bands from five
  boxes to three while rotating placement one step per box keeps the hero on
  the left and the band landscape at every width. The tablet state is a real
  layout, not a squeezed desktop.
- **The placeholder strip as a slot.** The "Show all 69 amenities" call to
  action sits in the skipped-range placeholder, which turns the API's oddest
  feature into the natural home for a call to action.
- **Collapse to single.** The booking card and the host card become one box
  at 390 with their contents merged, which is closer to Airbnb's own mobile
  treatment than a shrunken grid would be.
- **Expand a cell.** Content a slot cannot hold is the obvious objection to
  fixed-proportion boxes. Letting the slot grow over its band answers it
  without a modal, and the four places it is needed are exactly the four the
  reference puts behind a "Show all".

## What did not

- **The facts band is forced.** Rating, review count, capacity and host are
  peers; the reference draws score and count as typographic equals inside
  one bordered card. Putting the summary and capacity in the hero and the
  score in the 2-square asserts a hierarchy the content does not have, and
  the 2:1 split of that card is the exact place the risk bites. It reads as
  a decision, not a discovery. Type sizes are left as designed so the
  failure, if it is one, is visible. The alternative — a 1–2 pair for score
  and count with the summary outside the grid — is the honest fallback and
  may replace it in pass two.
- **The booking card no longer sticks.** Airbnb keeps it dominant at every
  scroll position; here it scrolls away. That is a cost of stacking, not of
  the spiral, and at 390 a 366px square stands in for a ~110px bar because
  there is no smaller single box.
- **Things to know is flat.** Three equal columns forced into a 3:2 band with
  the house rules dominant. At 390 the study gives up and renders the plain
  three-row list the reference uses; at 820 and 1440 the band is kept so the
  failure is visible.
- **Reviews are trimmed hard.** Six reviews to two, seven category columns
  to one, the chip row dropped. The band makes the reference's implicit
  ranking explicit, and pays for it in coverage.
- **Tall bands.** Uncapped, seven of nine bands would be 800–900px tall at
  1440. Width caps keep them at 560–600px, but the page is still longer than
  the reference's two-column body, which packs the left column beside the
  booking card. Stacking costs vertical space; the reference's grid spends it
  on equal rows instead.
- **The map is square.** A map has no composition to lose, but 16:9 shows
  more of the neighbourhood than 1:1 does. Cost of the slot owning the crop.

## Interactions: expand a cell

Four calls to action work, and all four do the same thing: the slot that
showed the summary becomes the whole band and shows the rest. The band grows
to fit it and everything below moves down — nothing scrolls inside a box.
The reference reaches for a modal; here the spiral's slot becomes the page.

| Trigger | Cell that expands | Shows |
| --- | --- | --- |
| Photos · "Show all photos" | the hero photograph | all eight photographs with captions |
| Sleeping arrangements · "Show more" | the description | the full description and the four highlights |
| Amenities · "Show all 47 amenities" (in the placeholder strip) | the list | all 47, in five groups |
| Reviews · "Show all 188 reviews" (in a 1-square) | the score | six reviews, and says it is six of 188 |

Mechanics, in [`src/lib/expand.tsx`](src/lib/expand.tsx) and `expand.css`:
the `GoldenBox` owning the summary gets `cell--expanded`, and `:has()` rules
release the grid's fixed proportion, take the sibling slots and the replaced
summary out of the flow, and return the expanded slot to normal flow, where
its content sets the height. The library is not touched; its inline geometry
is overridden only for the duration.

What the overlay implies, and therefore does:

- Everything the panel covers is `inert` while it is open — the summary
  beside it, the trigger under it, every sibling slot — so nothing
  underneath can be tabbed to or read.
- Escape closes only the panel that contains focus. A form field elsewhere
  on the page keeps its own Escape.
- One cell at a time: opening one closes any other.
- Focus moves to the close control on every mount, so a breakpoint change
  that remounts the panel in a different slot does not drop focus; on close
  it returns to the trigger.
- The panel has no scroll container: the band's height is the panel's
  height, so the page scrolls as one. The panel's header is sticky, so the
  close control stays reachable in a tall panel.
- Nothing animates. The content moving is the feedback.

Content for the expanded views is in `src/content.ts`, which is also the
single source for the counts: the ten amenities in the band are a strict
subset of the 47 in the panel, the two reviews in the band are the first two
of the six, and the photo count is the length of the photo set.

## Study tools

A floating panel (top right, its own stacking layer, styled independently of
the study) carries controls that every study shares:

- **Show grids** (`g`) — marching-ants outline on every grid, a dotted edge
  and a DOM-order label on every slot, the placeholder in magenta with a P.
- **Band notes** (`n`) — the per-band `from` / `to` / `placement` readouts.

Both are off by default so the page reads as the reference does.
[`captures/inspect-1440.png`](captures/inspect-1440.png) is the page with both on. Toggles
persist per browser; `?inspect=1&notes=1` turns them on for one load, which
is how overlay captures are taken. The panel lives in `src/lib/tools.tsx` and
`tools.css`; new controls go in there, not in the study's own stylesheet.

## Running it

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`. The library is consumed from
the npm registry at its published version, never linked from a local checkout,
so the study exercises what the public installs. A bug found this way belongs
in an [issue](https://github.com/gregoryedgerton/golden-grids/issues).

Captures are taken with Playwright: `captures/capture.cjs <url> captures
[prefix]` scrolls the page to trigger lazy images, then takes a full-page
screenshot at 390, 820, and 1440. `captures/tokens.cjs <url>` dumps the
reference's computed styles to stdout (`reference-tokens.json` is the run
this study was matched against). Both need `playwright` and Chrome.

## Deploying

Pushing to `main` builds and publishes to GitHub Pages. The base path derives
from the repository name inside the workflow. The Pages source was pointed at
GitHub Actions once, with `gh api -X POST repos/<owner>/<repo>/pages -f build_type=workflow`.

## Pre-publish checklist

Brand constraints, from the program brief:

- [x] The reference page is named, with a URL, in the README and on the page.
- [x] The unaffiliated-study line is visible on the page and in the README.
- [x] No photography, wordmark, or marketing copy from the reference site
      appears anywhere in the repo or the deploy. Captures in `captures/` are
      commentary and are not used as assets.
- [x] Every image and copy slot holds real content produced against the
      asset spec. Copy: original, fictional listing, no sentence from the
      reference or its host reproduced; headings and UI strings reworded.
      Images: twelve, produced against `ASSETS.md`, no brand marks.
- [x] The asset spec above is complete: every slot listed with resolution,
      subject placement, safe area, and word counts.
- [x] The band table matches the source.
- [x] "What did not" has at least one honest entry.

Quality floor, inherited from the template:

- [x] Checked and legible at 390px, 820px, and 1440px. Rebuild captures at all
      three are in `captures/`.
- [x] Visible keyboard focus on every interactive element.
- [x] `prefers-reduced-motion`: nothing on this page moves.
- [x] Text contrast meets WCAG AA against whatever it sits on, including images.
- [x] Images that carry meaning have alt text; decorative ones have `alt=""`.
- [x] No placeholder images remain. No bracketed copy remains.
