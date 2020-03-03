import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      readMore: false,
      bookInfo: false
    };
  }

  ///////////more info button
  moreInfo() {
    //let id = event.target.id;
    this.setState({
      readMore: !this.state.readMore
    });
  }
  openBook() {
    this.setState({
      bookInfo: !this.state.bookInfo
    });
  }
  closeBack() {
    this.setState({
      bookInfo: false
    });
  }
  render() {
    const book = this.props.book;
    return (
      <div>
        {" "}
        {/* <div className="row">
                <div className="col"> */}{" "}
        {/* <div className="row justify-content-center  wrap"> */}
        <div className="flipCard col-md-2.5">
          <div className=" flipCardInner">
            <div className="flipCardFront">
              {book.cover && (
                <React.Fragment>
                  <img alt="img" src={book.cover} style={style.img} />{" "}
                </React.Fragment>
              )}{" "}
            </div>
            <div className="flipCardBack">
              <h4 className="title" style={style.title}>
                {" "}
                {book.title}{" "}
              </h4>
              <h6>
                <button
                  className="btn-md"
                  onClick={event => {
                    this.moreInfo();
                  }}
                >
                  read more{" "}
                </button>{" "}
                {this.state.readMore && <p> {book.description} </p>}
              </h6>
              <button
                className="btn-md"
                onClick={event => {
                  this.openBook();
                }}
              >
                more info
              </button>
            </div>{" "}
          </div>{" "}
        </div>
        {this.state.bookInfo && (
          <React.Fragment>
            <div className="myModal ">
              <div className="modalContent opacity">
                <img
                  className=""
                  alt="img"
                  src={book.detail}
                  // style={style.img}
                />{" "}
                <button
                  type="button"
                  className="back col-4 align-items-center"
                  onClick={event => {
                    this.closeBack();
                  }}
                >
                  Back To Book List
                </button>
              </div>
            </div>
          </React.Fragment>
        )}{" "}
      </div>
      // </div>
    );
  }
}

const style = {
  title: {
    color: "red"
  },
  container: {
    backgroundColor: "white"
  }
};
