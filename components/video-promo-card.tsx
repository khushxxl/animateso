"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { PlayIcon } from "lucide-react";

interface VideoPromoCardProps {
  href: string;
  imageSrc: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerWidthClass?: string;
}

export const VideoPromoCard: React.FC<VideoPromoCardProps> = ({
  href,
  imageSrc,
  alt,
  width = 400,
  height = 400,
  className = "",
  containerWidthClass = "md:w-[400px]",
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      className={`w-full md:w-auto ${className}`}
    >
      <div className={`relative w-full ${containerWidthClass} rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 rounded-image`}>
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 rounded-2xl sm:rounded-3xl flex justify-center items-center">
          <PlayIcon
            fill="white"
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          />
        </div>
      </div>
    </Link>
  );
};

