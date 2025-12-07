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

      <div className="max-w-4xl 2xl:max-w-6xl mx-auto justify-center items-center pt-[300px] md:pt-14 px-4 sm:px-6">
        <Link className="flex flex-row justify-center items-center" href={"/"}>
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
        <h1 className="font-inter-bold text-center tracking-tighter text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold justify-center items-center mt-4">
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

        {/* CTA Card */}
        <div className="my-6 sm:my-10">
          <CTACard />
        </div>

        <div className="flex justify-center items-center p-3 mb-5">
          <p
            style={{ fontStyle: "italic" }}
            className="font-instrument-serif text-lg sm:text-3xl text-center  px-4"
          >
            See our Craft
          </p>
        </div>

        {/* // promo videos section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center justify-center mx-auto">
          <VideoPromoCard
            href="https://drive.google.com/file/d/19c_2-gXI7VI86C3Rgq8_fv5lfKwTkSoe/view?usp=drive_link"
            imageSrc={Promo1}
            alt="Promo video 1"
            width={400}
            height={400}
          />
          <VideoPromoCard
            href="https://drive.google.com/file/d/1OTBqxZlmLR15uwdu-vjPOZGUmM-kdz0f/view?usp=sharing"
            imageSrc={Promo2}
            alt="Promo video 2"
            width={500}
            height={500}
            containerWidthClass="md:w-[430px]"
          />
          <VideoPromoCard
            href="https://drive.google.com/file/d/1UWBeJ2NXiBA_DtvBhORiEQb5-cQXKZO7/view?usp=sharing"
            imageSrc={Promo3}
            alt="Promo video 3"
            width={500}
            height={500}
            containerWidthClass="md:w-[430px]"
            className="col-span-1 md:col-span-2 justify-self-center"
          />
        </div>
        <Link
          target="_blank"
          style={{ marginTop: 20 }}
          href="https://www.buildnow.me/"
          className="font-inter-bold tracking-tighter text-sm justify-center items-center text-white text-md px-4"
        >
          <div className="flex flex-row gap-2 sm:gap-4 max-w-sm mx-auto justify-center items-center bg-orange-500 rounded-full p-2 sm:p-3">
            <p className="font-inter-bold text-center tracking-tighter text-xs sm:text-sm justify-center items-center text-white">
              We also design, develop and launch mobile apps.
            </p>

            <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          </div>{" "}
        </Link>
        <Link href={"/"}>
          <h1
            style={{ fontStyle: "italic" }}
            className="font-instrument-serif text-lg sm:text-xl text-center  px-4"
          >
            animated.so
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
