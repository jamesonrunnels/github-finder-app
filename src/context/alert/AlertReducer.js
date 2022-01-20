const alertReducer = (alertState, alertContents) => {
  switch (alertContents.type) {
    case 'SET_ALERT':
      return alertContents.alertDetails;
    case 'REMOVE_ALERT':
      return null;
    default:
      return alertState;
  }
};

export default alertReducer;
