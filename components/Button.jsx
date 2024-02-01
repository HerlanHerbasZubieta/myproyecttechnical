
const Button = ({ onClick, text, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
