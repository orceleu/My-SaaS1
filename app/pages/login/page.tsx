import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  return (
    <form className="max-w-sm mx-auto mt-10">
      <div>
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
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
}
