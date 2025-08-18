import React from "react";
import { useRef } from "react";
const Useref = () => {
  const inputRef = useRef();
  const clickRef = useRef();

  const functionChange = () => {
    inputRef.current.style.color = "red";
  };

  const myclickChange = () => {
    clickRef.current.style.color = "red";
    clickRef.current.style.backgroundColor = "green";
  };

  return (
        <div>
            <input type="text" ref={inputRef} name="" id="" onChange={functionChange} />
            <input type="text" ref={clickRef} name="" id="" />

            <button onClick={myclickChange}>click</button>
        </div>
        
      );
};

export default Useref;

// hooks
// functions
// useState
// useEffect

// useContext
// Useref
// useMemo
// useCallback