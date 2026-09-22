const iconSources = {
  location: "/svg/location.svg",
  phone: "/svg/telephone.svg",
  sms: "/svg/sms.svg",
  whatsapp: "/svg/whatsapp.svg",
};

export default function ActionIcon({ actionType, className = "size-5" }) {
  const source = iconSources[actionType];

  if (!source) {
    return null;
  }

  const mask = `url("${source}") center / contain no-repeat`;

  return (
    <span
      aria-hidden="true"
      data-action-icon={actionType}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
