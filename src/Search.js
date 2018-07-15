import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component {

  state = {
   query: '',
   booksFound: [],
   isQuery: true,
   shelf: ''
 }

 shouldComponentUpdate(nextProps, nextState) {
     return nextState.isQuery && (nextState.isQuery === this.state.isQuery);
 }

 componentDidUpdate() {
  BooksAPI.search(this.state.query).then((booksFound) => {

    if(this.state.query !== '' && this.props.books.error === "") {
      this.props.books.forEach( bookWithShelf => {
        booksFound.forEach(bookFound => {
          if((bookWithShelf.id === bookFound.id)) {
              bookFound.shelf = bookWithShelf.shelf
            }
        })
      })

    }
this.setState({booksFound})

    if(this.state.isQuery){
       this.setState({isQuery: false});
    }
    else{
      this.setState({isQuery: true});
    }
    this.render();
  })
 }

 updateQuery = (query) => {
   this.setState({ query: query.trim() })
 }

 changeShelf = function changeShelf(book, event) {
  //  console.log(event.target)
   let bookIdSelect = event.target;
  //  console.log(bookIdSelect);
   let booksFoundValue = bookIdSelect.options[bookIdSelect.selectedIndex].value;

  //  console.log(booksFoundValue);
   if(booksFoundValue === "currentlyReading") {
     BooksAPI.update(book, "currentlyReading")
     bookIdSelect.value = "currentlyReading";
   }
   else if(booksFoundValue === "wantToRead") {
     BooksAPI.update(book, "wantToRead")
     bookIdSelect.value = "wantToRead";
   }
   else if(booksFoundValue === "read") {
     BooksAPI.update(book, "read")
     bookIdSelect.value = "read";
   }
   else {
     bookIdSelect.value = "none";
   }
 }

  render(){
    let searchedBooks;
    if(this.state.booksFound instanceof Array ) {
      // console.log("Works!");
      searchedBooks = (
        <ol className="books-grid">
          {this.state.booksFound.map((book) => (
           <li key={book.id}>
             <div className="book">
               <div className="book-top">
                 {typeof book.imageLinks === 'undefined' ? "" : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div> }
                 <div className="book-shelf-changer">
                   <select value={typeof book.shelf !== 'undefined' ? book.shelf : "none"} id="idSearch" onChange={this.changeShelf.bind(this, book)}>
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
      )
    }

    return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"
                value={this.state.query}

                onChange={(event) => {
                  this.updateQuery(event.target.value)
                }
                }/>
            </div>
          </div>
          <div className="search-books-results">
              { searchedBooks }
          </div>
        </div>
      </div>
    )
  }
}

export default Search
