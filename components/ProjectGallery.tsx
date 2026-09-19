"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryItem = {
  src: string;
  title: string;
  caption: string;
  alt: string;
  tall?: boolean;
  phone?: boolean;
  featured?: boolean;
};

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const hasPhoneItems = items.some((item) => item.phone);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => value === null ? 0 : (value + 1) % items.length);
      if (event.key === "ArrowLeft") setActive((value) => value === null ? 0 : (value - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, items.length]);

  return (
    <>
      <div className={`gallery-grid ${hasPhoneItems ? "gallery-grid-phone" : ""}`}>
        {items.map((item, index) => (
          <figure
            className={[
              "gallery-card",
              item.tall ? "gallery-card-tall" : "",
              item.phone ? "gallery-card-phone" : "",
              item.featured ? "gallery-card-featured" : ""
            ].filter(Boolean).join(" ")}
            key={item.src}
          >
            <button className="gallery-image-button" type="button" onClick={() => setActive(index)} aria-label={`Open ${item.title}`}>
              <span className="gallery-image-frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.phone ? "(max-width: 800px) 100vw, 33vw" : "(max-width: 760px) 100vw, 50vw"}
                  className="gallery-image"
                />
                <span className="gallery-expand">Expand ↗</span>
              </span>
            </button>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${items[active].title} image viewer`} onMouseDown={(event) => {
          if (event.currentTarget === event.target) setActive(null);
        }}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer">×</button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={() => setActive((active - 1 + items.length) % items.length)} aria-label="Previous image">‹</button>
          <figure className="lightbox-figure">
            <div className="lightbox-image-wrap">
              <img src={items[active].src} alt={items[active].alt} />
            </div>
            <figcaption>
              <div>
                <strong>{items[active].title}</strong>
                <span>{items[active].caption}</span>
              </div>
              <a href={items[active].src} target="_blank" rel="noreferrer">Open full size ↗</a>
            </figcaption>
          </figure>
          <button className="lightbox-nav lightbox-next" type="button" onClick={() => setActive((active + 1) % items.length)} aria-label="Next image">›</button>
        </div>
      )}
    </>
  );
}
