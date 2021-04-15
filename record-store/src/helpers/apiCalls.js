import axios from 'axios'

const URL = 'http://localhost:5001';
axios.defaults.withCredentials = true;

export const helpFetchImages = async () => {
    try {
        const images = await axios.get(`${URL}/images`)
        return images
    } catch (err) {
        console.log(err)
    }
}

export const helpFetchUser = async (email, password) => {
	
    try {
        const user = await axios.post(`${URL}/users/login`, {
			email,
			password
		})

        return user;		
    } catch (err) {
        console.log(err);
    }
}

export const helpFetchRecords = async () => {
    try {
        const records = await axios.get(`${URL}/records`)

        return records
    } catch (err) {
        console.log(err)
    }
}

// PUT to update the user info
export const helpUpdateUser = async ({id, firstName, lastName, nickname}) => {
    try {
		// id, firstname, lastname, nickname
        const updatedUser = await axios.put(`${URL}/users/${id}`, {firstName, lastName, nickname})
		return updatedUser;
    } catch (err) {
        console.log(err)
    }
}

// POST to create a new user
export const helpAddUser = async (userObj) => {
    try {
        const user = await axios.post(`${URL}/users`, userObj)
        console.log(user);
        return user;		
    } catch (err) {
        return err.response && err.response.data
    }
}

export const authenticateUser = async() => {
    try {
        const res = await axios.post(`${URL}/me/auth`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

// ORDERS

// add order

// get orders
