import { useState, useEffect } from "react";

const App = () => {
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "keypress",
      (e) => {
        if (e.key === "t") {
          setIsTerminalActive(true);
          console.log("fired");
        }
      },
      []
    );
  });

  return (
    <>
      <p className="font-bold">hey</p>
    </>
  );
};

export default App;
