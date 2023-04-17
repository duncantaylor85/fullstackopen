const Notification = ({ message, messageType }) => {
  const addedStyle = {
    color: "green",
    background: "lightgrey",
    fontsize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  if (message === null) {
    return null;
  } else if (messageType === "added") {
    return <div style={addedStyle}>{message}</div>;
  }
};

export default Notification;
