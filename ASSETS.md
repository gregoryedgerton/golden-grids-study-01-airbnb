# Shot list — Study 01 images

Hand-off for an image-generation agent. Every image slot on the page is
listed with what it is for, the size to produce, where the subject must sit,
what must survive the crop, and a prompt. Produce every file, name it by the
rubric, drop it in `public/assets/`, and report back the table at the bottom
filled in. Do not touch the code; the swap-in is a separate step.

Read `README.md` → "Asset spec" for the slot geometry this list serves, and
`src/content.ts` for the copy the images sit beside.

## The property

A Pizza Hut built in 1991 on the old commercial strip in Catskill, New York,
closed in 2009, bought at auction in 2023 and converted into a two-bedroom
vacation stay by a couple who kept everything worth keeping. It is a real
place to sleep, not a theme room: the beds are serious, the kitchen works,
the lot is yours. The joke is the building; the comfort is the point.

**What stayed from 1991:** the red mansard "hut" roof with the shallow
gable; the trapezoid windows in a row along both long walls; the red
Tiffany-style pendant lamps over the booths, all on dimmers; red vinyl
booths with wood-look tables; red-and-white checkered tablecloths; the salad
bar with its sneeze guard and cold well, now run farm to table from raised
beds out back; the
translucent red plastic tumblers, a full set; the brick-and-stucco exterior;
the low dropped ceiling with warm downlights; terrazzo and carpet underfoot;
a jukebox; an upright arcade cabinet and a cocktail-table game; the old sign
pole out front, now carrying a house number.

**What is new:** the party room is the main bedroom (king bed under a red
lamp, trapezoid window behind); two back booths became the second bedroom
(queen bed between banquettes); the kitchen line is a real kitchen with a
wood-fired oven and stainless counters; a hot tub on the back patio where
the dumpster pad was; plants in the windows; good linen.

## Style guide — applies to every photograph

- **Era and mood:** 1990s American roadside, seen with affection, not irony.
  Warm, low, red-tinted light from the pendant lamps; dusk outside; the
  glow through the windows is the recurring motif.
- **Camera:** editorial real-estate photography. Full-frame, 24–35mm for
  rooms, 50mm for details, tripod, level horizon, no fisheye. Natural
  perspective, verticals straight. Shallow but not extreme depth of field.
- **Palette:** Pizza Hut red (#c8102e territory) on the roof, lamps, booths
  and tumblers; warm wood; cream walls; brown brick; a little green from
  plants. Nothing neon, nothing pastel.
- **Finish:** photographic, slightly warm, mild film grain, no HDR halos, no
  oversaturation, no vignettes, no text overlays, no watermarks.
- **People:** none in property photographs. Portraits are listed separately.
- **Brand marks — required:** no Pizza Hut logo, wordmark, roof-shaped logo
  mark, menu, signage or packaging anywhere in any image. The building's
  roof and window shapes, the lamps, the booths, the tumblers and the salad
  bar carry the reference on their own. If a sign is visible it is blank or
  shows the house number only.
- **Negative prompt (all images):** logo, wordmark, text, signage, watermark,
  people, cartoon, illustration (except the map), fisheye, HDR, neon,
  pastel, blur, duplicate lamps, extra windows, warped furniture.

## Naming rubric

`s01-<band>-<slot>-<subject>-<W>x<H>-v<N>.<ext>`

| Part | Values |
| --- | --- |
| `s01` | Study 01. Fixed. |
| `band` | `gallery`, `facts`, `about`, `amenities`, `reviews`, `location`, `host` |
| `slot` | `hero`, `s1`…`s4` (supporting, in child order), `tile`, `bed1`, `bed2`, `avatar`, `r1`, `r2`, `map` |
| `subject` | one or two lowercase words, hyphenated: `hut-dusk`, `dining-room`, `arcade`, `bedroom`, `kitchen`, `salad-bar`, `hosts`, `priya`, `tomas`, `strip` |
| `W`x`H` | the produced pixel size, exactly |
| `v<N>` | version, starting at `v1`; a re-generation is `v2`, never an overwrite |
| `ext` | `jpg` for photographs (quality 85, sRGB, no EXIF), `png` for the map and the avatars |

Examples: `s01-gallery-hero-hut-dusk-1600x1067-v1.jpg`,
`s01-about-bed2-booth-bedroom-1000x1000-v1.jpg`, `s01-location-map-strip-1400x1400-v1.png`.

Deliver into `public/assets/`. Produce each image at the listed size or
larger with the same proportions; the page crops with `object-fit: cover`,
so the aspect ratio is not sacred — the safe area is.

## Shots

Subject placement is where the subject's centre sits in the frame, as the
`object-position` the page will use. Safe area is what must survive when the
slot crops the frame to a square (it does at every width) — anything outside
it is disposable.

### 1 · Gallery hero — the hut at dusk

- **File:** `s01-gallery-hero-hut-dusk-1600x1067-v1.jpg` (1600×1067 or larger, 3:2)
- **Used:** band 1, largest slot. Renders 640 / 482 / 244 px square.
- **Subject placement:** 50% 42% — the roofline sits just above centre.
- **Safe area:** the whole building from roof peak to ground, and the glow in
  the windows; the sky above and the road below are disposable.
- **Prompt:** Exterior of a converted 1991 Pizza Hut restaurant at dusk,
  three-quarter view from the parking lot. Red mansard hut roof with a
  shallow gable, brown brick and cream stucco walls, a row of trapezoid
  windows glowing warm red from pendant lamps inside. A bare sign pole at the
  edge of the lot carrying a small house number. Wet asphalt reflecting the
  windows, a few planters, a string of warm bulbs along the eave. Blue-hour
  sky, no cars, no people, no signage or logos. Editorial real-estate
  photograph, 28mm, tripod, straight verticals, warm film look.

### 2 · Gallery supporting 1 — the dining room as living room

- **File:** `s01-gallery-s1-dining-room-1200x800-v1.jpg` (1200×800, 3:2)
- **Used:** band 1, 2nd slot. Renders 384 / 289 / 122 px square.
- **Subject placement:** centre.
- **Safe area:** centre 60%: two booths, two lamps, the jukebox beyond.
- **Prompt:** Interior of a 1990s pizza restaurant dining room kept as a
  living room. Red vinyl booths with wood-look tables and red-and-white
  checkered cloths, red stained-glass pendant lamps on dimmers glowing over
  each booth, a low dropped ceiling with warm downlights, terrazzo floor with
  a strip of carpet, trapezoid windows along the wall showing dusk outside, a
  jukebox against the far wall, a few houseplants and a throw blanket on a
  booth. No people, no signage, no logos. Editorial interior photograph,
  24mm, tripod, warm and low.

### 3 · Gallery supporting 2 — the arcade corner

- **File:** `s01-gallery-s2-arcade-1000x1000-v1.jpg` (1000×1000)
- **Used:** band 1, 3rd slot. Renders 256 / 193 / 122 px square.
- **Subject placement:** centre.
- **Safe area:** centre 60%: cabinet, cocktail table, lamp.
- **Prompt:** Corner of a converted 1990s pizza restaurant: one upright
  arcade cabinet with a generic unbranded marquee glowing, a cocktail-table
  arcade game with two stools, a red pendant lamp low over the table, wood
  panelling and brick, a trapezoid window catching the last light. Screen
  glow mixing with red lamp light. No people, no brand names on the cabinets.
  Editorial interior photograph, 35mm, warm, slight grain.

### 4 · Gallery supporting 3 — the main bedroom

- **File:** `s01-gallery-s3-bedroom-1200x900-v1.jpg` (1200×900, 4:3)
- **Used:** band 1, 4th slot. Renders 170 / 96 px square. Also reusable as bed1 if needed.
- **Subject placement:** centre.
- **Safe area:** centre 50%: the bed and the lamp above it.
- **Prompt:** The former party room of a 1990s pizza restaurant made into a
  main bedroom. A king bed with white linen and a red wool blanket, a red
  stained-glass pendant lamp hung low over the foot of the bed, a trapezoid
  window behind the headboard with blinds half open at dusk, wood panelling
  to chair-rail height, cream walls above, a single vinyl booth seat kept as
  a bench, a small plant. No people, no signage. Editorial interior
  photograph, 28mm, warm and calm.

### 5 · Gallery supporting 4 — the kitchen on the old line

- **File:** `s01-gallery-s4-kitchen-1200x800-v1.jpg` (1200×800, 3:2)
- **Used:** band 1, 5th slot. Renders 170 / 96 px square.
- **Subject placement:** centre.
- **Safe area:** centre 50%: the oven mouth and the rack of tumblers.
- **Prompt:** A kitchen built on a 1990s restaurant line: long stainless
  steel counters, a domed wood-fired pizza oven with a low fire, a rack of
  translucent red plastic tumblers, a stack of white plates, a wooden peel
  on the wall, red pendant lamp over the pass, tiled floor. Warm, slightly
  steamy. No people, no signage or logos. Editorial kitchen photograph, 35mm.

### 6 · About — bedroom 1

- **File:** `s01-about-bed1-king-1000x1000-v1.jpg` (1000×1000)
- **Used:** band 4, 1-square. Renders 192 / 154 / 122 px square.
- **Subject placement:** centre. **Safe area:** the bed.
- **Prompt:** Same room as shot 4, straight on from the foot of the bed:
  king bed centred, red pendant lamp above, trapezoid window behind, blinds
  half open at dusk. Square composition. No people. Editorial, 35mm, warm.

### 7 · About — bedroom 2

- **File:** `s01-about-bed2-booth-bedroom-1000x1000-v1.jpg` (1000×1000)
- **Used:** band 4, 1-square. Renders 192 / 154 / 122 px square.
- **Subject placement:** centre. **Safe area:** the bed between the banquettes.
- **Prompt:** A second bedroom made from two back booths of a 1990s pizza
  restaurant: a queen bed fitted between two red vinyl banquettes that now
  serve as headboard and footboard, white linen, a red pendant lamp above, a
  trapezoid window to one side, wood panelling, a small shelf with books and
  a red tumbler holding wildflowers. Square composition. No people.
  Editorial, 35mm, warm and cosy.

### 8 · Amenities tile — the salad bar, farm to table

- **File:** `s01-amenities-tile-salad-bar-1000x1000-v2.jpg` (1000×1000) — **delivered**
- **Used:** band 5, 2-square. Renders 384 / 308 / 122 px square.
- **Subject placement:** 50% 60% — the cold well just below centre.
- **Safe area:** the sneeze guard and the cold well with its bowls.
- **Prompt:** A restored 1990s restaurant salad bar run farm to table:
  curved sneeze guard, stainless cold well with white bowls of leaves,
  herbs, tomatoes, berries and shaved vegetables cut that morning, a jar of
  dressing, a stack of white plates, red plastic tumblers, cut flowers in a
  glass at the end, red pendant lamps above, dusk in the trapezoid windows
  behind. Clean and inviting. No people, no signage. Editorial food
  photograph, 50mm, warm.

### 8b · Gallery supporting — the kitchen garden

- **File:** `s01-gallery-s5-garden-1200x800-v1.jpg` (1200×800, 3:2) — **delivered**
- **Used:** band 1, 4th slot. Renders 170 / 96 px square.
- **Subject placement:** centre. **Safe area:** the raised beds and the fire pit.
- **Prompt:** The kitchen garden behind a converted 1990s pizza restaurant at
  dusk: cedar raised beds of lettuce, herbs and flowers, a gravel yard, a
  fire pit with a low flame and two wooden chairs, a picket fence, string
  lights overhead, the red mansard roof and glowing trapezoid windows at the
  left, and a lit sign pole carrying the house number. No people, no
  signage or logos. Editorial photograph, 28mm, warm, blue hour.

### 9 · Host avatar — Dee & Marcus

- **File:** `s01-host-avatar-hosts-400x400-v1.png` (400×400)
- **Used:** band 2 (40px) and band 9 (up to 104px), circular crop.
- **Subject placement:** faces centred. **Safe area:** both faces.
- **Prompt:** Portrait of two hosts in their forties, a woman and a man,
  friendly, standing shoulder to shoulder in front of a red vinyl booth
  under a red pendant lamp, warm light, plain and unposed, looking at the
  camera. Square, faces filling the middle third. Fictional people, not
  resembling any real person. Photographic, 50mm, warm.

### 10 · Reviewer avatar — Priya

- **File:** `s01-reviews-r1-priya-200x200-v1.png` (200×200)
- **Used:** band 7, 48px circular.
- **Prompt:** Small friendly portrait of a woman in her thirties, outdoors,
  soft daylight, square, face centred. Fictional person. Photographic.

### 11 · Reviewer avatar — Tomas

- **File:** `s01-reviews-r2-tomas-200x200-v1.png` (200×200)
- **Used:** band 7, 48px circular (1440 only).
- **Prompt:** Small friendly portrait of a man in his forties, outdoors,
  soft daylight, square, face centred. Fictional person. Photographic.

### 12 · Location — the drawn map

- **File:** `s01-location-map-strip-1400x1400-v1.png` (1400×1400)
- **Used:** band 8, hero. Renders 597 / 514 / 366 px square.
- **Subject placement:** centre — the marker at the middle of the frame.
- **Safe area:** the marker and the two nearest labels ("Main Street", "the creek").
- **Prompt:** A hand-drawn map illustration, ink and warm watercolour wash,
  of a small river town's old commercial strip: a straight road with a few
  simple building footprints along it, one marked with a small red hut-roof
  shape and a house marker, a creek winding nearby with a footpath, "Main
  Street" and "Catskill Creek" lettered by hand, a compass rose in a corner,
  cream paper texture. Square. No real map data, no brand marks, no other
  text. Illustration, flat, legible at 240 px.

## Report back

| # | File | Produced size | Notes (deviations from the prompt, if any) |
| - | --- | --- | --- |
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |
| 11 | | | |
| 12 | | | |
| 8b | `s01-gallery-s5-garden-1200x800-v1.jpg` | 1200×800 | delivered |
