import React from 'react';

class App extends React.Component{
  render(){
    const dom = <h1>Hello,world</h1>;
    return (
      <div className="App">
        {dom}
        <input type="text" onClick={() => {console.log("I am a Hero!")}} />
      </div>
    );
  }
}

export default App;
