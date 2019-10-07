import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from "./Components/Main"
import {BrowserRouter} from 'react-router-dom'
import './styles/styles.css'


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);


// const tasks = ["List Item 1", "List Item 2", "List Item 3"];


// const element = React.createElement('ol', null, 
// tasks.map((task, index) => React.createElement('li', { key: index }, task))
// );

// const element = (
//                   <div>
//                     <h1>Task List</h1>
//                     <ol>
//                       {tasks.map((task, index) => (
//                         <li key={index}> {task}</li>
//                       ))}
//                     </ol>
//                   </div>
// );





// const names = ["George", "John", "Jane", "Jack", "Mary", "Tom"];
// const otherNames = ["Ruth", "Bill", "Paul", "Diana", "Thomas"];

// const allNames = [
//   ...names,
//   "Bob",
//   ...otherNames
// ];

// const imena = (
//   <div>
//       {allNames.map((ime, index) => (
//         <p key={index}> {ime}</p>
//       ))}
 
//   </div>
// );





// ReactDOM.render([element, imena], document.getElementById("root"));
