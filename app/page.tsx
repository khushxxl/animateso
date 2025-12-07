"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTACard } from "@/components/cta-card";
import { VideoPromoCard } from "@/components/video-promo-card";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Logo from "@/public/logo.png";
import Placeholder from "@/public/placeholder.png";
import Promo1 from "@/public/thumb-1.png";
import Promo2 from "@/public/thumb-2.png";
import Promo3 from "@/public/thumb-3.png";
import Logo2 from "@/public/logo-2.png";
const HomePage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "book-a-call-with-animated.so",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  const TwitterEmbed = () => {
    return (
      <div>
        <blockquote className="twitter-tweet" data-media-max-width="600">
          <p lang="en" dir="ltr">
            We design mobile apps!{" "}
            <a href="https://t.co/gtyEr1e8BP">pic.twitter.com/gtyEr1e8BP</a>
          </p>
          &mdash; Marcel (@marcelkargul){" "}
          <a href="https://twitter.com/marcelkargul/status/1982915976716005404?ref_src=twsrc%5Etfw">
            October 27, 2025
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    );
  };

  const [showAnimation, setshowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowAnimation(false);
    }, 1000);
  }, []);

  if (showAnimation) {
    return (
      <div className="relative h-screen w-screen flex justify-center items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, transparent, transparent 79px, #80808040 79px, #80808040 80px)",
            maskImage:
              "repeating-linear-gradient(to bottom, black 0px, black 10px, transparent 10px, transparent 20px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, black 0px, black 10px, transparent 10px, transparent 20px)",
          }}
        ></div>
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.8,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Logo}
              className="object-contain"
              alt="logo"
              width={200}
              height={200}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="relative  w-screen flex flex-col justify-center items-center">
      {/* Grid Background */}

      <div className="fixed inset-0 -z-10">
        {/* Vertical dashed lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, transparent, transparent 79px, #80808040 79px, #80808040 80px)",
            maskImage:
              "repeating-linear-gradient(to bottom, black 0px, black 10px, transparent 10px, transparent 20px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, black 0px, black 10px, transparent 10px, transparent 20px)",
          }}
        ></div>
        {/* Horizontal dashed lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 79px, #80808040 79px, #80808040 80px)",
            maskImage:
              "repeating-linear-gradient(to right, black 0px, black 10px, transparent 10px, transparent 20px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0px, black 10px, transparent 10px, transparent 20px)",
          }}
        ></div>
      </div>

      <div className="w-full min-h-screen mx-auto flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:px-0">
        <div
          className="w-full lg:w-[50%] h-[50vh] lg:h-screen min-h-[500px] mt-3 lg:mt-0 lg:min-h-screen"
          style={{
            backgroundImage: "url('/placeholder.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="flex justify-center flex-col items-center h-full py-8 lg:py-0">
            <Image
              src={Logo2}
              alt="Placeholder"
              width={100}
              height={100}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
            />
            <h1 className="font-inter-bold text-center text-white tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold justify-center items-center mt-4 sm:mt-6 lg:mt-20 px-4">
              We create beautiful{" "}
              <span
                style={{ fontStyle: "italic" }}
                className="font-instrument-serif text-orange-500"
              >
                animations
              </span>
              <br />
              for your product
            </h1>
            <div className="my-4 sm:my-6 lg:my-10">
              <CTACard />
            </div>
            <p
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="text-lg sm:text-xl lg:text-2xl text-white italic"
            >
              animated.so
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[50%] justify-center items-center py-8 lg:py-0 px-4 sm:px-6 lg:px-0">
          <h1
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center italic"
          >
            See our Craft
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            <VideoPromoCard
              href="https://drive.google.com/file/d/19c_2-gXI7VI86C3Rgq8_fv5lfKwTkSoe/view?usp=drive_link"
              imageSrc={Promo1}
              alt="Promo video 1"
              width={300}
              height={300}
              containerWidthClass="w-full sm:w-[300px]"
            />
            <VideoPromoCard
              href="https://drive.google.com/file/d/1OTBqxZlmLR15uwdu-vjPOZGUmM-kdz0f/view?usp=sharing"
              imageSrc={Promo2}
              alt="Promo video 2"
              width={300}
              height={300}
              containerWidthClass="w-full sm:w-[300px]"
            />
            <VideoPromoCard
              href="https://drive.google.com/file/d/1UWBeJ2NXiBA_DtvBhORiEQb5-cQXKZO7/view?usp=sharing"
              imageSrc={Promo3}
              alt="Promo video 3"
              width={300}
              height={300}
              containerWidthClass="w-full sm:w-[300px]"
              className="col-span-1 sm:col-span-2 justify-self-center"
            />
          </div>
          <Link
            target="_blank"
            style={{ marginTop: 20 }}
            href="https://www.buildnow.me/"
            className="font-inter-bold tracking-tighter text-sm justify-center items-center text-white text-md px-4 w-full max-w-sm"
          >
            <div className="flex flex-row gap-2 sm:gap-4 max-w-sm mx-auto justify-center items-center bg-orange-500 rounded-full p-2 sm:p-3">
              <p className="font-inter-bold text-center tracking-tighter text-xs sm:text-sm justify-center items-center text-white">
                We also design, develop and launch mobile apps.
              </p>

              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
