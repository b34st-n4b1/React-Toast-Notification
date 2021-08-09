import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Toast = (props) => {
  const [exit, setExit] = useState(false);

  const closeToastNotification = () => {
    // handleResetTimer();
    setExit(true);
    props.dispatch({
      type: "REMOVE_TOAST",
      id: props.id,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      closeToastNotification();
    }, 7000);
  }, []);

  return (
    <div className={`toast-container ${exit ? "exit" : ""}`}>
      <p>{props.message}</p>
      <FaTimes className="times-icon" onClick={closeToastNotification} />
    </div>
  );
};

export default Toast;
