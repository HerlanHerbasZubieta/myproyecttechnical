import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEmail, savePassword } from "@/redux/slice";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const { email, password } = useSelector((state) => state.values);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (field, value) => {
    switch (field) {
      case "email":
        dispatch(saveEmail(value));
        break;
      case "password":
        dispatch(savePassword(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/pages/SignUpPage");
  };

  useEffect(() => {
    dispatch(saveEmail(""));
    dispatch(savePassword(""));

    return () => {
      dispatch(saveEmail(""));
      dispatch(savePassword(""));
    };
  }, [dispatch]);

  return (
    <LoginForm
      email={email}
      password={password}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
