import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js'

class Main extends Component {

  render()  {
    // const {titleProps, books, id} = this.props
    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
          </div>
        </div>
        <div>
          <Bookshelf
            title={this.props.title[0]}
            currentlyReading={this.props.currentlyReading}
            id={this.props.id}
          />
          <Bookshelf
            title={this.props.title[1]}
            wantToRead={this.props.wantToRead}
            id={this.props.id}
          />
          <Bookshelf
            title={this.props.title[2]}
            read={this.props.read}
            id={this.props.id}
          />
        </div>
      </div>
    )
  }
}

export default Main
