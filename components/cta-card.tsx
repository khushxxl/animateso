"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const CTACard = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className="relative border border-gray-200 dark:border-gray-800 rounded-2xl p-4 overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-10 flex text-white flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Text content */}
          <div className="flex-1">
            <h3 className="font-inter-extrabold text-md tracking-tight mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Early Bird Sale
              </div>
            </h3>
            <p
              style={{ fontFamily: "var(--font-inter-bold)" }}
              className=" text-white text-md tracking-tighter"
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
            </p>
          </div>

          {/* Right side - CTA Button */}
          <div>
            <Button
              data-cal-namespace="book-a-call-with-animated.so"
              data-cal-link="khushaal-choithramani-5mvbsx/book-a-call-with-animated.so"
              data-cal-config='{"layout":"month_view"}'
              size="lg"
              className="font-inter-bold text-base px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full"
            >
              Claim Your Spot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
