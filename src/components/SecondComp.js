import React, { useState, useContext } from "react";
import { ToastContext } from "../Context/toastContext";
import { v4 as uuidv4 } from "uuid";

const SecondComp = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useContext(ToastContext);

  const createNewToast = () => {
    if (inputVal === "") {
      alert("please enter some values");
    } else {
      dispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuidv4(),
          message: inputVal,
        },
      });
    }

    setInputVal("");
  };
  return (
    <div className="main-section">
      <div className="form">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="input-form"
        />
        <button onClick={createNewToast} className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SecondComp;
