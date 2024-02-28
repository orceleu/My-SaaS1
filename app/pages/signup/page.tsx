"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function page() {
  //const [createUserWithEmailAndPassword1]: any =
  // useCreateUserWithEmailAndPassword(auth);

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [ErrorText, SetTextError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log({ Email, Password });
    try {
      const res = await createUserWithEmailAndPassword(auth, Email, Password);
      console.log({ res });
      SetEmail("");
      SetPassword("");
      router.push("/pages/login");
    } catch (error) {
      SetTextError("your password length must be > 6 ");
      console.error(error);
    }
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    SetEmail(email);
    SetTextError("");
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    SetPassword(password);
    SetTextError("");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Card className="max-w-sm  mx-auto shadow-md ">
        <br />
        <br />
        <p className="ml-9 font-bold">Create your account</p>
        <p className="ml-9 mt-5 text-sm text-red-800">{ErrorText}</p>
        <form onSubmit={handleSignUp}>
          <div className="mx-10">
            <br />
            <div className="mb-5">
              <Label htmlFor="email">Your email address</Label>

              <Input
                type="email"
                placeholder="Email"
                value={Email}
                onChange={handleChangeEmail}
                required
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="password">Your password</Label>
              <Input
                type="password"
                placeholder="password"
                value={Password}
                onChange={handleChangePassword}
                required
              />
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <Button
              className="bg-emerald-700 hover:bg-emerald-800"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>

        <br />
        <br />
        <br />
      </Card>
      <br />
      <br />
    </>
  );
}
