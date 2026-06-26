import { useEffect, useState } from "react";
export default function ValidatedInput({ onChange, validationFunction }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {

    setIsValid(validationFunction(value));
  }, [value, validationFunction]);
  return (
    
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isValid ? "" : "error"}
      />
      
      {!isValid && <p className="error-message">Invalid input</p>}
    </div>
  );
}
