"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { ArrowRight, Check } from "lucide-react";
import { brand, footer } from "@/lib/siteContent";

const socialIcons = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaYoutube, label: "YouTube" },
];

/** Client Component: the newsletter form keeps local state. */
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={560}
              height={410}
              sizes="(max-width: 768px) 110px, 140px"
            />
          </span>
          <p>{footer.blurb}</p>
          <p className="footer-tagline">{brand.tagline}</p>
        </div>

        {footer.columns.map((column) => (
          <nav
            className="footer-column"
            key={column.title}
            aria-label={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer-newsletter">
          <h3>{footer.newsletter.title}</h3>
          <p className="footer-newsletter-text">{footer.newsletter.text}</p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder={footer.newsletter.placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
            <button type="submit" aria-label="Subscribe to the newsletter">
              {subscribed ? <Check size={18} /> : <ArrowRight size={18} />}
            </button>
          </form>

          <p className="newsletter-note" role="status" aria-live="polite">
            {subscribed ? "Thank you — you're on the list." : ""}
          </p>

          <h3 className="footer-social-title">{footer.socialTitle}</h3>
          <div className="social-icons">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                className="social-icon"
                aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{footer.copyright}</p>
        <ul className="footer-legal">
          <li>
            <a href="#contact">Privacy Policy</a>
          </li>
          <li>
            <a href="#contact">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
