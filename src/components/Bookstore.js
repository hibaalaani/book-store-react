import React, { Component } from "react";
import Book from "./Book";
import HeaderW from "./HeaderW";

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
  //////////filter the book
  filter() {
    const filteredBooks = this.state.books.filter((book, index) => {
      return book.title.toUpperCase().includes(this.state.search.toUpperCase());
    });
    console.log(filteredBooks);
    return filteredBooks;
  }
  ///////take the event in search
  handleSearch = event => {
    console.log("event from bookstore", event.target.value);
    this.setState({ search: event.target.value });
  };
  render() {
    const filterList = this.filter();
    return (
      <div>
        {/* sent the event to child headerw */}
        <HeaderW callbackFromParent={this.handleSearch} />
        <div className="row justify-content-center wrap">
          {filterList.map((book, index) => {
            return (
              <div key={index}>
                <Book book={book} i={index} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Bookstore;
