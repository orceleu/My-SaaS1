import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Card className="max-w-sm  mx-auto shadow-md ">
        <br />
        <br />
        <p className="ml-10 font-bold">Create your account</p>
        <form>
          <div className="mx-10">
            <br />
            <div className="mb-5">
              <Label htmlFor="email">Your email address</Label>

              <Input type="email" placeholder="Email" required />
            </div>
            <div className="mb-5">
              <Label htmlFor="password">Your password</Label>
              <Input type="password" placeholder="password" required />
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <Button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800"
            >
              Register
            </Button>
          </div>
        </form>
        <br />
        <br />
        <br />
      </Card>
    </>
  );
}
