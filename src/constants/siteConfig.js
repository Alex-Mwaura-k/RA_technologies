// constants/siteConfig.js

const phone = "+254729497152";
// Clean non-digit characters for the WhatsApp link (removes +, spaces, etc.)
const cleanPhone = phone.replace(/\D/g, ""); 

// Centralized domain for easy updating
const siteUrl = "https://ra-technologies.onrender.com";

export const SITE_CONFIG = {
  domain: siteUrl,
  brandName: "RAtechnologies.",
  brandShort: "RA",
  copyrightName: "RA_technologies",
  contact: {
    email: "ra.technologies@gmail.com",
    phone: phone,
  },
  platformLinks: [
    { label: "SaaS Solutions", href: "/solutions" },
    { label: "The Academy", href: "/academy" },
    { label: "About Us", href: "/#about" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "#" },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ratchnologies/" },
    { label: "X", href: "https://x.com/yourhandle" },
    { label: "Instagram", href: "https://www.instagram.com/ra_technologies_" },
    { label: "WhatsApp", href: `https://wa.me/${cleanPhone}` }, 
  ],
};