interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  sizes?: string;
  preload?: boolean;
}

const OPT_BASE = "/images/opt";

function buildSrcSet(src: string): string | undefined {
  const match = src.match(/\/images\/(.+)\.webp$/);
  if (!match) return undefined;
  const name = match[1];
  return [400, 800, 1200]
    .map((w) => `${OPT_BASE}/${name}-${w}.webp ${w}w`)
    .join(", ");
}

export function Image({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  sizes,
}: ImageProps) {
  const srcSet = buildSrcSet(src);

  function handleLoad(e: preact.JSX.TargetedEvent<HTMLImageElement>) {
    e.currentTarget.classList.add("loaded");
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      className={`image-fade-in ${className}`}
      onLoad={handleLoad}
    />
  );
}
