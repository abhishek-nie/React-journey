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
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import InputComponent from './components/InputComponent';
import FRParent from './components/FRParent';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import Portal from './components/Portal';
import ClickCounter from './components/ClickCounter';
import Hover from './components/Hover';
import RPComponent from './components/RPComponent';
import RPHover from './components/RPHover';
import RPClick from './components/RPClick'

import ContextA from './components/ContextA';
import FetchData from './components/FetchData';
import PostData from './components/PostData';


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
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo /> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefDemo></RefDemo> */}
      {/* <InputComponent></InputComponent> */}
      {/* <FRParent></FRParent> */}
      {/* <ErrorBoundary>
      <Hero Hero="supermane" />
      </ErrorBoundary>
     <ErrorBoundary>
     <Hero Hero="Joker" />
     </ErrorBoundary> */}
     {/* <Portal />  */}
     {/* <ClickCounter />
     <Hover></Hover> */}
     {/* <RPComponent>
     {(count, incrementCount)=>(<RPHover count={count} incrementCount={incrementCount}/>)}
     </RPComponent>
     <RPComponent>
     {(count, incrementCount)=>(<RPClick count={count} incrementCount={incrementCount}/>)}
     </RPComponent> */}
    
      {/* <ContextA />      */}
      {/* <FetchData></FetchData> */}
      <PostData></PostData>
     
    
    </div>
  );
}

export default App;
