import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const now = new Date();
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
