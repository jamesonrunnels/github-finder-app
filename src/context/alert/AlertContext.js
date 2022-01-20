import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const initialState = null;

  const [alertState, alertControl] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg, type) => {
    alertControl({
      type: 'SET_ALERT',
      alertDetails: { msg, type },
    });

    setTimeout(() => alertControl({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alertState: alertState, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
