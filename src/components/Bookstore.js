import React, { Component } from "react";
import Book from "./Book";
// import HeaderW from "./HeaderW";

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
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/#" target="#">
            Book Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  contact <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <input
          className="App"
          type="search"
          onChange={event => {
            this.setState({ search: event.target.value });
          }}
          id=""
        />{" "}
        <div className="row justify-content-center wrap">
          {filterList.map((book, index) => {
            return (
              <div>
                <Book key={index} book={book} i={index} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Bookstore;
