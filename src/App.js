import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello  from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet />
      <Welcome />
      <Hello name ="AK">
        <p>how are u?</p>
      </Hello>
      <Hello name ="soni"/>
      <Hello name= "Abhishek"/> */}
    </div>
  );
}

export default App;
