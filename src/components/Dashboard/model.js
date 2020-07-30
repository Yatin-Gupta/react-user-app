import axios from 'axios';

const baseUrl = "https://reqres.in";
const USER_STORAGE_KEY = 'user';

/**
 * Get users by page number
 * @param {number} pageNo Page number
 */
async function getUsers(pageNo = 1) {
    const url = `${baseUrl}/api/users?page=${pageNo}`;
    const response = await axios.get(url);
    return response;
}

/**
 * Logs out the user 
 */
function logoutUser() {
    try {
        if (localStorage.getItem(USER_STORAGE_KEY)) {
            localStorage.removeItem(USER_STORAGE_KEY);
        }
        return true;
    }
    catch (ex) {
        return false;
    }


}

export default {
    getUsers,
    logoutUser
};