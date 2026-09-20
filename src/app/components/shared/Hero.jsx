import Image from "next/image";
import ActionIcon from "@/app/components/shared/ActionIcon";
import ResponsiveQuoteLink from "@/app/components/shared/ResponsiveQuoteLink";
import { businessInfo, contactLinks } from "@/lib/business";

const buttonStyles = {
  primary:
    "min-h-11 items-center justify-center rounded bg-amber-700 px-4 py-3 text-center font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
  secondary:
    "min-h-11 items-center justify-center rounded border border-white bg-white px-4 py-3 text-center font-bold text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
  home: "min-h-11 items-center rounded bg-amber-700 px-8 py-4 text-xl font-bold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
};

function ActionLink({ action, variant }) {
  const className = action.className || buttonStyles[variant];

  if (action.type === "responsiveQuote") {
    return (
      <ResponsiveQuoteLink
        className={className}
        message={action.message}
        label={action.label}
        ariaLabel={action.ariaLabel}
        actionType={action.actionType}
      />
    );
  }

  return (
    <a
      href={action.href}
      aria-label={action.ariaLabel}
      target={action.target}
      rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex gap-2 ${className}`}
    >
      <ActionIcon actionType={action.actionType} />
      {action.label}
    </a>
  );
}

const homeHero = {
  variant: "home",
  title: "Professional Deep Sofa, Mattress, Carpet & Upholstery Cleaning",
  trustItems: [
    "Stain & odor removal",
    "Deep extraction cleaning",
    "Professional equipment",
    "Safe for pets & kids",
    "Discounts and Low Prices",
    `★ ${businessInfo.googleRating} Google Rating | ${businessInfo.location.label}`,
  ],
  primaryAction: {
    label: "Text Us",
    href: contactLinks.sms,
    actionType: "sms",
    ariaLabel: "Text NovaFiber via SMS",
  },
  backgroundImage: "/image/hero1.jpg",
};

function BottomFade() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 min-h-50 w-full bg-linear-to-t from-white to-transparent"
    />
  );
}

export default function Hero({
  variant = "home",
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  trustItems,
  backgroundImage,
  backgroundPosition = "center",
  backgroundPositionClassName,
  overlay = "default",
  breadcrumb,
}) {
  const content =
    variant === "home" && !title
      ? homeHero
      : {
          variant,
          eyebrow,
          title,
          description,
          primaryAction,
          secondaryAction,
          image,
          trustItems,
          backgroundImage,
          backgroundPosition,
          overlay,
        };

  const resolvedBackgroundImage =
    content.backgroundImage || homeHero.backgroundImage;

  const imagePositionClassName = backgroundPositionClassName
    ? backgroundPositionClassName === "bg-left md:bg-center"
      ? "object-left md:object-center"
      : "object-center"
    : "";

  const backgroundStyle = backgroundPositionClassName
    ? undefined
    : { objectPosition: backgroundPosition };

  const overlayClass =
    overlay === "service" ? "bg-slate-900/55" : "bg-slate-900/60";

  if (content.variant === "home") {
    return (
      <section className="relative w-full overflow-hidden">
        <Image
          src={resolvedBackgroundImage}
          alt=""
          aria-hidden="true"
          fill={true}
          preload={true}
          sizes="100vw"
          className={`object-cover ${imagePositionClassName}`}
          style={backgroundStyle}
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        {/* <div className="relative mx-auto flex h-screen w-full max-w-360 flex-col"> */}
        <div
          data-main-content-start
          className="relative mx-auto flex w-full max-w-360 flex-col pt-16 md:pt-21"
        >
          <div className="flex grow flex-col items-start justify-center gap-6 px-5 text-white sm:px-10 md:px-20">
            <h1 className="mb-4 mt-20 md:mt-30 text-center text-4xl font-bold md:text-7xl">
              {content.title}
            </h1>
            <ul className="list-inside list-disc self-start text-start text-lg sm:pl-12 md:text-xl">
              {content.trustItems.map((item) => (
                <li key={item} className="mb-2 text-2xl">
                  {item}
                </li>
              ))}
            </ul>
            <div className="sm:pl-12">
              <ActionLink action={content.primaryAction} variant="home" />
            </div>
          </div>
        </div>
        <BottomFade />
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={resolvedBackgroundImage}
        alt=""
        aria-hidden="true"
        fill={true}
        preload={true}
        sizes="100vw"
        className={`object-cover ${imagePositionClassName}`}
        style={backgroundStyle}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />

      <div
        data-main-content-start
        className="relative mx-auto w-full max-w-360 pt-16 md:pt-21"
      >
        {breadcrumb && (
          <div className="mt-6 px-5 text-white/90 sm:px-10 md:px-20">
            {breadcrumb}
          </div>
        )}

        <div className="px-5 pb-10 pt-8 text-white sm:px-10 md:px-20 md:pb-16 desktop:pb-20">
          <div className="max-w-3xl">
            {content.eyebrow && (
              <p className="mb-3 text-sm font-medium tracking-widest text-amber-300">
                {content.eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl desktop:text-6xl">
              {content.title}
            </h1>
            {content.description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
                {content.description}
              </p>
            )}
            {content.trustItems?.length > 0 && (
              <ul className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/90">
                {content.trustItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-black/20 px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {content.primaryAction && (
                <ActionLink action={content.primaryAction} variant="primary" />
              )}
              {content.secondaryAction && (
                <ActionLink
                  action={content.secondaryAction}
                  variant="secondary"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomFade />
    </section>
  );
}
