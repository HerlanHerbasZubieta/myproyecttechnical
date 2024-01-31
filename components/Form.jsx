import Image from "next/image";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <div className="relative z-10 bg-white p-9 rounded-md shadow-lg border border-gray-300 mt-12 mb-12">
      <div className="flex items-center justify-center">
        <div className="w-32 rounded-full overflow-hidden">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </div>
      </div>
      <div className="mb-10 text-center">
        <p className="text-gray-400">Sign to continue</p>
      </div>
      {/* Utilizando el componente Input */}
      <Input id="email" label="Email" type="email" placeholder="Email" />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
      />

      <div className="mb-4 flex justify-end">
        <a href="#" className="text-blue-500">
          Forgot password?
        </a>
      </div>

      {/* Utilizando el componente Boton */}
      <Button bgColor="[#0d3fc9]">
        Login
      </Button>

      <div className="mt-4">
        <p className="text-gray-700">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Create new account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
