import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TOAST":
        return [...state, { ...action.payload }];
      case "REMOVE_TOAST":
        return state.filter((element) => element.id !== action.id);

      default:
        return state;
    }
  }, []);

  // console.log(notifications);

  return (
    <ToastContext.Provider value={dispatch}>
      <div className="toast-wrapper">
        {state.slice(0, 3).map((note) => {
          return <Toast dispatch={dispatch} key={note.id} {...note} />;
        })}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
