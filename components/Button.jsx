
const Button = ({ text, onSubmit,  className }) => {
  return (
    <button type="button" className={className} onClick={onSubmit}>
      {text}
    </button>
  );
};

export default Button;
