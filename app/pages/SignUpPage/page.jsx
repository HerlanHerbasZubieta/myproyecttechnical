import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Link from "next/link";
import Image from "next/image";
import SplitBackground from "@/components/SplitBackground";

const SignUpPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center">
    <SplitBackground/>
    <div className="relative z-10 bg-white p-6 md:p-9 rounded-md shadow-lg border border-gray-300 mt-8 mb-1 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl md:ml-8">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Image
            src="/icons/arrow-left.svg"
            alt="Logo"
            width={35}
            height={35}
          />
        </Link>
      </div>

      <div className="flex items-center justify-center mb-4 md:mb-6">
        <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
      </div>
  
      {/* Form */}
      <form className="space-y-4">
        <Input id="name" label="Name" type="text" placeholder="Your name" />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Your email"
        />
        <Input
          id="phone"
          label="Phone"
          type="tel"
          placeholder="Your phone number"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
        />
        <Button bgColor="[#0d3fc9]" textColor="white">
          Create Account
        </Button>
      </form> 
      <p className="mt-4 text-gray-700 text-center">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  </div>
  
  );
};

export default SignUpPage;
