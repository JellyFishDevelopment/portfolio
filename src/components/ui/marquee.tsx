"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends React.ComponentProps<"div"> {
  /**
   * Direction of the animation
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  direction = "horizontal",
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      role="marquee"
      data-slot="marquee"
      data-direction={direction}
      data-reverse={reverse}
      data-pause-on-hover={pauseOnHover}
      data-repeat={repeat}
      className={cn(
        "group/marquee flex w-full min-w-0 overflow-hidden [--duration:20s] [--gap:1.25rem] gap-[var(--gap)]",
        direction === "horizontal" ? "flex-row" : "flex-col",
        "has-[[data-fade=left]]:[mask-image:linear-gradient(to_right,transparent,black_20%)]",
        "has-[[data-fade=right]]:[mask-image:linear-gradient(to_left,transparent,black_20%)]",
        "has-[[data-fade=top]]:[mask-image:linear-gradient(to_bottom,transparent,black_20%)]",
        "has-[[data-fade=bottom]]:[mask-image:linear-gradient(to_top,transparent,black_20%)]",
        "has-[[data-fade=vertical]]:[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]",
        "has-[[data-fade=horizontal]]:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            data-slot={`marquee-repeat-${i + 1}`}
            className={cn("flex min-w-0 shrink-0 justify-around gap-[var(--gap)]", {
              "animate-marquee flex-row": direction === "horizontal",
              "animate-marquee-vertical flex-col": direction === "vertical",
              "group-hover/marquee:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function MarqueeFade({
  fade,
}: {
  fade: "left" | "right" | "top" | "bottom" | "horizontal" | "vertical";
}) {
  return (
    <div
      data-slot="marquee-fade"
      data-fade={fade}
      className="hidden"
      aria-hidden="true"
    />
  );
}

export { Marquee, MarqueeFade };
