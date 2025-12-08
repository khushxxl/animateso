"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: StaticImageData | string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  className = "",
}) => {
  return (
    <div
      className={`relative border border-gray-700 max-w-3xl dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden bg-black/50 ${className}`}
    >
      <div className="relative z-10 flex flex-col gap-4">
        {/* Quote */}
        <div className="flex items-start gap-2">
          <span
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="text-orange-500 text-3xl sm:text-4xl leading-none"
          >
            "
          </span>
          <p
            style={{ fontFamily: "var(--font-inter-bold)" }}
            className="text-white text-sm sm:text-base md:text-lg tracking-tight flex-1"
          >
            {quote}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 sm:gap-4">
          {avatar && (
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-700">
              <Image
                src={avatar}
                alt={author}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="flex flex-col">
            <p
              style={{ fontFamily: "var(--font-inter-bold)" }}
              className="text-white text-sm sm:text-base font-bold"
            >
              {author}
            </p>
            {(role || company) && (
              <p className="text-gray-400 text-xs sm:text-sm">
                {role && <span>{role}</span>}
                {role && company && <span> at </span>}
                {company && <span>{company}</span>}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
