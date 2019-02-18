import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
  }

  render() {
    return (
      <div>
        <label>Genre</label>
      </div>
    );
  }
}


export default Dropdown;
