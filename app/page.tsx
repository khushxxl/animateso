"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTACard } from "@/components/cta-card";
import { VideoPromoCard } from "@/components/video-promo-card";
import { TestimonialCard } from "@/components/testimonial-card";
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
    <div className="relative  w-screen flex flex-col justify-center items-center bg-black">
      {/* Grid Background */}

      <div className="flex flex-col lg:flex-row  w-full ">
        <div
          className=" lg:w-[40%] h-[50vh] md:sticky md:top-0  lg:h-screen min-h-[500px] rounded-2xl lg:rounded-none mt-3 lg:mt-0 lg:min-h-screen"
          style={{
            backgroundImage: "url('/placeholder.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="flex  flex-col  h-full justify-center items-center md:items-start md:justify-start py-8 lg:py-0">
            <Image
              src={Logo2}
              alt="Placeholder"
              width={100}
              height={100}
              className="object-contain md:ml-10 md:mt-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
            />
            <h1 className="font-inter-bold  text-white mb-10 md:mb-0 text-center md:text-left tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-3xl  font-bold justify-center items-center mt-4 sm:mt-6 lg:mt-5 px-4">
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
            <div className="flex flex-col gap-4  md:absolute md:bottom-10 w-full justify-center items-center ">
              <div className="w-full flex justify-center items-center">
                <CTACard />
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
              <p
                style={{ fontFamily: "var(--font-instrument-serif)" }}
                className="text-lg sm:text-xl lg:text-2xl text-white text-center italic"
              >
                animated.so
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-full mt-5 justify-center items-center overflow-y-auto py-8 lg:py-0 px-4 sm:px-6 lg:px-0">
          <h1
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="text-white text-5xl font-bold"
          >
            Our Craft
          </h1>
          <VideoPromoCard
            href="https://pub-493fc4d6a8154323a65d213627b84bcf.r2.dev/fload%20v3.mp4"
            imageSrc={Promo2}
            alt="Promo video 2"
            width={600}
            height={300}
            containerWidthClass="w-full md:w-[600px] xl:w-[1000px]"
          />
          <VideoPromoCard
            href="https://ik.imagekit.io/m9addwbun/tlv%20price%20watch%20final%202.mp4"
            imageSrc={Promo2}
            alt="Promo video 2"
            width={600}
            height={300}
            containerWidthClass="w-full md:w-[600px] xl:w-[1000px]"
          />
          <VideoPromoCard
            href="https://ik.imagekit.io/m9addwbun/datafa.st%20demo%20(1).mp4"
            imageSrc={Promo3}
            alt="Promo video 3"
            width={300}
            height={300}
            containerWidthClass="w-full md:w-[600px] xl:w-[1000px]"
          />
          <VideoPromoCard
            href="https://ik.imagekit.io/m9addwbun/promo-1.mp4"
            imageSrc={Promo1}
            alt="Promo video 1"
            width={200}
            height={200}
            containerWidthClass="w-full  md:w-[600px] xl:w-[1000px] "
            className=""
          />

          {/* <div className="w-full sm:w-[1000px] flex flex-col gap-4 justify-center items-center mt-10 mb-10">
            <h1
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="text-white text-5xl font-bold mb-6"
            >
              Testimonials
            </h1>
            <div className="flex flex-col gap-4">
              <TestimonialCard
                quote="animated.so created a fantastic product demo for our TLV Price Watch by Viti Science app. Communication was clear and professional, and they quickly understood our goals and target audience. They were attentive to detail, fast with revisions, and delivered high-quality work under a tight timeline. Highly recommended!"
                author="Máté Szilcz"
                role="CEO & Founder"
                company="Viti Science"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
