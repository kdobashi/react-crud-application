import React from 'react';

// class App extends Component{
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am Clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

// function App() {
//   return (
//     <div>Hello World!</div>
//   );
// }

const App = () => {
  return (<div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>)
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
