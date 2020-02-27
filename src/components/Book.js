import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super();
    this.state = {
      book: props.book,
      readMore: false
    };
  }

  ///////////more info button
  moreInfo() {
    //let id = event.target.id;
    this.setState({ readMore: !this.state.readMore });
  }
  render() {
    const book = this.state.book;
    return (
      <div style={style.container}>
        {/* <div className="row">
        <div className="col"> */}
        <div className="row justify-content-center wrap">
          <div className="col-sm-6">
            <h1 className="title" style={style.title}>
              {book.title}
            </h1>

            {book.cover && (
              <React.Fragment>
                <img alt="img" src={book.cover} style={style.img} />

                <p>image</p>
              </React.Fragment>
            )}
            <button
              onClick={event => {
                this.moreInfo();
              }}
            >
              more info
            </button>
            <div>{this.state.readMore && <p>{book.description}</p>}</div>
          </div>
        </div>
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
    // backgroundColor: 'white'
  },
  // img: {
  //   width: "60%",
  //   height: "100 %"
  // },

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
  }

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
