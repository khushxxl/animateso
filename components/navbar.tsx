"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";
import Image from "next/image";
import Logo from "@/public/logo.png";

function Navbar() {
  return (
    <div className="top-0 sticky z-50 flex justify-center items-center pt-8 px-10 max-w-4xl mx-auto bg-background">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={80} height={80} />
      </Link>
    </div>
  );
}

export default Navbar;
