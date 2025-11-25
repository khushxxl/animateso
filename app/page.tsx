"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTACard } from "@/components/cta-card";
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

import { PlayIcon } from "lucide-react";

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
    <div className="relative h-screen w-screen flex flex-col justify-center items-center">
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

        <div className="flex justify-center items-center pt-6 sm:pt-10">
          <Button
            data-cal-namespace="book-a-call-with-animated.so"
            data-cal-link="khushaal-choithramani-5mvbsx/book-a-call-with-animated.so"
            data-cal-config='{"layout":"month_view"}'
            className="font-inter-bold tracking-tighter text-xs sm:text-sm justify-center items-center"
          >
            Book a quick call
          </Button>
        </div>

        {/* CTA Card */}
        <div className="my-6 sm:my-10">
          <CTACard />
        </div>
        {/* // promo videos section */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 max-w-4xl 2xl:max-w-full w-full mx-auto justify-center items-center mb-10 px-4 sm:px-6">
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/19c_2-gXI7VI86C3Rgq8_fv5lfKwTkSoe/view?usp=drive_link"
            }
            className="w-full md:w-auto"
          >
            <div className="relative w-full md:w-[400px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 rounded-image">
              <Image
                src={Promo1}
                alt="logo"
                width={400}
                height={400}
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
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1OTBqxZlmLR15uwdu-vjPOZGUmM-kdz0f/view?usp=sharing"
            }
            className="w-full md:w-auto"
          >
            <div className="relative w-full md:w-[430px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 rounded-image">
              <Image
                src={Promo2}
                alt="logo"
                width={500}
                height={500}
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
