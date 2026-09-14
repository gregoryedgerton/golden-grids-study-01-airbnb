/**
 * Study 01 copy. Original, written for a fictional listing so that nothing
 * from the reference page or its host is reproduced. Word counts follow the
 * asset spec in README.md; where a slot holds a different count per width,
 * three versions are given in viewport order (mobile / tablet / desktop).
 */
import type { Viewport } from "./lib/viewport";

export const listing = {
  title: "Modern A-Frame in the Pines with a Wood-Fired Sauna",
  summary: "Entire cabin in Windham, New York",
  capacity: ["4 guests", "2 bedrooms", "2 beds", "1.5 baths"],
  score: "4.97",
  badge: "Top-rated stay",
  badgeBlurb: "Among the highest-rated homes in the northern Catskills",
  reviewCount: 212,
  photoCount: 38,
  amenityTotal: 52,
  host: { name: "Mara & Jonah", tag: "Experienced host", years: 3, responseRate: "100%", responseTime: "within an hour" },
  town: { line: "Windham, New York, United States", note: "The exact address is shared once a booking is confirmed." },
  locationHighlight: { title: "In the woods above Windham", body: "Six minutes by car to the village, a short walk to the creek trail, and dark enough at night for the stars." },
  highlights: ["Rated in the top 5% of stays", "Wood-fired sauna and cedar soaking tub", "Floor-to-ridge glass on the north gable", "Quiet, wooded, and dog-friendly"],
  bedrooms: [
    { name: "Bedroom 1", bed: "1 king bed", alt: "The main bedroom under the ridge, a king bed facing the glass gable" },
    { name: "Bedroom 2", bed: "1 queen bed", alt: "The loft bedroom with a queen bed and a skylight" },
  ],
  amenities: ["Full kitchen", "Fast wifi", "Free parking on site", "Cedar soaking tub", "Wood-fired sauna", "Dogs welcome", "Smart TV", "Washer", "Dryer", "Desk with a view"],
  booking: { prompt: "Add dates to see the price", cta: "Check dates", note: "You will not be charged at this step" },
  fields: { checkin: "Check-in", checkout: "Checkout", guests: "Guests", datePlaceholder: "Add date", guestsPlaceholder: "1 guest" },
  months: ["October 2026", "November 2026"],
  photos: {
    hero: "The A-frame at dusk, its north gable lit from inside, the soaking tub steaming on the deck",
    living: "The living room, a wood stove and two low chairs under the ridge",
    sauna: "The cedar sauna in the trees behind the cabin",
    bedroom: "The main bedroom with the gable glass at the foot of the bed",
    kitchen: "The kitchen, open to the living room, with a long oak counter",
    tub: "The cedar soaking tub on the deck",
    map: "A drawn map of the area around Windham, with the cabin marked",
  },
  reviews: [
    { name: "Priya", city: "Brooklyn, New York", when: "September 2026", stay: "Stayed a few nights" },
    { name: "Tomas", city: "Montclair, New Jersey", when: "August 2026", stay: "Stayed with kids" },
  ],
  categories: [{ label: "Cleanliness", score: "5.0" }, { label: "Location", score: "4.9" }],
  things: {
    rules: { title: "House rules", lines: ["Check-in after 4:00 PM", "Checkout before 11:00 AM", "4 guests maximum", "Dogs welcome, no other pets"] },
    cancellation: { title: "Cancellation policy", lines: ["Free cancellation for 48 hours after booking"] },
    safety: { title: "Safety and property", lines: ["Smoke and carbon monoxide alarms", "Outdoor camera at the driveway"] },
  },
  cta: { showPhotos: "Show all photos", showMore: "Show more", showAmenities: "Show all", showReviews: "Show all", message: "Message host", learnMore: "Learn more" },
  labels: { sleep: "Sleeping arrangements", amenities: "Amenities", dates: "Choose your dates", reviews: "Reviews", location: "Location", host: "Your host", things: "Before you book", photos: "Photos", facts: "About this place", book: "Book" },
};

export const description: Record<Viewport, string> = {
  mobile:
    "A steep-roofed cabin on a wooded slope above Windham, built for slow weekends: a wood stove, a cedar tub on the deck, a sauna in the trees, and glass from floor to ridge. Sleeps four.",
  tablet:
    "A steep-roofed cabin on a wooded slope above Windham, built for slow weekends. The north gable is glass from floor to ridge, so the trees are the wallpaper. Outside there is a cedar soaking tub on the deck and a wood-fired sauna in the trees. Two bedrooms sleep four; dogs are welcome.",
  desktop:
    "A steep-roofed cabin on a wooded slope above Windham, built for slow weekends rather than quick stops. The north gable is glass from floor to ridge, so the trees are the wallpaper and the weather is the entertainment. Downstairs there is a wood stove, a long oak counter, and a king bed facing the glass. Upstairs, a loft with a queen bed and a skylight. Outside, a cedar soaking tub on the deck and a wood-fired sauna in the trees. Six minutes to the village, farther from everything else. Dogs are welcome.",
};

export const featuredReview: Record<Viewport, string> = {
  mobile:
    "We came for the sauna and stayed for the glass wall. Quiet, warm, exactly as pictured. Already planning a winter return.",
  tablet:
    "We came for the sauna and stayed for the glass wall. The cabin is quiet, warm, and exactly as pictured, and the hosts left clear notes for the stove and the tub. We hiked in the morning and did nothing at all in the afternoon. Already planning a winter return.",
  desktop:
    "We came for the sauna and stayed for the glass wall. The cabin is quiet, warm, and exactly as pictured, and the hosts left clear, friendly notes for the stove, the tub, and the sauna. We hiked the creek trail in the morning and did nothing at all in the afternoon, which is the point. Already planning a winter return.",
};

export const secondReview =
  "Booked it for the kids' fall break and it worked for all of us: room to spread out, a fire every night, and the dog had the run of the woods.";

export const hostBio: Record<Viewport, string> = {
  mobile:
    "We built the cabin as a place to slow down and now share it most of the year. We live nearby, answer quickly, and leave the stove ready.",
  tablet:
    "We built the cabin as a place to slow down and now share it most of the year. We live twenty minutes away, answer messages quickly, and leave the wood stove laid and the sauna stocked. Ask us about trails, the good bakery, and where to see the stars.",
  desktop:
    "We built the cabin four years ago as a place to slow down and found we wanted to share it, so it is available most of the year. We live twenty minutes away, answer messages quickly, and leave the wood stove laid, the sauna stocked, and a note on the counter with our favourite walks. Mara cooks; Jonah cuts the firewood. Ask us about the creek trail, the good bakery in the village, the swimming hole in summer, and the best spot on the deck to see the stars.",
};
