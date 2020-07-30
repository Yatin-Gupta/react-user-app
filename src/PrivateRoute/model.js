const USER_STORAGE_KEY = 'user';

/**
 * Get the user data from local storage
 */
function getData() {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

export default {
    getData
};