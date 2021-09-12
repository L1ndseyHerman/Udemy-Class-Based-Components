//  Below is needed for class-based components:
import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {

  componentWillUnmount() {
    console.log('User will unmount!');
  }

  //  This is a constructor, has that keyword, but don't need it here.
  //constructor() {}

  //  This is a pre-coded React method. It what u are "return"ing in a functional component!
  //  Don't pass in props to it tho! Instead, do "this.props.yourPropName"!
  render () {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//  The functional equivalent:
/*const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};*/

export default User;
