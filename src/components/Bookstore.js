import React, { Component } from "react";
import Book from "./Book";

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: "",
      readMore: false
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/zyv02")
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log("result :", result);
        this.setState({ books: result.books });
      });
  }

  cutArray() {
    return this.state.books.filter((book, index) => {
      return index < 25;
    });
  }

  filter() {
    //const filter = event.target.value.toUpperCase();
    const filteredBooks = this.state.books.filter((book, index) => {
      return book.title.toUpperCase().includes(this.state.search.toUpperCase());
    });
    console.log(filteredBooks);
    return filteredBooks;
    //this.setState({ books: filteredBooks });
  }

  render() {
    const filterList = this.filter();
    return (
      <div>
        <input
          type="search"
          onChange={event => {
            this.setState({ search: event.target.value });
          }}
          id=""
        />

        {filterList.map((book, index) => {
          return (
            <div className="container">
              <Book key={index} book={book} i={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Bookstore;
