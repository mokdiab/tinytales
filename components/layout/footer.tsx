'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const letUsHelpLinks = [
    { title: "My Account", href: "/account" },
    { title: "FAQs", href: "/faqs" },
    { title: "Contact & Support", href: "/contact" },
    { title: "Categories", href: "/categories" },
    { title: "All Products", href: "/products" },
  ];

  const policiesLinks = [
    { title: "Refund Policy", href: "/refund-policy" },
    { title: "About Us", href: "/about-us" },
    { title: "Cancellation Policy", href: "/cancellation-policy" },
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://whatsapp.com", label: "WhatsApp" },
    { icon: FaTelegramPlane, href: "https://telegram.org", label: "Telegram" },
  ];

  return (
    <footer className="relative mt-8 md:mt-12 py-4 bg-[#020202B2] opacity-70 text-white overflow-hidden">
      <div className="absolute flex justify-center items-center inset-0 opacity-20">
        <Image
          src="/images/products/blueshirt.png"
          alt="Footer background"
          width={250}
          height={250}
          className="object-cover object-center"
        />
      </div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="hidden lg:grid lg:grid-cols-15 gap-12">
          <div className="space-y-4 col-span-4">
            <Link href="/">
              <Image 
                src="/images/icons/footerlogo.png" 
                alt="Tinytales" 
                width={65} 
                height={51}
                className="mb-4"
              />
            </Link>
            <p className="text-md text-gray-300 leading-relaxed">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae ipsam in eos qui consequatur ab .Soluta dolor quae ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div className="col-span-3">
            <h3 className="text-[1.5rem] font-semibold mb-4">Let Us Help</h3>
            <ul className="space-y-3">
              {letUsHelpLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-md text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3">
            <h3 className="text-[1.5rem] font-semibold mb-4">Policies</h3>
            <ul className="space-y-3">
              {policiesLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-md text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-5 flex flex-col justify-center gap-2">
            <h3 className="text-2xl font-semibold mb-4">Send Email</h3>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12 rounded-lg"
                  required
                />
                <Button
                  type="submit"
                  className="bg-primary-foreground hover:bg-[#B5977D] text-white px-8 h-12 rounded-lg font-medium"
                >
                  Send
                </Button>
              </div>
            </form>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9  hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          <div className="space-y-4">
            <Link href="/">
              <Image 
                src="/images/icons/footerlogo.png" 
                alt="Tinytales" 
                width={65} 
                height={51}
                className="mb-3"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit amet, nonummy
            </p>
          </div>

     <div className="flex gap-4">     <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+8701928491" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <IoCallOutline className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+87 01928491</span>
              </a>
              <a href="mailto:Named@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <IoMailOutline className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Named@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <IoLocationOutline className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">381, cairo, egypt</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help</h3>
            <ul className="space-y-3">
              {letUsHelpLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div></div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Send Email</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 bg-white rounded-lg p-1">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-500 border-0 h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#C4A68C] hover:bg-[#B5977D] text-white px-6 h-11 rounded-md font-medium"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10  hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}