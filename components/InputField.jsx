

const InputField = ({ id, label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="block text-gray-700 font-bold text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className="p-2 w-full border border-gray-400 rounded-md"
      />
    </div>
  );
};

export default InputField;
