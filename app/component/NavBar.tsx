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
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white font-bold text-lg">
            MyWebsite
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-white hover:bg-sky-950">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
          <Button
            className="bg-gray-700"
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
          <button onClick={toggleMenu} className="text-white">
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
        <div className="md:hidden bg-gray-700 py-2">
          <a href="#" className="block text-white px-4 py-2">
            Home
          </a>
          <a href="#" className="block text-white px-4 py-2">
            About
          </a>
          <a href="#" className="block text-white px-4 py-2">
            Services
          </a>
          <a href="#" className="block text-white px-4 py-2">
            Contact
          </a>
          <Button
            className="bg-gray-900 ml-10"
            onClick={() => {
              router.push("/pages/login");
            }}
          >
            Login
          </Button>
        </div>
      )}
    </header>
  );
}
