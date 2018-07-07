import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
   query: 'a',
   booksFound: [],
   isQuery: false
 }

 updateQuery = (query) => {
   this.setState({ query: query.trim() })
 }

componentDidUpdate() {
  BooksAPI.search(this.state.query).then((booksFound) => {
  this.setState({booksFound})
  console.log(this.state.query)
  console.log(this.state.booksFound)

  })
}

 // componentDidMount() {
 //      BooksAPI.search(this.state.query).then((booksFound) => {
 //      this.setState({booksFound})
 //
 //      })
 //   }

  render(){
    let searchedBooks;
    if(this.state.isQuery == true) {
      searchedBooks = (
        <ol className="books-grid">
          {this.state.booksFound.map((book) => (
           <li key={book.id}>
             <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div>
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
               <div className="book-authors">{book.authors.map((author) => (<div key={this.props.id()}>{author}</div>))}</div>
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
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
