import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { services } from "@/lib/constants";

function ServiceCard({ service, index }) {
  const imagePath = path.join(
    process.cwd(),
    "public",
    service.image.replace(/^\/+/, ""),
  );
  const hasImage = existsSync(imagePath);
  const desktopPosition =
    index === 3
      ? "desktop:col-start-2"
      : index === 4
        ? "md:col-start-2 desktop:col-start-4"
        : "";

  return (
    <article
      className={`h-full overflow-hidden rounded-4xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg md:col-span-2 desktop:col-span-2 ${desktopPosition}`}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
        {hasImage ? (
          <Image
            src={service.image}
            alt={service.alt}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={service.alt}
            className="absolute inset-0 flex items-center justify-center bg-gray-100 px-6 text-center text-sm text-gray-500"
          >
            Service image coming soon
          </div>
        )}
      </div>

      <div className="flex h-full flex-col px-6 py-7">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="mt-4 leading-relaxed text-gray-600">
          {service.description}
        </p>

        {service.href && (
          <a
            href={service.href}
            className="mt-6 self-start text-amber-600 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            Learn more
          </a>
        )}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full max-w-360 bg-[#F7F7F7] px-5 py-10 sm:px-10 md:px-20 desktop:py-20"
    >
      <div className="mx-auto flex w-full flex-col items-center">
        <div className="max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-amber-600">
            OUR SERVICES
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Professional Cleaning Services
          </h2>
          <p className="mt-5 text-gray-600">
            Professional cleaning for sofas, upholstered furniture, mattresses
            and carpets in Bolingbrook and surrounding Chicago suburbs.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-7 md:grid-cols-4 desktop:grid-cols-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <p className="max-w-2xl text-gray-600">
            Not sure which service you need? Send us photos and we&apos;ll help
            you choose the right cleaning option.
          </p>
          <a
            href="sms:+13312537855"
            className="shrink-0 rounded bg-amber-600 px-4 py-2 font-bold text-white hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
