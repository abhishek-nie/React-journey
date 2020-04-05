import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello  from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import ListRederer from './components/ListRederer';
import StyleSheet from './components/StyleSheet'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello name ="AK" heroName ="Baba">
        <p>how are u?</p>
      </Hello> */}
      {/* <Hello name ="soni"/>
      <Hello name= "Abhishek"/> */}
      {/* <EventBinding/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <ListRederer/> */}
      {/* <StyleSheet primary = {true}/> */}
      {/* <Form/> */}
      <LifeCycleA/>
    </div>
  );
}

export default App;
