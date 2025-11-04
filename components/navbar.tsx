"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";

function Navbar() {
  return (
    <div className="top-0 sticky z-50 flex justify-between items-center pt-8 px-10 max-w-4xl mx-auto">
      <Link href={"/"}>
        <h1
          style={{ fontStyle: "italic" }}
          className="font-instrument-serif text-xl"
        >
          animated.so
        </h1>
      </Link>
    </div>
  );
}

export default Navbar;
