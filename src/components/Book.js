import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      book: props.book,
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
    const book = this.state.book;
    return (
      <div>
        {" "}
        {/* <div className="row">
                <div className="col"> */}{" "}
        <div className="row justify-content-center  wrap">
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
                    onClick={event => {
                      this.moreInfo();
                    }}
                  >
                    read more{" "}
                  </button>{" "}
                  {this.state.readMore && <p> {book.description} </p>}
                </h6>
                <button
                  className="btn-sm"
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
              <div className="myModal">
                <div className="modelContent">
                  <img
                    alt="img"
                    src={book.detail}
                    // style={style.img}
                  />{" "}
                  <button
                    className="close btn btn-md text-primary"
                    onClick={event => {
                      this.closeBack();
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}{" "}
        </div>
      </div>
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

  // flipCard: {
  //   backgroundColor: "transparent",
  //   width: "200px",
  //   height: "300px",
  //   perspective: "1000px",
  //   margin: "30px"
  // },

  // flipCardInner: {
  //   position: "relative",
  //   width: " 100 %",
  //   height: " 100 %",
  //   textAlign: "center",
  //   transition: "transform 0.6s",
  //   transformStyle: "preserve - 3d",
  //   boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
  // },

  // .flip - card: hover.flip - card - inner {
  //   transform: rotateY(180deg);
  // }

  // flipCardFront: {
  //   position: "absolute",
  //   width: " 100 %",
  //   height: " 100 %"
  // },
  // flipCardBack: {
  //   position: "absolute",
  //   width: " 100 %",
  //   height: " 100 %"
  // -webkit - backface - visibility: "hidden",
  // backface - visibility:" hidden",
  // }

  // flipCardFront: {
  //   backgroundColor: "#bbb",
  //   color: "black"
  // },

  // flipCardBack: {
  //   backgroundColor: " #3d88cfa9",
  //   color: "white",
  //   transform: " rotateY(180deg)"
  // }
};
