import {
  Compass,
  Ruler,
  Sofa,
  KeyRound,
  Award,
  Users,
  Building2,
  ThumbsUp,
} from "lucide-react";

/**
 * Central content source for the site.
 * Keeping copy + asset references here keeps the components presentational
 * and makes future content edits a single-file change.
 */

export const brand = {
  name: "Spoterior",
  logo: "/images/brand-logo.png",
  tagline: "Luxury Interior Design Studio",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Award-Winning Design Studio",
  title: "Luxury Interior Design for Modern Living",
  description:
    "We create stunning residential and commercial interiors with innovative designs, premium materials, and exceptional craftsmanship. Let us transform your vision into a beautiful reality.",
  primaryCta: { label: "Explore Now", href: "#portfolio" },
  secondaryCta: { label: "Book a Consultation", href: "#contact" },
  image: "/images/hero_image_3.png",
  imageAlt: "Elegant contemporary living room designed by our studio",
  floatingCard: {
    value: "4.9",
    label: "Average client rating",
    note: "500+ spaces transformed",
  },
  highlight: "Trusted since 1994 · 35 industry awards",
};

export const marqueeItems = [
  "Tired of the ordinary? This is your secret escape.",
  "Bespoke residential interiors",
  "Commercial & hospitality design",
  "Turnkey project delivery",
];

export const services = [
  {
    icon: Compass,
    title: "Design Consultation",
    text: "A considered discovery process that translates your lifestyle and brand into a clear, buildable design direction.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    text: "Intelligent layouts, technical drawings and 3D visualisation that maximise light, flow and everyday function.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    text: "Hand-crafted joinery and statement pieces made from premium, responsibly sourced materials.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Delivery",
    text: "Dedicated project management from first sketch to final styling — you simply turn the key and arrive home.",
  },
];

export const stats = [
  { icon: Building2, value: "250+", label: "Projects completed" },
  { icon: Award, value: "35", label: "Design awards" },
  { icon: Users, value: "500+", label: "Happy clients" },
  { icon: ThumbsUp, value: "98%", label: "Client retention" },
];

export const gallery = {
  eyebrow: "Our Portfolio",
  title: "Selected Work",
  subtitle:
    "A curated look at the residences, workspaces and hospitality interiors we have brought to life.",
  images: [
    { src: "/images_company/page7_img4.jpeg", alt: "Warm minimal living space" },
    { src: "/images_company/page12_img2.jpeg", alt: "Contemporary dining room" },
    { src: "/images_company/page7_img7.jpeg", alt: "Sculptural lounge interior" },
    { src: "/images_company/page8_img4.jpeg", alt: "Refined bedroom suite" },
    { src: "/images_company/page8_img5.jpeg", alt: "Boutique hotel reception" },
    { src: "/images_company/page9_img7.jpeg", alt: "Modern workspace interior" },
    { src: "/images_company/page13_img2.jpeg", alt: "Bright open-plan kitchen" },
  ],
};

export const showcase = {
  eyebrow: "Explore Our Projects",
  title: "Spaces Designed to be Lived In",
  subtitle:
    "Scroll through a selection of recent commissions — each one tailored to the people and the place.",
  projects: [
    {
      src: "/images_company/page7_img4.jpeg",
      title: "The Marlowe Residence",
      category: "Residential",
    },
    {
      src: "/images_company/page12_img2.jpeg",
      title: "Aurum Penthouse",
      category: "Penthouse",
    },
    {
      src: "/images_company/page7_img7.jpeg",
      title: "Nova Boutique Hotel",
      category: "Hospitality",
    },
    {
      src: "/images_company/page8_img4.jpeg",
      title: "The Glass House",
      category: "Residential",
    },
    {
      src: "/images_company/page8_img5.jpeg",
      title: "Velvet Lounge",
      category: "Hospitality",
    },
    {
      src: "/images_company/page9_img7.jpeg",
      title: "Studio Atelier",
      category: "Workspace",
    },
    {
      src: "/images_company/page13_img2.jpeg",
      title: "Nordic Loft",
      category: "Residential",
    },
    {
      src: "/images_company/page10_img2.jpeg",
      title: "The Ivory Kitchen",
      category: "Kitchen",
    },
  ],
};

export const testimonials = {
  eyebrow: "Client Stories",
  title: "Loved by Homeowners & Brands",
  items: [
    {
      quote:
        "They understood our family's rhythm before we did. Every corner feels intentional, calm and unmistakably ours.",
      name: "Eleanor Whitfield",
      role: "Homeowner, Marlowe Residence",
      rating: 5,
    },
    {
      quote:
        "The studio delivered our flagship hotel ahead of schedule without compromising a single detail. A truly world-class team.",
      name: "Daniel Okafor",
      role: "Director, Nova Hotels Group",
      rating: 5,
    },
    {
      quote:
        "From the first sketch to the final styling, the process was effortless. The result exceeded every expectation we had.",
      name: "Priya Raman",
      role: "Founder, Studio Atelier",
      rating: 5,
    },
  ],
};

export const cta = {
  eyebrow: "Start Your Project",
  title: "Let's Design Something Extraordinary",
  text: "Tell us about your space and we'll craft a design proposal shaped entirely around the way you want to live and work.",
  primaryCta: { label: "Book a Consultation", href: "#contact" },
  secondaryCta: { label: "View Portfolio", href: "#portfolio" },
};

export const footer = {
  blurb:
    "A luxury interior design studio creating bespoke residential and commercial spaces with premium materials and timeless craft.",
  columns: [
    {
      title: "Main Links",
      links: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Our Services", href: "#services" },
        { label: "Contact Us", href: "#contact" },
        { label: "Journal & News", href: "#portfolio" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "About Us", href: "#services" },
        { label: "Privacy Policy", href: "#contact" },
        { label: "Terms & Conditions", href: "#contact" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    text: "Interiors insight, project reveals and studio news — once a month, no noise.",
    placeholder: "Enter your Email...",
  },
  socialTitle: "Follow Us",
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
};
