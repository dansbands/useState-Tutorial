// 1. import useState as a named import 
import React from 'react';
import './App.css';

function App() {
  // 2. define your useState hook
  // Reference: https://reactjs.org/docs/hooks-state.html

  return (
    <div className="App">
      <h1>Working with useState()</h1>
      <label>Input some text</label>
      <br/>

      {/* 3. modify the code below this line */}
      <input 
        type="text" 

        // A. Complete your onChange event handler
        // onChange={/* call your state hook, pass in the input value from the target of the event (this input) (event.target.value) */} 

        // B. read the value from state to make it a controlled component (replace the empty string)
        value={''} 
      />
      <h3>Your text should appear here:</h3>
      <p className="your-text">
        {/* read the state value here 
        and print it to the dom */}
      </p>
    </div>
  );
}

export default App;
