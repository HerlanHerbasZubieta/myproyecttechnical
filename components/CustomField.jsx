import { Field, ErrorMessage } from 'formik';

const CustomField = ({ type, id, name, placeholder, label, onChange, onBlur, value }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="border p-2 w-full mt-1"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default CustomField