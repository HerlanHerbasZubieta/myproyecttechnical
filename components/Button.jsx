
const Button = ({ children, bgColor }) => {
  return (
    <button
      className={`mt-4 bg-${bgColor} text-white p-2 rounded-md w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
