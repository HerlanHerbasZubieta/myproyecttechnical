
const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-2 border rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
