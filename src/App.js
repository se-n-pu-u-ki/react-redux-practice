import React from 'react';

function App() {
  const dom = <h1>Hello,world</h1>;
  return (
    <div className="App">
      {dom}
      <input type="text" onClick={() => {console.log("I am a Hero!")}} />
    </div>
  );
}

export default App;
