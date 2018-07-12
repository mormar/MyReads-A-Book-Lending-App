import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

  changeShelf = function changeShelf(book) {
    let booksFoundSelect = document.getElementById("idBooksFound");
    console.log(booksFoundSelect);
    let booksFoundValue = booksFoundSelect.options[booksFoundSelect.selectedIndex].value;
    console.log(booksFoundValue);
    if(booksFoundValue === "wantToRead") {
      BooksAPI.update(book, "wantToRead")
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
                       <select id="idBooksFound" onChange={this.changeShelf.bind(this, book)}>
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
                       <select>
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
                       <select>
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
