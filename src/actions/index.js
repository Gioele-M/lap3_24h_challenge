import axios from 'axios';


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

export const GetUsername = username => {
    console.log(username)

    const loadResult = ({ login, name, publicRepos, followers, following }) => ({
        type: 'USERINFO',
        payload: { login: login, name: name, publicRepos: publicRepos, followers: followers, following: following }
    });
    return async dispatch => {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get(`https://api.github.com/users/${username}`, opts)
            console.log(data)
            const something = { login: data.data.login, name: data.data.name, publicRepos: data.data.public_repos, followers: data.data.followers, following: data.data.following }
            dispatch(loadResult(something))
        } catch (err) {
            console.warn(err.message);
        };
    };
};





