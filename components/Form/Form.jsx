import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import registerUser from "@/service/RegistrationService";
import { useRouter } from "next/navigation";

const Form = ({ formFields, data, onInputChange }) => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    await registerUser(data);
    router.push("/");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {formFields.map((field) => (
        <div key={field.id} className="mb-4">
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-600"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            value={data[field.name]}
            onChange={onInputChange}
            placeholder={field.placeholder}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      ))}
      <Button bgColor="[#0d3fc9]" textColor="white">
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  formFields: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmitAction: PropTypes.func.isRequired,
};

export default Form;
