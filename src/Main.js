import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class Main extends Component {

  render()  {
    // console.log(this.props.currentlyReading);
    // console.log(this.props.wantToRead);
    // console.log(this.props.read);
    // console.log(this.props.title);
    // console.log(this.props.id);
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
            <Link to="/search" onClick={this.forceUpdate}>Add a book</Link>
          </div>
          </div>
        </div>
        <div>
          <Bookshelf
            title={this.props.title}
            currentlyReading={this.props.currentlyReading}
            wantToRead={this.props.wantToRead}
            read={this.props.read}
            id={this.props.id}
          />
        </div>
      </div>
    )
  }
}

export default Main
