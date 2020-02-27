import React from "react";
import "./App.css";
import Hello from "./components/Hello";
import Bookstore from "./components/Bookstore";
import Book from "./components/Book";

// filterInput = () => {
//   // return this.state.books.filter((input, value) => {
//   //   return input.value;
//   // });
//   console.log("from bookstore");
// };

function App() {
  const helloBook = { title: "hello", description: "hello book" };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello msg='Fist Hello' />
        <Hello msg='Second Hello' /> */}

        {/* <Book book={helloBook} i={99999} /> */}
        <Bookstore />
        <Hello />
      </header>
    </div>
  );
}

export default App;
