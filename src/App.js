import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import Main from './Main.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    bookshelfTitles: ['Currently Reading','Want to Read','Read'],
    currentlyReading: [],
    wantToRead: [],
    read: []

  }
  // Load API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
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
