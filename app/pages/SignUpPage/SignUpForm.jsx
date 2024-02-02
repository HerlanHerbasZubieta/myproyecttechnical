import InputField from "@/components/InputField";
import Button from "@/components/Button";

const SignUpForm = ({ name, email, password, phone, confirmPassword, onInputChange, onSubmit }) => {

  return (
    <form>
      <InputField
        id="name"
        label="Name"
        type="text"
        value={name}
        onChange={onInputChange}
        placeholder={"Enter your name"}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={onInputChange}
        placeholder={"Enter your email"}
      />
      <InputField
        id="phone"
        label="Phone"
        type="tel"
        value={phone}
        onChange={onInputChange}
        placeholder={"Enter your phone"}
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={onInputChange}
        placeholder={"Enter your password"}
      />
      <InputField
        id="confirmPassword"
        label="Confirm your password"
        type="password"
        value={confirmPassword}
        onChange={onInputChange}
        placeholder={"Enter your password"}
      />
      <Button
        onClick={onSubmit}
        text="Sign Up"
        className="bg-blue-500 text-white p-2 rounded-md w-full"
      />
    </form>
  );
};

export default SignUpForm;
