"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//import { useRouter } from "next/router";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white  p-4 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="font-bold text-lg text-emerald-800">
            MyWebsite
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className=" hover:text-emerald-700 ">
            Home
          </a>
          <a href="#" className=" hover:text-emerald-700">
            About
          </a>
          <a href="#" className=" hover:text-emerald-700">
            Services
          </a>
          <a href="#" className=" hover:text-emerald-700">
            Contact
          </a>

          <a href="/pages/signup" className="text-emerald-700 underline">
            sign up
          </a>
          <Button
            className="bg-emerald-700 hover:bg-emerald-800"
            onClick={() => {
              router.push("/pages/login");
            }}
          >
            Login
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:hidden">
          <Button
            className="bg-emerald-700 mr-5 hover:bg-emerald-800"
            onClick={() => {
              router.push("/pages/login");
            }}
          >
            Login
          </Button>

          <button
            onClick={toggleMenu}
            className="text-black hover:text-emerald-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 ">
          <a href="/" className="block px-10 py-2 hover:text-emerald-700">
            Home
          </a>
          <a href="#" className="block  px-10 py-2 hover:text-emerald-700">
            About
          </a>
          <a href="#" className="block  px-10 py-2 hover:text-emerald-700">
            Services
          </a>
          <a href="#" className="block px-10 py-2 hover:text-emerald-700">
            Contact
          </a>

          <a
            href="/pages/signup"
            className="text-emerald-700 ml-5 underline hover:text-emerald-800 "
          >
            sign up
          </a>
        </div>
      )}
    </header>
  );
}
