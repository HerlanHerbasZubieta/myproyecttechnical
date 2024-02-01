'use client'
import SplitBackground from "@/components/SplitBackground";
import LoginPage from "./pages/Login/page";

export default function HomePage() {
  return (
      <body className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* Background */}
        <SplitBackground />

        {/* Login Page */}
        <LoginPage />
      
      </body>
   
  );
}
