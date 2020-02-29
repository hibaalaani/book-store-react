// import React, { Component } from "react";
// import BookStore from "./Bookstore";
// import Book from "./Book";
// import Bookstore from "./Bookstore";
// export default class HeaderW extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       books: [],
//       search: ""
//     };
//   }
//   filter() {
//     //const filter = event.target.value.toUpperCase();
//     const filteredBooks = this.state.books.filter((book, index) => {
//       return book.title.toUpperCase().includes(this.state.search.toUpperCase());
//     });
//     console.log(filteredBooks);
//     return filteredBooks;
//     //this.setState({ books: filteredBooks });
//   }

//   render() {
//     const filterList = this.filter();
//     return (
//       <div>
//         <div className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <a className="navbar-brand" href="/#" target="#">
//             Book Store
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarText"
//             aria-controls="navbarText"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item active">
//                 <a className="nav-link" href="/#">
//                   contact <span className="sr-only">(current)</span>
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="/#">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//               <input
//                 className="form-control mr-sm-2"
//                 type="search"
//                 placeholder="Search For Your Book"
//                 aria-label="Search"
//                 onChange={event => {
//                   this.setState({ search: event.target.value });
//                 }}
//               />
//               {filterList.map((book, index) => {
//                 return (
//                   <div>
//                     <Book key={index} book={book} i={index} />
//                   </div>
//                 );
//               })}
//               }
//             </form>
//           </div>
//         </div>
//         <div>
//           <Bookstore />
//         </div>
//       </div>
//     );
//   }
// }
