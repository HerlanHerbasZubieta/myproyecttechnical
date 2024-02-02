import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { saveEmail, savePassword } from "@/redux/slice";
import CustomField from "@/components/CustomField";
import loginValidationSchema from "@/validations/LoginValidationSchema";
import Button from "@/components/Button";

const Login = () => {
  const { email, password } = useSelector((state) => state.values);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email, password }}
      validationSchema={loginValidationSchema}
      validateOnChange
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <div className="relative z-10 bg-white p-9 rounded-md shadow-lg border border-gray-300 mt-12 mb-12">
            <div className="flex items-center justify-center">
              <div className="w-40 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="mb-10 text-center">
              <p className="text-gray-400">Sign in to continue</p>
            </div>
            <form onSubmit={handleSubmit}>
              <CustomField
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                label="Name"
                className="border"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(saveEmail(e.target.value));
                }}
                onBlur={handleBlur}
                value={values.email}
              />
              <CustomField
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
                className="border"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(savePassword(e.target.value));
                }}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="mt-4 mb-4 text-blue-600 text-right">
                <Link href="/pages/SignUpPage">Forget Password?</Link>
              </p>
              <Button 
              text="Login"
              className="bg-blue-500 text-white p-2 rounded-md w-full"
              />
            </form>
            <p className="mt-4 text-gray-700 text-center">
              Dont have an account?{" "}
              <Link href="/pages/SignUpPage" className="text-blue-600">
                Create new account
              </Link>
            </p>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Login;
