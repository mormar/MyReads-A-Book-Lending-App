import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
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
    bookshelfTitles: ['Currently Reading','Want to Read','Read'],
    currentlyReading: [],
    wantToRead: [],
    read: []

  }
  // Load API
  componentDidMount() {
    // componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      // this.setState({ books })
      const newState = {
        books: [],
        showSearchPage: false,
        bookshelfTitles: ['Currently Reading','Want to Read','Read'],
        currentlyReading: [],
        wantToRead: [],
        read: []
      };

      books.forEach(book => {
        if(book.shelf === "currentlyReading") {
          newState.currentlyReading.push(book);
        }
        else if(book.shelf === "wantToRead"){
          newState.wantToRead.push(book);
        }
        else if(book.shelf === "read"){
          newState.read.push(book);
        }
        else {

        }
        newState.books.push(book);
      });
      this.setState(newState);
      // console.log(this)
      // console.log(newState.currentlyReading);
      // console.log(this.state.currentlyReading);
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
        <Route exact path="/" render={() => (
          <Main
            title={this.state.bookshelfTitles}
            books={this.state.books}
            id={this.generatId}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}>
          </Main>
        )}/>
        <Route path="/search" render={() => (
          <Search
            id={this.generatId}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            books={this.state.books}>
          </Search>
        )}/>
      </div>
    )
  }
}

export default BooksApp
