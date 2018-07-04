import React, { Component } from 'react';

class Bookshelf extends Component {

  render() {
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
          </div>
        </div>
      </div>
    )
  }

}

export default Bookshelf
