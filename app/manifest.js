export default function manifest() {
  return {
    name: "Spoterior — Luxury Interior Design Studio",
    short_name: "Spoterior",
    description:
      "Award-winning luxury interior design studio crafting bespoke residential and commercial spaces with premium materials, considered detailing and timeless craftsmanship.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
