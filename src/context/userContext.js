import { createContext, Component } from "react";
import { guestlogin } from '../api/auth'
import Axios from 'axios'

export const UserContext = createContext();

const initialState = {};

class UserContextProvider extends Component {
  state = initialState;

  //get users from token
  usersFromToken(token) {
    Axios.get('/api/user/token/byGuest').then(res => {
      if (res.data)
        this.setState({ ...res.data, token })
      else {
        Axios.get('/api/user/token/byOwner').then(res2 => {
          this.setState({ ...res2.data, token })
        })
      }
    })
  }

  componentDidMount() {
    if (localStorage.getItem('jwt'))
      this.usersFromToken()
  }
  /**
   * Use this function in the login
   * @param {*} userDetails
   */
  loginUser = (userDetails) => {
    this.setState(userDetails);
  };

  render() {
    console.log("Im in context");
    return (
      <UserContext.Provider
        value={{
          loginDetails: this.state,
          loginHandler: this.loginUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
