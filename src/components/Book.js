import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      readMore: false,
      bookInfo: false,
      imageIndex: props.i,
      disabledPrev: false,
      disabledNext: false
    };
  }

  componentDidMount() {
    //this.setState({ index: this.props.i });
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

  goBack() {
    const { imageIndex } = this.state;
    let lastIndex = this.props.allBooks.length - 1;
    let prev = imageIndex - 1;
    let stopcount = imageIndex === 0;
    const index = stopcount ? lastIndex : prev;
    this.setState({
      imageIndex: index
    });
  }
  goNext() {
    const { imageIndex } = this.state;
    console.log(imageIndex);
    let lastIndex = this.props.allBooks.length - imageIndex;
    console.log(lastIndex);
    let next = imageIndex + 1;
    console.log(next);
    let stopcount = imageIndex === this.props.allBooks.length - 1;
    console.log(stopcount);
    const index = stopcount ? 0 : next;
    console.log(index);
    this.setState({
      imageIndex: index
    });
  }

  render() {
    const book = this.props.book;
    const allBooks = this.props.allBooks;

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
                  src={allBooks[this.state.imageIndex].detail}
                  // style={style.img}
                />{" "}
                <button
                  className="flaot-left btn-lg"
                  onClick={() => this.goBack()}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="back col-4 align-items-center"
                  onClick={event => {
                    this.closeBack();
                  }}
                >
                  Back To Book List
                </button>
                <button
                  className="flaot-right btn-lg"
                  onClick={() => this.goNext()}
                >
                  next
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
