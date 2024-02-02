import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { ErrorMessage, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";

const LoginForm = ({ email, password, onInputChange, onSubmit }) => {
  const initialValues = {
    email: email || "", 
    password: password || ""
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
          <p className="text-gray-400">Sign in to continue</p>
        </div>
        <Formik initialValues={initialValues} >
          {({ handleSubmit, values  }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={onInputChange}
                placeholder={"Enter your email"}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
              <InputField
                id="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={onInputChange}
                placeholder={"Enter your password"}
              />
              <p className="mt-4 mb-4 text-blue-600 text-right">
                <Link href="/pages/SignUpPage">Forget Password?</Link>
              </p>
              <Button 
              text="Login"
              className="bg-blue-500 text-white p-2 rounded-md w-full"
              />
            </form>
          )}
        </Formik>

        <p className="mt-4 text-gray-700 text-center">
          Dont have an account?{" "}
          <Link href="/pages/SignUpPage" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
