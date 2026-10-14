import Image from "next/image";

interface ArtPlaceholderProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}

export function ArtPlaceholder({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: ArtPlaceholderProps) {
  return (
    <figure className={`art-placeholder ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 100vw, 55vw"
      />
      <figcaption>
        <span className="art-placeholder__dot" />
        {label}
      </figcaption>
    </figure>
  );
}
