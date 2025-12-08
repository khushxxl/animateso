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
  width = 600,
  height = 400,
  className = "",
  containerWidthClass = "md:w-[400px]",
}) => {
  return (
    <div className={`block ${containerWidthClass} mx-auto my-4`}>
      <div className={`relative group overflow-hidden rounded-xl ${className}`}>
        <video
          src={href}
          controls
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-auto object-cover"
          width={width}
          height={height}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
