// src/components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-white" style={{ color: "black" }}>
      <div className=" flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Mobile Outfits Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-tight">Mobile Outfits</span>
        </Link>

        {/* Center: Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-gray-300 flex items-center gap-1"
            >
              Categories <span>▾</span>
            </button>

            {menuOpen && (
              <div
                onMouseLeave={() => setMenuOpen(false)}
                className="absolute left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl border border-gray-200 z-50"
              >
                <div className="p-4 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Clothing</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/category/men" className="hover:underline">Men</Link></li>
                      <li><Link href="/category/women" className="hover:underline">Women</Link></li>
                      <li><Link href="/category/kids" className="hover:underline">Kids</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Collections</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/category/latest" className="hover:underline">Latest Drops</Link></li>
                      <li><Link href="/category/sale" className="hover:underline">Sale</Link></li>
                      <li><Link href="/category/accessories" className="hover:underline">Accessories</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/category/all" className="hover:text-gray-300">Shop All</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </nav>

        {/* Right: Social + Cart + Account */}
        <div className="flex items-center gap-5 text-sm">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/facebook.svg" alt="Facebook" width={18} height={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.svg" alt="Twitter" width={18} height={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
          </div>

          {/* Cart + Account */}
          <Link href="/cart" className="hover:text-gray-300 hidden sm:inline">Cart</Link>
          <Link href="/account/login" className="hover:text-gray-300 hidden sm:inline">Account</Link>
        </div>
      </div>
    </header>
  );
}
