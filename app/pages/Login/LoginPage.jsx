'use client'

import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form/Form";
import { loginFormFields } from "@/utils/LoginFormFields";
import { useState } from "react";

const LoginPage = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const getInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="relative z-10 bg-white p-9 rounded-md shadow-lg border border-gray-300 mt-12 mb-12">
        <div className="flex items-center justify-center">
          <div className="w-40 rounded-full overflow-hidden">
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </div>
        </div>
        <div className="mb-10 text-center">
          <p className="text-gray-400">Sign to continue</p>
        </div>
        <Form
          formFields={loginFormFields}
          data={data}
          onInputChange={getInput}
        />
        <p className="mt-4 text-gray-700 text-center">
          Don't have an account? <Link href="/pages/SignUpPage">Create new account</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
