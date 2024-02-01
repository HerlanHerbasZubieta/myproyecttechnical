"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import registerUser from "@/service/RegistrationService";
import SplitBackground from "@/components/SplitBackground";
import Form from "@/components/Form/Form";
import { signUpFormFields } from "@/utils/SignUpFormFields";

const SignUpPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
    phone: "",
  });

  const getInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendInput = async (e) => {
    e.preventDefault();
    await registerUser(data);
    router.push("/");
  };
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
        <Form
          formFields={signUpFormFields}
          data={data}
          onInputChange={getInput}
          onSubmitAction={sendInput}
        />
        <p className="mt-4 text-gray-700 text-center">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
