import axios from 'axios';

const baseUrl = "https://reqres.in";
const USER_STORAGE_KEY = 'user';

/**
 * Request api to validate user and valid user token
 * @param {*} details User details
 */
async function loginUser(details) {
    const url = `${baseUrl}/api/login`;
    const response = await axios.post(url, JSON.stringify(details), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

/**
 * Save user details along with token in JSON string format in local storage
 * @param {*} data Data javascript object 
 */
function saveData(data) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Get user details from the local storage and return it in javascript object form
 */
function getData() {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

export default {
    loginUser,
    saveData,
    getData
};