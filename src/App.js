import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import Bookshelf from './Bookshelf.js'
import Search from './Search.js'
import Main from './Main.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
    bookshelfTitles: ['Currently Reading','Want to Read','Read']

  }
  // Load API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      // console.log(this.state.books)
      // console.log(BooksAPI.search("a"))
    })
  }

  generatId = function () {
  return Math.random().toString(36).substr(2, 9);
};

  render() {
    return (
      <div className="app">
        <Search
          id={this.generatId}>
        </Search>
        <Main
          title={this.state.bookshelfTitles}
          books={this.state.books}
          id={this.generatId}>
        </Main>
      </div>
    )
  }
}

export default BooksApp
