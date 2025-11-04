import React from "react";
import { Button } from "@/components/ui/button";
import { CTACard } from "@/components/cta-card";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const HomePage = () => {
  const TwitterEmbed = () => {
    return (
      <div>
        <blockquote className="twitter-tweet" data-media-max-width="450">
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
  return (
    <div className="relative">
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

      <div className="max-w-4xl mx-auto justify-center items-center pt-20">
        <h1 className="font-inter-bold  text-center tracking-tighter text-5xl font-bold justify-center items-center">
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

        <div className="flex justify-center items-center pt-10">
          <Button className="font-inter-bold tracking-tighter text-sm justify-center items-center">
            Book a quick call
          </Button>
        </div>

        {/* CTA Card */}
        <div className="my-10">
          <CTACard />
        </div>

        <div className="flex flex-row gap-4 max-w-4xl mx-auto justify-center items-center mb-10">
          <TwitterEmbed />
          <TwitterEmbed />
          <TwitterEmbed />
        </div>
        <Link
          target="_blank"
          style={{ marginTop: 20 }}
          href="https://www.buildnow.me/"
          className="font-inter-bold tracking-tighter text-sm justify-center items-center text-white text-md"
        >
          <div className="flex flex-row gap-4 max-w-sm mx-auto justify-center items-center bg-orange-500 rounded-full p-2">
            <p className="font-inter-bold text-center tracking-tighter text-sm justify-center items-center text-white text-md">
              We also design, develop and launch mobile apps.
            </p>

            <ArrowRightIcon className="w-4 h-4" />
          </div>{" "}
        </Link>
        <Link href={"/"}>
          <h1
            style={{ fontStyle: "italic" }}
            className="font-instrument-serif text-xl text-center mt-2"
          >
            animated.so
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
