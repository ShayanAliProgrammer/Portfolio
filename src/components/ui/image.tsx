"use client";

import { ImageProps, default as NextImage } from "next/image";
import React, { useState } from "react";
import { cn } from "~/lib/utils";

type Props = ImageProps & {
  containerClassName?: string;
};

const Image = React.memo(function Image({
  className,
  containerClassName,
  ...props
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative size-full overflow-hidden rounded-md bg-muted transition-all",
        containerClassName,
        `w-[${props.width}x] h-[${props.height}px]`,
      )}
    >
      <NextImage
        {...props}
        width={0.5}
        height={0.5}
        className={cn(
          "absolute inset-0 size-full object-cover object-center",
          className,
        )}
      />
      <NextImage
        {...props}
        className={cn(
          "relative z-10 size-full object-cover object-center transition-all duration-150",
          {
            "opacity-0": !isLoaded,
            "!opacity-100": isLoaded,
          },
          className,
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
});

export default Image;
