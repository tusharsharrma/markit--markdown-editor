import { useState } from "react";

const RawInputArea = ({ onInputChange }) => {
  const [rawText, setRawText] = useState(""); // State to track input

  // Handle user typing
  const handleChange = (event) => {
    const text = event.target.value;
    setRawText(text); // Update local state
    onInputChange(text); // Pass the text to the parent

  };

  return (
    <>
      <textarea
        name="Input"
        id="input"
        value={rawText}
        onChange={handleChange}
        placeholder="Write your Markdown here..."
      />
    </>
  );
};

export default RawInputArea;
