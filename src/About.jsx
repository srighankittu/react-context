import { useContext, useRef } from "react";
import nameContext from "./nameContext";

function About() {
  const { text, setText } = useContext(nameContext);
  const inputRef = useRef();
  return (
    <div>
      About Page
      {text ? <div>{text}</div> : <div>No Text</div>}
      <input
        ref={inputRef}
        onChange={() => {
          setText(inputRef.current.value);
        }}
        placeholder={"default value"}
      />
      <button
        onClick={() => {
          const newVal = inputRef.current.value;
          setText(newVal);
        }}
        disabled
      >
        Update
      </button>
    </div>
  );
}

export default About;
