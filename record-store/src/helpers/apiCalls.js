import axios from 'axios';

const URL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

export const helpFetchImages = async () => {
  console.log(URL);
  try {
    const images = await axios.get(`${URL}/images`);
    return images;
  } catch (err) {
    console.log(err);
  }
};

export const helpFetchUser = async (email, password) => {
  try {
    const user = await axios.post(`${URL}/users/login`, {
      email,
      password,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const helpFetchRecords = async () => {
  try {
    const records = await axios.get(`${URL}/records`);

    return records;
  } catch (err) {
    console.log(err);
  }
};

// PUT to update the user info
export const helpUpdateUser = async (userData) => {
  const { _id, ...newUserData } = userData;

  try {
    const updatedUser = await axios.put(`${URL}/users/${_id}`, newUserData);
    return updatedUser;
  } catch (err) {
    console.log(err);
  }
};

// POST to create a new user
export const helpAddUser = async (userObj) => {
  try {
    const user = await axios.post(`${URL}/users`, userObj);
    // console.log(user);
    return user;
  } catch (err) {
    return err.response && err.response.data;
  }
};

export const authenticateUser = async () => {
  try {
    const res = await axios.post(`${URL}/me/auth`);
    console.log(
      "hi from api calls, that's what authenticate user returns",
      res
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// ORDERS
export const helpAddOrder = async (ordersArray) => {
  try {
    const newOrder = await axios.post(`${URL}/orders`, ordersArray);
    return newOrder.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpGetOrders = async () => {
  try {
    const userOrders = await axios.get(`${URL}/me/orders`);

    return userOrders.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpLogoutUser = async () => {
  try {
    return await axios.get(`${URL}/users/logout`);
  } catch (err) {
    console.log(err);
  }
};
