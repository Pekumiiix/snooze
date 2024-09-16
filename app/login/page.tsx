"use client";

import ProfileForm from "../_components/account-form";
import LoginForm from "../_components/login-form";
import ProfileHero from "../_components/profile-hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginPage() {
  const [page, setPage] = useState<boolean>(true);

  return (
    <main className="flex flex-col items-center">
      <ProfileHero
        type="login"
        className="h-[288px] bg-[url('/assets/images/section.png')]"
        name={`John Doe`}
        pfp={`/assets/images/profile/avatar2.png`}
      />

      <section className="container grid grid-cols-2 py-[60px] gap-[60px]">
        <Image
          src={
            page
              ? "/assets/images/profile/ctn2.png"
              : "/assets/images/profile/ctn3.png"
          }
          alt="Background"
          height={590}
          width={648}
        />

        <div className="flex flex-col">
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col">
              <p className="text-main font-bold text-[40px] leading-[48px]">
                {page ? "Sign Up for Snooze" : "Welcome Back, User!"}
              </p>
              <p className="text-main">
                {page
                  ? "Create your profile to access all features of the app."
                  : "Login to access your profile."}
              </p>
            </div>

            {page ? <ProfileForm /> : <LoginForm />}
          </div>

          <Button
            className="text-main text-sm font-medium p-0 w-fit bg-transparent hover:bg-transparent shadow-none hover:opacity-80 transition-all duration-300"
            onClick={() => setPage(!page)}
          >
            {page
              ? "Already have an account?"
              : "Don't have an account? Create one"}
          </Button>
        </div>
      </section>
    </main>
  );
}
