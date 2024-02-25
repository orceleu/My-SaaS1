"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";
//import { ChevronRightIcon } from "@radix-ui/react-icons"
export default function FloatinButton() {
  return (
    <div className="fixed bottom-10 right-7">
      <Sheet>
        <Button asChild variant="outline" size="default">
          <SheetTrigger>AI assitant</SheetTrigger>
        </Button>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            className="bg-gray-700 mt-10"
          >
            show alert
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
