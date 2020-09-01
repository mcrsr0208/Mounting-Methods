import React from "react";
import "./style.css";

class App extends React.Component{

  constructor(props){
    console.log('constructor()')
    super(props);
    this.state = {
      name:'mcrsr'
    }
  }
 
  componentDidMount(){
    console.log('componentDidMount()');
  }


  static getDerivedStateFromProps(){
   console.log('static getDerivedStateFromProps()');
   return null;
  }

  render(){
    console.log('render()');
    return(
      <div>
        <h1>{ this.state.name }</h1>
      </div>
    );
  }
}

export default App;