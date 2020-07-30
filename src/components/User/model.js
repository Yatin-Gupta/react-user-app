import axios from 'axios';

const baseUrl = "https://reqres.in";

async function getUser(userId) {
    const url = `${baseUrl}/api/users/${userId}`;
    const response = await axios.get(url);
    return response;
}

export default {
    getUser
};