import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import ClassPerson from './components/ClassPerson';
import PersonUseState from './components/PersonUseState';
import ConditionalCheck from './components/ConditionCheck';
import Radium from 'radium'


function App() {
  return (
    <div className="App">
      {/* <Person name="naveen" age="27">Am a youtuber</Person>
      <ClassPerson name="praveen" age="23">I am worker</ClassPerson>
      <PersonUseState name="praveen" age="23">I am worker</PersonUseState> */}
      <ConditionalCheck/>
    </div>
  );
}

export default Radium(App);
