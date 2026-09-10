"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ModalWindow from "../shared/ModalWindow";

export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return (
    <>
      <section
        id="features"
        className="py-10 desktop:py-20 w-full max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 px-16 grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-7 items-center justify-center"
      >
        {/* Heading */}
        <div className="min-w-60 pb-6 pl-1.5 desktop:mr-26 self-start desktop:self-center">
          <p className="text-4xl font-bold  md:justify-self-start">
            Why <br /> Choosing Us
          </p>
        </div>

        {/* Features */}

        <div className="max-w-71 justify-self-center">
          <p className="text-2xl font-bold mb-5">Service Area</p>
          <p className="mb-3.5 text-justify">
            We serve Chicago and surrounding areas within a 50 mile radius,
            delivering fast and reliable sofa and carpet cleaning right to your
            doorstep. Wherever you are, we’re ready to help.
          </p>
          <Link
            href="/service-area"
            aria-label="Learn more about NovaFiber service areas"
            className="flex cursor-pointer flex-row items-center justify-start gap-3.5 text-amber-700 transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
          >
            <p>More Info</p>
            <MoveRight
              aria-hidden="true"
              focusable="false"
              className="max-w-12"
              strokeWidth={0.5}
              size={42}
            />
          </Link>
        </div>
        <div className="max-w-71 desktop:justify-self-center">
          <p className="text-2xl font-bold mb-5">Flexible Pricing</p>
          <p className="mb-3.5 text-justify">
            Enjoy transparent, flexible pricing tailored to your needs. We
            provide quick, accurate estimates and personalized solutions—so you
            always know what to expect, with no surprises.
          </p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setModalContent("Pricing");
            }}
            className="flex cursor-pointer flex-row items-center justify-start gap-3.5 text-amber-700 transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
          >
            <p>More Info</p>
            <MoveRight
              className="max-w-12"
              strokeWidth={0.5}
              size={42}
            />
          </button>
        </div>
        <div className="max-w-71 justify-self-center">
          <p className="text-2xl font-bold mb-5">Professional Materials</p>
          <p className="mb-3.5 text-justify">
            We use advanced equipment and high-quality, hypoallergenic cleaning
            solutions that are safe for children and pets—while delivering deep,
            long-lasting results.
          </p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setModalContent("Materials");
            }}
            className="flex cursor-pointer flex-row items-center justify-start gap-3.5 text-amber-700 transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
          >
            <p>More Info</p>
            <MoveRight
              className="max-w-12"
              strokeWidth={0.5}
              size={42}
            />
          </button>
        </div>
      </section>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </>
  );
}
