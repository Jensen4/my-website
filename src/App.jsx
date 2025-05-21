// import Button from "./components/Button";
// import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* {alertVisible && (
        <Alert
          text="This is an alert"
          onClose={() => {
            setAlertVisibility(false);
          }}
        />
      )}
      <Button
        name="test"
        onClick={() => {
          setAlertVisibility(true);
        }}
      /> */}
      <NavBar />
      <About />
    </div>
  );
}

export default App;
