const googleMapsEmbedUrl =
  "https://www.google.com/maps/d/u/0/embed?mid=1yMAKILL6DTD_LZrhukDOtsxS9gwIDjA&ehbc=2E312F&noprof=1";

export default function ServiceAreaMapEmbed({ title, className = "" }) {
  return (
    <iframe
      src={googleMapsEmbedUrl}
      title={title}
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className={`block h-full w-full border-0 ${className}`}
    />
  );
}
