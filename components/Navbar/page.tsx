'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gantabyaLogo from '../../logo/gantabyalogo.png';

function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex items-center py-2"
    >
      <span
        className={`text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#00d65c] transition-all duration-300 ease-out ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/electric', label: 'Our Bikes' },
    { href: '/technology', label: 'Technology' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/Support', label: 'Support' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_-10px_rgba(0,214,92,0.15)]'
            : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border-b border-transparent'
        }`}
      >
        {/* signature top hairline: green sweep */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00d65c] to-transparent opacity-70" />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center gap-3 cursor-pointer group">
              <div className="absolute -inset-3 rounded-full bg-[#00d65c]/0 group-hover:bg-[#00d65c]/10 blur-xl transition-all duration-300" />
              <Image
                src={gantabyaLogo}
                alt="Gantabya logo"
                width={120}
                height={40}
                className="relative h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 md:h-12"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/Testride">
                <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#00d65c] px-6 xl:px-7 py-2.5 font-bold text-black text-sm tracking-wide cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_0_0_0_rgba(0,214,92,0.5)] hover:shadow-[0_0_24px_2px_rgba(0,214,92,0.45)]">
                  <span className="absolute inset-0 -translate-x-full bg-white/25 skew-x-[-20deg] transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative">Book Test Ride</span>
                  <ArrowUpRight className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d65c]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 top-16 bg-black/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col h-full px-6 py-10 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-white/10 py-5 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : '0ms' }}
                >
                  <span className="text-3xl font-bold text-white tracking-tight">{item.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-[#00d65c]" />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#00d65c] text-black px-6 py-4 font-bold text-lg rounded-full hover:bg-[#00b34d] transition-all duration-200 cursor-pointer">
                  Book Test Ride
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}
