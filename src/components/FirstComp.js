import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContext } from "../Context/toastContext";
import moment from "moment";

const FirstComp = (props) => {
  const dispatch = useContext(ToastContext);

  let count = 0;
  let currentTime = new Date().ge;
  const addNewToast = () => {
    dispatch({
      type: "ADD_TOAST",
      payload: {
        id: uuidv4(),
        message: `MSG ${count++} - ${moment().format("h:mm:ss")}`,
      },
    });
  };

  return (
    <div className="main-section">
      <button onClick={addNewToast} className="btn">
        Show Toast
      </button>
    </div>
  );
};

export default FirstComp;
