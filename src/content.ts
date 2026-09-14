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
  photoCount: 41,
  amenityTotal: 47,
  host: { name: "Dee & Marcus", tag: "Experienced host", years: 2, responseRate: "100%", responseTime: "within an hour" },
  town: { line: "Catskill, New York, United States", note: "The exact address is shared once a booking is confirmed." },
  locationHighlight: { title: "On the old strip, by the creek", body: "Five minutes on foot to Main Street, a short walk to the creek path, and the lot still fits four cars and a boat." },
  highlights: ["The original hut roof and trapezoid windows", "Salad bar, stocked for breakfast", "Red pendant lamps, all on dimmers", "Arcade corner with a working jukebox"],
  bedrooms: [
    { name: "Bedroom 1", bed: "1 king bed", alt: "The main bedroom in the former party room: a king bed under a red pendant lamp, a trapezoid window behind it" },
    { name: "Bedroom 2", bed: "1 queen bed", alt: "The second bedroom built from two back booths, a queen bed between red vinyl banquettes" },
  ],
  amenities: ["Wood-fired pizza oven", "Salad bar with a cold well", "A full set of red tumblers", "Booth seating for eight", "Arcade cabinet and jukebox", "Fast wifi", "Free parking in the old lot", "Hot tub on the back patio", "Washer and dryer", "Smart TV in the dining room"],
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
  reviews: [
    { name: "Priya", city: "Brooklyn, New York", when: "September 2026", stay: "Stayed a few nights" },
    { name: "Tomas", city: "Montclair, New Jersey", when: "August 2026", stay: "Stayed with kids" },
  ],
  categories: [{ label: "Cleanliness", score: "5.0" }, { label: "Location", score: "4.8" }],
  things: {
    rules: { title: "House rules", lines: ["Check-in after 4:00 PM", "Checkout before 11:00 AM", "4 guests maximum", "Dogs welcome, no other pets"] },
    cancellation: { title: "Cancellation policy", lines: ["Free cancellation for 48 hours after booking"] },
    safety: { title: "Safety and property", lines: ["Smoke and carbon monoxide alarms", "Outdoor camera over the parking lot"] },
  },
  cta: { showPhotos: "Show all photos", showMore: "Show more", showAmenities: "Show all", showReviews: "Show all", message: "Message host", learnMore: "Learn more" },
  labels: { sleep: "Sleeping arrangements", amenities: "Amenities", dates: "Choose your dates", reviews: "Reviews", location: "Location", host: "Your host", things: "Before you book", photos: "Photos", facts: "About this place", book: "Book" },
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
    "We booked it for the joke and stayed for the beds. Red lamps on low, a pie from the oven, the jukebox. Perfect.",
  tablet:
    "We booked it for the joke and stayed for the beds. Red lamps on low, checkered cloths, a pie from the wood oven, the jukebox on the good side of loud. The salad bar at breakfast is the detail nobody warns you about. Perfect.",
  desktop:
    "We booked it for the joke and stayed for the beds. Red lamps on low, checkered cloths, a pie from the wood oven, the jukebox on the good side of loud, and the salad bar at breakfast is the detail nobody warns you about. The hosts thought about everything a real weekend needs. We are already planning a winter return.",
};

export const secondReview =
  "Took the kids for fall break and they have not stopped talking about the arcade corner. The booths, the tumblers, the lamps: exactly as pictured.";

export const hostBio: Record<Viewport, string> = {
  mobile:
    "We bought the hut at auction, spent a year putting it back, and now share it. We live nearby, answer fast, and keep the salad bar cold.",
  tablet:
    "We bought the hut at auction in 2023, spent a year putting it back the way we remembered it, and now share it most of the year. We live ten minutes away, answer messages quickly, and keep the salad bar cold and the oven wood stacked. Ask us about the creek path and the good diner.",
  desktop:
    "We bought the hut at auction in 2023 after driving past it for years, spent twelve months putting it back the way we remembered it from birthday parties, and now share it most of the year. We live ten minutes away, answer messages quickly, and leave the salad bar cold, the oven wood stacked, and the jukebox loaded. Dee runs the kitchen; Marcus keeps the arcade cabinet alive. Ask us about the creek path, the good diner on Main Street, the drive-in in summer, and the best booth to watch the rain from.",
};
