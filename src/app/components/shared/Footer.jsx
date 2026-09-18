"use client";

import Image from "next/image";
import { businessInfo, contactLinks } from "@/lib/business";
import ServiceAreaMapEmbed from "./ServiceAreaMapEmbed";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="max-w-360 w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full min-h-115.5 py-5 sm:py-10 px-5 sm:px-10 md:px-20 bg-[#F7F7F7] flex flex-col items-center justify-center">
        <div className="w-full h-full grow grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {/* Google map */}
          <div className="aspect-4/3 w-full h-full overflow-hidden rounded-xl justify-self-center">
            <ServiceAreaMapEmbed title="NovaFiber service area map" />
          </div>

          <div className="h-full flex flex-col items-center justify-between gap-10 ">
            <div className="flex flex-row w-full items-center justify-center md:justify-between sm:px-5 desktop:px-10 gap-10 sm:gap-20">
              {/* Contacts */}
              <div className="min-h-fit flex flex-col gap-4">
                <p className="mb-2 text-amber-600 text-xl">Contacts</p>

                {/* Address */}
                <p>
                  {businessInfo.location.city}, {businessInfo.location.region},
                  United States
                </p>
                <p>Illinois {businessInfo.location.postalCode}</p>

                {/* Telephone */}
                <a
                  href={contactLinks.telephone}
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/telephone.svg"}
                    alt="Tel"
                    width={20}
                    height={20}
                  />
                  <p>{businessInfo.phoneDisplay}</p>
                </a>

                {/* Email */}
                <a
                  href={contactLinks.email}
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/email.svg"}
                    alt="Email"
                    width={20}
                    height={20}
                  />
                  <p>{businessInfo.email}</p>
                </a>

                <a
                  href={businessInfo.socialProfiles.google}
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/svg/location.svg"}
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <p>Google Profile</p>
                </a>
              </div>

              {/* Social media links */}
              <div className="min-h-fit flex flex-col gap-2">
                <p className="mb-2 text-amber-600 text-xl">Follow Us</p>
                {/* Facebook */}
                <a
                  href={businessInfo.socialProfiles.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/facebook.svg"}
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                  <p>Facebook</p>
                </a>

                {/* Instagram */}
                <a
                  href={businessInfo.socialProfiles.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/instagram.svg"}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                  <p>Instagram</p>
                </a>

                <p className="mb-2 mt-5 text-amber-600 text-xl">Text Us</p>

                {/* SMS */}
                <a
                  href={contactLinks.sms}
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/sms.svg"}
                    alt="Sms"
                    width={20}
                    height={20}
                  />
                  <p>{businessInfo.phone}</p>
                </a>

                {/* WhatsApp */}
                <a
                  href={contactLinks.whatsapp}
                  className="relative flex min-h-11 flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/whatsapp.svg"}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  <p>WhatsApp</p>
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-2">
              <a
                href="https://sites.google.com/view/novafiberllcprivacypolicy/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center"
              >
                Privacy policy
              </a>
              <p>&copy; {new Date().getFullYear()} NovaFiber LLC.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
