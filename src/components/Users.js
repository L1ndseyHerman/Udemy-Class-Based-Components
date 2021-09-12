import {Component} from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  
  constructor() {

    //  Calling some superclass constructor like in Java.
    super();
      
    //  This is a class useState(). It should go in the constructor. Must always be an object!
    //  Like, all states must be object properties inside of this one state.
    //  Can have nested objects.
    //  Also must be called "state", it's a pre-coded thingie.
    this.state = {
      showUsers: true
    };
  }

  //  In classes, can't put methods inside the render() function, put them here:
  toggleUsersHandler() {
    //  THE WRONG WAY!
    //this.state.showUsers = false;

    //  The right way: Always takes an object. Merges the new and existing object.
    //this.setState({});

    //  But for ones w prevState, this is somehow right?!
    this.setState((curState) => {
      return {showUsers: !curState.showUsers};
    });
  }

  //  consts can go in the render() method, just not functions... even though .map() is one....
  render() {

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );  

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/*const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};*/

export default Users;