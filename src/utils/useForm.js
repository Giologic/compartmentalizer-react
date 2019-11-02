import { useState } from "react";

const useForm = (callback, defaultValues ) => {
  const [values, setValues] = useState({ ...defaultValues });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value}));
  };

  const resetValues = () => {
    setValues({...defaultValues})
  }

  return {
    handleChange,
    handleSubmit,
    resetValues,
    values,
  };
};

export default useForm;