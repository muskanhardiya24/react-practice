import logo from './logo.svg';
import './App.css';
import MyComponentClass from './MyComponentClass';
import React from 'react';
import MyComponent from './MyComponent';

// const App = () => 
// {
//   const myFunction = () =>
//   {
//     console.log(" This is my function and its name")
//   }

//  myFunction()

//  const buttonHandler = () =>
//  {
//   console.log("button is clicked ")
//  }

//   let firstVariable = 1
//    console.log("firstVariable: ", firstVariable)

//    const el1 = <h1>This is a sample jsx code snippet</h1>
//    console.log("el1: ", el1)

//   // return React.createElement(
//   //   "div",
//   //    null,
//   //     "Hello muskan",
//   //     React.createElement("p", null, "heloo ssi"),
//   //     React.createElement("ul", null, 
//   //         React.createElement("li", null ,"this is ordered list 1"),
//   //         React.createElement("li", null ,"this is ordered list 2"),
//   //         React.createElement("li", null ,"this is ordered list 3"),
//   //   ),
//   // )

//   return <div>

//   <ul>
//     <li>This is list item 1</li>
//     <li>This is list item 2</li>
//     <li>This is list item 3</li>
//     <li>This is list item 4</li>
//   </ul>
//   <MyComponent color="yellow" size="medium"/>
//   <br/>
//   <MyComponentClass color="red" size="medium" onclick={()=>
//   {
//       console.log("This is executed in App.js");
//   }}/>
  
  
//   </div>
// }

class App extends React.Component
{
  state = {classComponent: <MyComponentClass color="red" size="medium" onClick={()=>
  {
    console.log("this is executed in App.js");
  }}/>}

  unmountFunction = () =>
  {
    console.log("testing git commit")
    this.setState({classComponent: "Class component unmounted now"})
  }

  render()
  {
    return <div>
      <ul>
        <li>This is list item 1</li>
        <li>This is list item 2</li>
        <li>This is list item 3</li>
        <li>This is list item 4</li>
      </ul>
      <MyComponent color="yellow" size="medium"/>
      <br/>
        {this.state.classComponent}
        <br/>
        <button onClick={this.unmountFunction}>Unmount Class Comp</button>
      </div>
  }
}

 
  


export default App;
