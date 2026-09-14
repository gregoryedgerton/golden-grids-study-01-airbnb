/**
 * Study 01 copy. Original, written for a fictional listing so that nothing
 * from the reference page or its host is reproduced. The listing: a 1991
 * Pizza Hut on the old commercial strip in Catskill, New York, closed in
 * 2009 and converted into a two-bedroom stay that kept the hut roof, the
 * trapezoid windows, the red pendant lamps, the booths, the salad bar and
 * the red tumblers. Word counts follow the asset spec in README.md; where a
 * slot holds a different count per width, three versions are given in
 * viewport order (mobile / tablet / desktop). The shot list for the images
 * is ASSETS.md.
 */
import type { Viewport } from "./lib/viewport";

export const listing = {
  title: "The Hut: a 1991 Pizza Hut, Now a Two-Bedroom Stay",
  summary: "Entire converted restaurant in Catskill, New York",
  capacity: ["4 guests", "2 bedrooms", "2 beds", "1.5 baths"],
  score: "4.96",
  badge: "Top-rated stay",
  badgeBlurb: "Among the highest-rated stays in the Hudson Valley",
  reviewCount: 188,
  get photoCount(): number { return photoSet.length; },
  get amenityTotal(): number { return amenityGroups.reduce((n, g) => n + g.items.length, 0); },
  host: { name: "Dee & Marcus", tag: "Experienced host", years: 2, responseRate: "100%", responseTime: "within an hour" },
  town: { line: "Catskill, New York, United States", note: "The exact address is shared once a booking is confirmed." },
  locationHighlight: { title: "On the old strip, by the creek", body: "Five minutes on foot to Main Street, a short walk to the creek path, and the lot still fits four cars and a boat." },
  highlights: ["The original hut roof and trapezoid windows", "Salad bar, stocked for breakfast", "Red pendant lamps, all on dimmers", "Arcade corner with a working jukebox"],
  bedrooms: [
    { name: "Bedroom 1", bed: "1 king bed", alt: "The main bedroom in the former party room: a king bed under a red pendant lamp, a trapezoid window behind it" },
    { name: "Bedroom 2", bed: "1 queen bed", alt: "The second bedroom built from two back booths, a queen bed between red vinyl banquettes" },
  ],
  /** The ten shown in the band, a strict subset of amenityGroups. */
  get amenities(): string[] { return amenityGroups.flatMap((g) => g.items).filter((i) => featured.has(i)); },
  booking: { prompt: "Add dates to see the price", cta: "Check dates", note: "You will not be charged at this step" },
  fields: { checkin: "Check-in", checkout: "Checkout", guests: "Guests", datePlaceholder: "Add date", guestsPlaceholder: "1 guest" },
  months: ["October 2026", "November 2026"],
  photos: {
    hero: "The hut at dusk: the red mansard roof, trapezoid windows glowing from the red lamps inside, the old sign pole now holding a house number",
    living: "The dining room kept as the living room: red vinyl booths, checkered cloths, red pendant lamps, a jukebox against the far wall",
    sauna: "The arcade corner: an upright cabinet and a cocktail-table game under a low lamp",
    bedroom: "The main bedroom with the king bed and the trapezoid window",
    kitchen: "The kitchen on the old line: stainless counters, a wood-fired oven, a rack of red tumblers",
    tub: "The salad bar, restored, with its sneeze guard and cold well, laid out for breakfast",
    map: "A drawn map of Catskill's old commercial strip with the hut marked, the creek and Main Street nearby",
  },
  /** The two shown in the band, taken from the full set. */
  get reviews() { return [{ ...allReviews[0], stay: "Stayed a few nights" }, { ...allReviews[1], stay: "Stayed with kids" }]; },
  categories: [{ label: "Cleanliness", score: "5.0" }, { label: "Location", score: "4.8" }],
  things: {
    rules: { title: "House rules", lines: ["Check-in after 4:00 PM", "Checkout before 11:00 AM", "4 guests maximum", "Dogs welcome, no other pets"] },
    cancellation: { title: "Cancellation policy", lines: ["Free cancellation for 48 hours after booking"] },
    safety: { title: "Safety and property", lines: ["Smoke and carbon monoxide alarms", "Outdoor camera over the parking lot"] },
  },
  cta: { showPhotos: "Show all photos", showMore: "Show more", showAmenities: "Show all", showReviews: "Show all", message: "Message host", learnMore: "Learn more" },
  labels: { sleep: "Sleeping arrangements", amenities: "Amenities", dates: "Choose your dates", reviews: "Reviews", location: "Location", host: "Your host", things: "Before you book", photos: "Photos", facts: "About this place", book: "Book" },
  /** Titles and notes for the expanded cells. */
  expanded: {
    photos: (n: number) => `${n} photos`,
    about: "About this place",
    amenities: (n: number) => `What this place offers · ${n}`,
    reviews: (n: string, score: string) => `${n} reviews · ${score}`,
    reviewsNote: (shown: number, total: number) => `Showing ${shown} of ${total}. The study loads ${shown}.`,
  },
};

export const description: Record<Viewport, string> = {
  mobile:
    "A 1991 Pizza Hut on the old strip in Catskill, closed in 2009 and made into a stay. The roof, the windows, the red lamps, the booths and the salad bar stayed. Two real bedrooms. Sleeps four.",
  tablet:
    "A 1991 Pizza Hut on the old strip in Catskill, closed in 2009 and turned into a stay that kept everything worth keeping: the hut roof, the trapezoid windows, the red pendant lamps, the booths, the salad bar. The party room is a bedroom now. The kitchen line still bakes. Two bedrooms sleep four; dogs are welcome.",
  desktop:
    "A 1991 Pizza Hut on the old commercial strip in Catskill, closed in 2009 and turned into a stay that kept everything worth keeping: the hut roof, the trapezoid windows, the red pendant lamps on dimmers, the vinyl booths, the checkered cloths, the salad bar and a full set of red tumblers. The party room is the main bedroom now, with a king bed under the lamp. Two back booths became a queen bed. The kitchen line still bakes; the oven is wood-fired. The lot is yours, the creek is a short walk, and the jukebox works.",
};

export const featuredReview: Record<Viewport, string> = {
  mobile:
    "Booked it for the joke, stayed for the beds.",
  tablet:
    "We booked it for the joke and stayed for the beds. Red lamps on low, checkered cloths, a pie from the wood oven, the jukebox on the good side of loud. The salad bar at breakfast is the detail nobody warns you about. Perfect.",
  desktop:
    "We booked it for the joke and stayed for the beds. Red lamps on low, checkered cloths, a pie from the wood oven, the jukebox on the good side of loud, and the salad bar at breakfast is the detail nobody warns you about. The hosts thought about everything a real weekend needs. We are already planning a winter return.",
};

export const secondReview = () => allReviews[1].short ?? allReviews[1].text;

export const hostBio: Record<Viewport, string> = {
  mobile:
    "We bought the hut at auction, spent a year putting it back, and now share it. We live nearby, answer fast, and keep the salad bar cold.",
  tablet:
    "We bought the hut at auction in 2023, spent a year putting it back the way we remembered it, and now share it most of the year. We live ten minutes away, answer messages quickly, and keep the salad bar cold and the oven wood stacked. Ask us about the creek path and the good diner.",
  desktop:
    "We bought the hut at auction in 2023 after driving past it for years, spent twelve months putting it back the way we remembered it from birthday parties, and now share it most of the year. We live ten minutes away, answer messages quickly, and leave the salad bar cold, the oven wood stacked, and the jukebox loaded. Dee runs the kitchen; Marcus keeps the arcade cabinet alive. Ask us about the creek path, the good diner on Main Street, the drive-in in summer, and the best booth to watch the rain from.",
};

/* --- Expanded-cell content ------------------------------------------------ */

export const descriptionFull: string[] = [
  "A 1991 Pizza Hut on the old commercial strip in Catskill, closed in 2009, empty for fourteen years, and bought at auction in 2023 by two people who had driven past it for most of their lives. The plan was never to hide what it was. The roof, the trapezoid windows, the red pendant lamps, the vinyl booths and the salad bar all stayed; what changed is that you can sleep here now, and sleep well.",
  "The party room is the main bedroom, with a king bed under its original lamp and the trapezoid window behind the headboard. Two back booths became the second bedroom, a queen bed fitted between the banquettes. The kitchen line is a real kitchen: stainless counters, a wood-fired oven that takes a pie in ninety seconds, and a full set of the red tumblers, because a stay here without them would be a lie.",
  "The dining room is the living room. Six booths, checkered cloths, lamps on dimmers, a jukebox that works and an arcade cabinet that mostly does. The salad bar is cold every morning and laid out for breakfast. Out back, where the dumpster pad was, there is a hot tub and a fence and a view of the creek trees.",
  "Catskill's Main Street is five minutes on foot, the creek path a little less. The lot fits four cars and a boat. Dogs are welcome; the carpet has seen worse.",
];

/** The ten the band shows, by exact label, so the summary is a strict subset. */
const featured = new Set([
  "Wood-fired pizza oven", "Salad bar with a cold well", "A full set of red tumblers",
  "Booth seating for eight", "Arcade cabinet", "Fast wifi",
  "Free parking in the old lot, four cars and a boat", "Hot tub on the back patio",
  "Washer and dryer", "Dining room smart TV",
]);

export const amenityGroups: { title: string; items: string[] }[] = [
  { title: "Kitchen and dining", items: ["Wood-fired pizza oven", "Salad bar with a cold well", "A full set of red tumblers", "Booth seating for eight", "Checkered tablecloths", "Full refrigerator and freezer", "Dishwasher", "Coffee maker and grinder", "Pots, pans, plates and a peel", "Dining room smart TV", "Washer and dryer"] },
  { title: "Bedrooms and bath", items: ["King bed, hotel linen", "Queen bed between banquettes", "Blackout blinds on the trapezoids", "Hangers and a wardrobe", "Hair dryer", "Towels and bath sheets", "Shampoo, conditioner, body wash", "Iron and board"] },
  { title: "Entertainment", items: ["Arcade cabinet", "Cocktail-table game", "Jukebox, loaded", "Board games in the host stand", "Books", "Record player and a crate"] },
  { title: "Outdoors", items: ["Hot tub on the back patio", "Free parking in the old lot, four cars and a boat", "Patio furniture", "Fire pit", "Bike rack", "Fenced yard for dogs"] },
  { title: "Home basics", items: ["Fast wifi", "Heating and air conditioning", "Ceiling fans", "First aid kit", "Fire extinguisher", "Smoke and carbon monoxide alarms", "Long-term stays allowed", "Self check-in with a keypad", "Luggage drop-off", "Workspace in a booth", "Dogs welcome", "Crib on request", "High chair", "Pack and play", "Baby bath", "Step-free entrance"] },
];

export const allReviews: { name: string; city: string; when: string; text: string; short?: string }[] = [
  { name: "Priya", city: "Brooklyn, New York", when: "September 2026", text: "We booked it for the joke and stayed for the beds. Red lamps on low, checkered cloths, a pie from the wood oven, the jukebox on the good side of loud, and the salad bar at breakfast is the detail nobody warns you about. The hosts thought about everything a real weekend needs." },
  { name: "Tomas", city: "Montclair, New Jersey", when: "August 2026", short: "Took the kids for fall break and they have not stopped talking about the arcade corner.", text: "Took the kids for fall break and they have not stopped talking about the arcade corner. The booths, the tumblers, the lamps: exactly as pictured." },
  { name: "Renata", city: "Philadelphia, Pennsylvania", when: "August 2026", text: "Quietest place we have stayed in years, which is not what you expect from a former restaurant on a strip. The windows are better insulated than ours at home. Dee left a note about the oven that made us laugh." },
  { name: "Owen", city: "Albany, New York", when: "July 2026", text: "Came for a birthday, which felt right. Made pies for eight in the booths, ran the jukebox until midnight, hot tub after. The second bedroom between the banquettes is more comfortable than it has any right to be." },
  { name: "Mei", city: "Hoboken, New Jersey", when: "June 2026", text: "The salad bar at breakfast is a genuinely good idea and someone should steal it. Walkable to Main Street, the creek path is lovely, parking is easy. We would come back in winter for the lamps." },
  { name: "Daniel", city: "Kingston, New York", when: "May 2026", text: "Everything works. That is the review. The arcade cabinet, the jukebox, the oven, the wifi, the hot tub, the blinds on the odd windows. Marcus answered a question at 9pm in about a minute." },
];

export const photoSet: { key: "hero" | "dining" | "arcade" | "bedroom" | "kitchen" | "bed1" | "bed2" | "saladBar"; caption: string; alt: string }[] = [
  { key: "hero", caption: "The hut at dusk", alt: listing.photos.hero },
  { key: "dining", caption: "The dining room, kept", alt: listing.photos.living },
  { key: "arcade", caption: "The arcade corner", alt: listing.photos.sauna },
  { key: "bedroom", caption: "Bedroom 1, the former party room", alt: listing.photos.bedroom },
  { key: "bed1", caption: "Bedroom 1 from the foot of the bed", alt: listing.bedrooms[0].alt },
  { key: "bed2", caption: "Bedroom 2, between the banquettes", alt: listing.bedrooms[1].alt },
  { key: "kitchen", caption: "The kitchen on the old line", alt: listing.photos.kitchen },
  { key: "saladBar", caption: "The salad bar at breakfast", alt: listing.photos.tub },
];
