/**
 * Study 01 images, produced against ASSETS.md and delivered to public/assets/.
 * Paths are resolved against the Pages base so a fork never edits them.
 * `subject` is the object-position from the shot list.
 */
const base = import.meta.env.BASE_URL;
const at = (file: string) => `${base}assets/${file}`;

export const assets = {
  hero:     { src: at("s01-gallery-hero-hut-dusk-1600x1067-v1.jpg"), subject: "50% 42%" },
  dining:   { src: at("s01-gallery-s1-dining-room-1200x800-v1.jpg"), subject: "50% 50%" },
  arcade:   { src: at("s01-gallery-s2-arcade-1000x1000-v1.jpg"), subject: "50% 50%" },
  bedroom:  { src: at("s01-gallery-s3-bedroom-1200x900-v1.jpg"), subject: "50% 50%" },
  kitchen:  { src: at("s01-gallery-s4-kitchen-1200x800-v1.jpg"), subject: "50% 50%" },
  bed1:     { src: at("s01-about-bed1-king-1000x1000-v1.jpg"), subject: "50% 50%" },
  bed2:     { src: at("s01-about-bed2-booth-bedroom-1000x1000-v1.jpg"), subject: "50% 50%" },
  saladBar: { src: at("s01-amenities-tile-salad-bar-1000x1000-v1.jpg"), subject: "50% 55%" },
  hosts:    { src: at("s01-host-avatar-hosts-400x400-v1.png"), subject: "50% 50%" },
  priya:    { src: at("s01-reviews-r1-priya-200x200-v1.png"), subject: "50% 50%" },
  tomas:    { src: at("s01-reviews-r2-tomas-200x200-v1.png"), subject: "50% 50%" },
  map:      { src: at("s01-location-map-strip-1400x1400-v1.png"), subject: "50% 50%" },
};
