import axios from 'axios';
// connection utilisateur
export const loginUser = (values) => {
    const url = 'api/users/login';

    return axios.post(url, values)
        .then(response => response.data);
}


// inscription utilisateur
export const registerUser = (values) => {
    const url = 'api/users';

    return axios.post(url, values)
        .then(response => response.data);
}
