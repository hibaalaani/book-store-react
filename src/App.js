import React from "react";
import "./App.css";
// import HeaderW from "./components/HeaderW";
import Bookstore from "./components/Bookstore";

// filterInput = () => {
//   // return this.state.books.filter((input, value) => {
//   //   return input.value;
//   // });
//   console.log("from bookstore");
// };

function App() {
  // const helloBook = { title: "hello", description: "hello book" };

  return (
    <div>
      {/* <HeaderW /> */}
      {/* <Hello msg='Fist Hello' />
        <Hello msg='Second Hello' /> */}

      {/* <Book book={helloBook} i={99999} /> */}
      <Bookstore />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
