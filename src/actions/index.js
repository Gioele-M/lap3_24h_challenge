import axios from 'axios';

export const getResult = (username) => {
    const loading = location => ({ type: 'USERNAME', payload: location });

    async function loadRepos() {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`, opts)
            console.log(data)
            return data
            // setRepo(data)
        } catch (err) {
            console.warn(err)
        }
    }
    return async dispatch => {
        dispatch(loading(loadRepos()))
    }
};






export const GetResult = username => {

    const loadResult = (username) => ({
        type: 'USERNAME',
        payload: username
    });

    return async dispatch => {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`, opts)
            // console.log(data)
            // console.log(username)

            dispatch(loadResult({ data }))
        } catch (err) {
            console.warn(err.message);
        };
    };
};