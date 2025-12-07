"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const CTACard = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
      <div
        className="relative border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-10 flex text-white flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
          {/* Left side - Text content */}
          <div className="flex-1 w-full md:w-auto text-center md:text-left">
            <h3 className="font-inter-extrabold text-sm sm:text-md tracking-tight mb-1 sm:mb-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                {/* <div className="w-2 h-2 text-md bg-orange-500 rounded-full animate-pulse" /> */}
                <p className="text-md font-inter-bold">
                  Let us strategise, storyboard <br /> and animate your video.
                </p>
              </div>
            </h3>
            {/* <p
              style={{ fontFamily: "var(--font-inter-bold)" }}
              className="text-white text-sm sm:text-md tracking-tighter"
            >
              <span className="line-through">$500</span>{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif-italic)",
                  fontStyle: "italic",
                }}
                className="text-orange-500 tracking-wider"
              >
                $349
              </span>{" "}
              for next 2 spots
            </p> */}
          </div>

          {/* Right side - CTA Button */}
          <div className="w-full md:w-auto max-w-[200px] md:max-w-none">
            <Button
              data-cal-namespace="book-a-call-with-animated.so"
              data-cal-link="khushaal-choithramani-5mvbsx/book-a-call-with-animated.so"
              data-cal-config='{"layout":"month_view"}'
              size="lg"
              className="font-inter-bold text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full md:w-auto"
            >
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
