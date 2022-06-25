import React, { useState } from "react";

function App() {
  const { HeadinText, setHeadingText } = useState('Hello')
  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
