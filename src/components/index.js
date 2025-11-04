import React, { useState } from "react";

function App() {
  // Step 1: Initialize state with 0
  const [count, setCount] = useState(0);

  // Step 2: Event handler for button click
  const handleClick = () => {
    setCount(count + 1); // Increment the counter
  };

  // Step 3: Render dynamic UI
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Button Counter</h1>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
