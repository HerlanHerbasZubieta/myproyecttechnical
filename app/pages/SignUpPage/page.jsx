"use client";

import Link from "next/link";
import Image from "next/image";
import SplitBackground from "@/components/SplitBackground";

import SignUpForm from "./SignUpForm";
import { useFormLogic } from "@/service/FormService";

const SignUpPage = () => {
  const { name, email, password, phone, confirmPassword } = useSelector(
    (state) => state.values
  );
  const { handleInputChange, onSubmit } = useFormLogic();


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center">
      <SplitBackground />
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

        <SignUpForm
          name={name}
          email={email}
          password={password}
          phone={phone}
          confirmPassword={confirmPassword}
          onInputChange={handleInputChange}
          onSubmit={() => onSubmit({ name, email, password, phone, confirmPassword })}
        />

        <p className="mt-4 text-gray-700 text-center">
          Already have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
