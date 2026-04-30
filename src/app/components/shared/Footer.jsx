"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-360 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full min-h-115.5 py-5 sm:py-10 px-5 sm:px-10 md:px-20 bg-[#F7F7F7] flex flex-col items-center justify-center">
        <div className="w-full h-full grow grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
          {/* Google map */}
          <div className="relative w-75 sm:w-112.5 h-75 sm:h-112.5  rounded-full overflow-hidden justify-self-center">
            <Image
              src={"/image/google_map.jpg"}
              alt="Map"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              loading="eager"
            />
          </div>

          <div
            id="contacts"
            className="h-full flex flex-col items-center justify-between gap-10 "
          >
            <div className="md:pt-10 sm:pr-10 flex flex-row items-start justify-center gap-10 sm:gap-40 ">
              {/* Contacts */}
              <div className="min-h-fit flex flex-col gap-4">
                <p className="mb-2 text-amber-600 text-xl">Contacts</p>

                {/* Address */}
                <p>Bolingbrook, IL, United States</p>
                <p>Illinois 60440</p>

                {/* Telephone */}
                <a
                  href="tel:+13312537855"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/telephone.svg"}
                    alt="Tel"
                    width={20}
                    height={20}
                  />
                  <p>+1 (331) 253-7855</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:novafiberllc@gmail.com"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/email.svg"}
                    alt="Email"
                    width={20}
                    height={20}
                  />
                  <p>novafiberllc@gmail.com</p>
                </a>

                <a
                  href="https://maps.app.goo.gl/38Ag59oe1xf9eJRz9"
                  className="relative flex flex-row items-center gap-2.5"
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
              <div className="min-h-fit flex flex-col gap-4 mb-10">
                <p className="mb-2 text-amber-600 text-xl">Follow Us</p>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61576447468204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row items-center gap-2.5"
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
                  href="https://www.instagram.com/novafiberllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row items-center gap-2.5"
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

                {/* WhatsApp */}
                <a
                  href="sms:+13312537855"
                  className="relative flex flex-row items-center gap-2.5"
                >
                  <Image
                    src={"/svg/sms.svg"}
                    alt="Sms"
                    width={20}
                    height={20}
                  />
                  <p>+13312537855</p>
                </a>

                {/* SMS */}
                <a
                  href="https://wa.me/13312537855"
                  className="relative flex flex-row items-center gap-2.5"
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
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <a
                href="https://sites.google.com/view/novafiberllcprivacypolicy/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
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
