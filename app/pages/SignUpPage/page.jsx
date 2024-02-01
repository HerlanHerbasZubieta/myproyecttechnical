'use client'

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SplitBackground from '@/components/SplitBackground';
import { useState } from 'react';
import { saveName, saveEmail, savePassword, savePhone, saveConfirmPassword } from '@/redux/slice';


const SignUpPage = () => {

  const { name, email, password, phone, confirmPassword } = useSelector((state) => state.values)
  const dispatch = useDispatch();
  const router = useRouter()

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'name':
        dispatch(saveName(value));
        break;
      case 'email':
        dispatch(saveEmail(value));
        break;
      case 'password':
        dispatch(savePassword(value));
        break;
      case 'phone':
        dispatch(savePhone(value));
        break;
      case 'confirmPassword':
        dispatch(saveConfirmPassword(value));
        break;
      default:
        break;
    }
  };

  const sendInput = async (e) => {
    e.preventDefault();
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
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-500 text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              value={name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-500 text-sm mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder=""
              value={phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-500 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-500 text-sm mb-2">
              Confirm your password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder=""
              value={confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Botón de envío */}
          <button type="button" onClick={sendInput} className="bg-blue-500 text-white p-2 rounded-md w-full">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-gray-700 text-center">
          Already have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
