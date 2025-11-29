"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { UtensilsCrossed, Sparkles, Crown, Mountain, Instagram, Facebook, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Alpine Luxe"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Alpine Luxe Switzerland"
          description="Experience unparalleled luxury in the heart of the Swiss Alps. Where mountain majesty meets sophisticated elegance."
          tag="5-Star Hospitality"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379907837-vql07khh.jpg"
          imageAlt="Breathtaking view of Alpine luxury resort nestled in Swiss mountains"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Explore Rooms", href: "rooms" },
            { text: "Book Your Stay", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="A sanctuary of refinement overlooking pristine Alpine vistas, where Swiss hospitality meets world-class luxury accommodations and bespoke service excellence"
          buttons={[
            { text: "Discover Our Story", href: "#" },
            { text: "Browse Suites", href: "rooms" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFive
          title="Luxury Amenities"
          description="Discover world-class facilities and services designed for your ultimate comfort"
          tag="Premium Services"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            { title: "Michelin-Starred Dining", icon: UtensilsCrossed },
            { title: "Alpine Spa & Wellness", icon: Sparkles },
            { title: "Concierge Service", icon: Crown },
            { title: "Mountain Activities", icon: Mountain }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Exquisite Suites & Rooms"
          description="Each room is a masterpiece of Alpine design with panoramic mountain views"
          tag="Accommodations"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "deluxe",
              brand: "Alpine Luxe",
              name: "Deluxe Room",
              price: "CHF 450",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379908341-v339gih7.jpg",
              imageAlt: "Deluxe room with mountain views"
            },
            {
              id: "suite",
              brand: "Alpine Luxe",
              name: "Panoramic Room",
              price: "CHF 750",
              rating: 5,
              reviewCount: "312",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379908924-pn5zmv0u.jpg",
              imageAlt: "Luxury panoramic suite"
            },
            {
              id: "presidential",
              brand: "Alpine Luxe",
              name: "Presidential Suite",
              price: "CHF 1200",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379909570-242wvmtk.jpg",
              imageAlt: "Presidential suite with Alpine views"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from travelers who have experienced Alpine Luxe excellence"
          tag="Reviews"
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Margarethe Hoffmann",
              role: "CEO, Global Enterprises",
              testimonial: "An absolutely sublime experience. The attention to detail, the breathtaking views, and the impeccable service made this the most memorable stay of my life.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379911427-sihmlph6.jpg",
              imageAlt: "Margarethe Hoffmann"
            },
            {
              id: "2",
              name: "Alexander Richter",
              role: "Art Collector, Munich",
              testimonial: "The Alpine Luxe represents the pinnacle of Swiss hospitality. Every moment felt carefully curated for maximum comfort and elegance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379912098-lt854307.jpg",
              imageAlt: "Alexander Richter"
            },
            {
              id: "3",
              name: "Victoria Sterling",
              role: "Travel Journalist",
              testimonial: "I have stayed at luxury hotels worldwide, and Alpine Luxe stands above them all. The combination of location, service, and cuisine is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379912821-uny41a1c.jpg",
              imageAlt: "Victoria Sterling"
            },
            {
              id: "4",
              name: "Philippe Dubois",
              role: "Wine Connoisseur, Paris",
              testimonial: "The wine selection, the culinary expertise, and the mountain serenity create an experience that transcends ordinary hospitality into pure art.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379913875-tuyvtw45.jpg",
              imageAlt: "Philippe Dubois"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Plan Your Alpine Escape"
          description="Subscribe to our exclusive newsletter for special offers, seasonal packages, and insider access to exclusive Alpine Luxe experiences."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764379914405-4mg9pkpv.jpg"
          imageAlt="Luxury hotel lobby"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alpine Luxe"
          copyrightText="© Alpine Luxe Switzerland, 2025. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}