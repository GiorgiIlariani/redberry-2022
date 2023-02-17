import { useState } from "react";

const useInput = (validateValue, name) => {
  const [enteredValue, setEnteredValue] = useState(
    localStorage.getItem(name) || ""
  );
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const onSubmit = () => {
    setIsTouched(true);
  };

  const inputClasses = hasError
    ? "input-div invalid"
    : valueIsValid
    ? "input-div success"
    : "input-div";

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    inputClasses,
    onSubmit,
  };
};

export default useInput;
