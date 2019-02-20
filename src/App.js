import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button id='button' type="primary" onClick= {() => {console.log('哈哈哈')}}>Button</Button>
      </div>
    );
  }
}

export default App;