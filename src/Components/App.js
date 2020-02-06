import React from 'react';

const App = ()  => {
  return(
    <div>
      <Counter />
    </div>
  )
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    console.log(this.state);
    this.state = {count:0}
  }

  handlePlusButton = () => {
    console.log("handlePlusButton");
    this.setState({count: this.state.count+1});
  }
  handleMinusButton = () => {
    console.log("handleMinusButton");
    this.setState({count:this.state.count-1});
  }

  render() { 
    console.log(this.state)
    return (
      <div>
        counter {this.state.count}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    );
  }
}


export default App;
