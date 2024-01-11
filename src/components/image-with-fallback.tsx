"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ImageWithFallback({ src, alt, classNameWrapper, className, iconFallback, ...props }: Props) {
  const [isError, setIsError] = useState<any | null>(null);

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return isError ? (
    <div className={clsx("flex justify-center bg-dark-quaternary", className && className)}>
      {iconFallback || (
        <picture>
          <img alt="image-broken" src="/images/img-broken.svg" loading="lazy" />
        </picture>
      )}
    </div>
  ) : (
    <picture className={classNameWrapper}>
      <img
        id={src}
        src={src || ""}
        alt={alt}
        className={className}
        loading="lazy"
        {...props}
        onError={() => {
          setIsError(true);
        }}
      />
    </picture>
  );
}

type Props = {
  src: string;
  alt: string;
  classNameWrapper?: string;
  className?: string;
  iconFallback?: any;
} & React.ComponentPropsWithoutRef<"img">;
