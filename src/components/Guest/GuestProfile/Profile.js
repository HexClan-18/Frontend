import React, { useState, useEffect, useContext } from "react";

/**
 * @author
 * @function Profile
 **/

const Profile = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);

  return <div>Profile</div>;
};

export default Profile;
