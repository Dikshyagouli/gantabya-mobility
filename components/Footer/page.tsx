import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import gantabyaLogo from '../../logo/gantabyalogo.png';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#00d65c] transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#00d65c] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 sm:px-8 overflow-hidden">
      {/* signature top hairline: green sweep, echoes navbar */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00d65c] to-transparent opacity-70" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00d65c]/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top: brand + CTA banner */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-14 border-b border-white/10">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src={gantabyaLogo}
                alt="Gantabya logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
              <span className="text-2xl font-bold tracking-tight group-hover:text-[#00d65c] transition-colors">
                Gantabya Mobility
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Leading Nepal&apos;s EV revolution since 2019. Premium electric motorcycles built for the
              future of mobility.
            </p>
          </div>

          <Link href="/Testride">
            <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#00d65c] px-7 py-3 font-bold text-black text-sm tracking-wide cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_0_0_0_rgba(0,214,92,0.5)] hover:shadow-[0_0_24px_2px_rgba(0,214,92,0.45)]">
              <span className="absolute inset-0 -translate-x-full bg-white/25 skew-x-[-20deg] transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Book Test Ride</span>
              <ArrowUpRight className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-14 border-b border-white/10">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/electric">Our Bikes</FooterLink>
              <FooterLink href="/technology">Technology</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/Testride">Book Test Ride</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/Support">FAQs</FooterLink>
              <FooterLink href="/Support">Warranty</FooterLink>
              <FooterLink href="/Support">Service Centers</FooterLink>
              <FooterLink href="/Contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <MapPin className="text-[#00d65c]" size={15} />
                </span>
                Kathmandu, Nepal
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <Phone className="text-[#00d65c]" size={15} />
                </span>
                +977 1-XXXXXXX
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 shrink-0">
                  <Mail className="text-[#00d65c]" size={15} />
                </span>
                info@gantabya.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-gray-500 text-sm">
            © 2026 Gantabya Mobility. All Rights Reserved.
          </span>
          <span className="text-gray-600 text-xs uppercase tracking-[0.14em]">
            Made in Kathmandu
          </span>
        </div>
      </div>
    </footer>
  );
}
