"use client";

import MobileMenu from "@/app/components/shared/MobileMenu";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-360 w-full md:w-218.5 desktop:w-full bg-[url('/image/hero1.jpg')] bg-cover bg-center min-h-screen min-w-full ">
      <header className="w-full h-screen max-w-360 mx-auto flex flex-col">
        {/* Menu */}
        <nav className="flex justify-between items-center pt-5 md:pt-10 px-5 md:px-20 md:mb-10">
          <a href="#" className="text-white text-[1.75rem] font-bold">
            NovaFiber
          </a>
          <div className="hidden md:flex space-x-10">
            <a href="#features" className="navbar-item">
              Features
            </a>
            <a href="#products" className="navbar-item">
              Products
            </a>
            <a href="#pricing" className="navbar-item">
              Pricing
            </a>
            <a href="#testimonials" className="navbar-item">
              Customer Reviews
            </a>
            <a href="#contacts" className="navbar-item">
              Contacts
            </a>
          </div>
          {/* Mobile Menu */}
          <MobileMenu />
        </nav>

        {/* Hero Content */}

        <div className="px-5 md:px-20 text-white flex flex-col items-start justify-center gap-6 grow">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center">
            Professional Deep Sofa, Mattress, Carpet & Upholstery Cleaning
          </h1>

          <ul className="self-start list-disc list-inside text-lg md:text-xl text-start sm:pl-12">
            <li className="mb-2 text-2xl">Stain & odor removal</li>
            <li className="mb-2 text-2xl">Deep extraction cleaning</li>
            <li className="mb-2 text-2xl">Professional equipment</li>
            <li className="mb-2 text-2xl">Safe for pets & kids</li>
            <li className="mb-2 text-2xl">Discounts and Low Prices</li>
            <li className="mb-2 text-2xl">
              ★ 4.8 Google Rating | Bolingbrook, IL
            </li>
          </ul>

          <div className=" sm:pl-12">
            <a
              href="sms:+13312537855"
              className="bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold py-4 px-8 rounded "
            >
              Text Us
            </a>
          </div>
        </div>
      </header>
      <div className="min-h-50 min-w-full bg-linear-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
