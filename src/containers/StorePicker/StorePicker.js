import React, { Component } from 'react';

import classes from './StorePicker.scss';

class StorePicker extends Component {
  render() {
    return (
      <form className={classes.StorePicker}>
        <h2>Please Enter A Store</h2>
        <input type='text' />
        <input type='Submit' />
      </form>
    )
  }
}

export default StorePicker;