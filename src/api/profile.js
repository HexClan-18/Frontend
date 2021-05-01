import axios from "axios";

// export const createProfile = async (data) => {
//   const response = await axios.post("/api/profile", data);

//   return response;
// };

// export const createProfile = async (data) => {
//   // const config = {
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // };

//   const response = await axios.post("/api/profile/createProfile");

//   return response;
// };

/****************************** */
export const updateUsername = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.patch(
    "/api/profile/username/:firstname",
    data
    // config
  );

  return response;
};
/************************************* */

// export const updateUsername = async (data) => {
//   fetch("/username", {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       userId: id,
//     }),
//   });

//   const response = await axios.patch("/api/profile/username", id);
// };
// .then((res) => res.json())
// .then((result) => {
//   console.log(result);
//   const newData = data.map((item) => {
//     if (item._id == result._id) {
//       return result;
//     } else {
//       return item;
//     }
//   });
//   setData(newData);
// })
// .catch((err) => {
//   console.log(err);
// });

export const updateBio = async (data) => {
  const response = await axios.post("/api/profile", data);

  return response;
};

export const updateLocation = async (data) => {
  const response = await axios.post("/api/profile", data);

  return response;
};

export const updatePicture = async (data) => {
  const response = await axios.post("/api/profile", data);

  return response;
};

export const updatePassword = async (data) => {
  const response = await axios.post("/api/profile", data);

  return response;
};
