import { createContext, Component } from "react";

export const UserContextInquiry = createContext();

const initialState = {
  username: "",
  userId: "",
  priviladgeLevel: "",
};

class UserContextInquiryProvider extends Component {
  state = initialState;

  /**
   * Use this function in the login
   * @param {*} userName
   * @param {*} userId
   * @param {*} prviladgeLevel
   */
  loginUser = (userName, userId, prviladgeLevel) => {
    this.setState({
      username: userName,
      userId: userId,
      priviladgeLevel: prviladgeLevel,
    });
  };

  render() {
    return (
      <UserContextInquiry.Provider
        value={{
          loginDetails: this.state,
          loginHandler: this.loginUser,
        }}
      >
        {this.props.children}
      </UserContextInquiry.Provider>
    );
  }
}

export default UserContextInquiryProvider;
