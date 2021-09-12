import { Fragment, Component } from 'react';

import Users from './Users';
import styles from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

/*const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];*/

class UserFinder extends Component {
    //  Can only connect a class-based component to one context, so use "static":
    static contextType = UsersContext;

    constructor() {

        super();

        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        //  Send http request....
        this.setState({filteredUsers: this.context.users});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                )
            });
        }
    }

    searchChangeHandler(event) {
        //  This gets merged w the existing object, so filteredUsers won't get lost.
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <input className={styles.finder} type='search' onChange={this.searchChangeHandler.bind(this)} />
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }

}

/*const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input className={styles.finder} type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
};*/

export default UserFinder;