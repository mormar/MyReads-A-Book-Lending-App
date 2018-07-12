import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

  changeShelf = function changeShelf(book, selectId, event) {
    // console.log(event.target)
    let bookIdSelect = event.target;
    // console.log(bookIdSelect);
    let booksFoundValue = bookIdSelect.options[bookIdSelect.selectedIndex].value;

    // console.log(booksFoundValue);
    if(booksFoundValue === "currentlyReading") {
      BooksAPI.update(book, "currentlyReading")
    }
    else if(booksFoundValue === "wantToRead") {
      BooksAPI.update(book, "wantToRead")
    }
    else if(booksFoundValue === "read") {
      BooksAPI.update(book, "read")
    }
    else {

    }
  }

  render() {
    // console.log(this.props.currentlyReading);
    // console.log(this.props.wantToRead);
    // console.log(this.props.read);
    // console.log(this.props.title);
    // console.log(this.props.id);
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title[0]}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.currentlyReading.map((book) => (
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     {typeof book.imageLinks === 'undefined' ? "" : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div> }
                     <div className="book-shelf-changer">
                       <select value="currentlyReading" id="idCurrentlyReading" onChange={this.changeShelf.bind(this, book, "idCurrentlyReading")}>
                         <option value="move" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead" >Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">
                     { typeof book.authors === 'undefined' ? "" : book.authors.map((author) => (<div key={this.props.id()}>{author}</div>)) }
                   </div>
                 </div>
               </li>
             ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title[1]}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.wantToRead.map((book) => (
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     {typeof book.imageLinks === 'undefined' ? "" : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div> }
                     <div className="book-shelf-changer">
                       <select value="wantToRead" id="idWantToRead" onChange={this.changeShelf.bind(this, book, "idWantToRead")}>
                         <option value="move" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">
                     { typeof book.authors === 'undefined' ? "" : book.authors.map((author) => (<div key={this.props.id()}>{author}</div>)) }
                   </div>
                 </div>
               </li>
             ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title[2]}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.read.map((book) => (
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     {typeof book.imageLinks === 'undefined' ? "" : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div> }
                     <div className="book-shelf-changer">
                       <select value="read" id="idRead" onChange={this.changeShelf.bind(this, book, "idRead")}>
                         <option value="move" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">
                     { typeof book.authors === 'undefined' ? "" : book.authors.map((author) => (<div key={this.props.id()}>{author}</div>)) }
                   </div>
                 </div>
               </li>
             ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }

}

export default Bookshelf
