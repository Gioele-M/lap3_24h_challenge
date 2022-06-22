//actions here with fetching
import React, { useState } from 'react';
import axios from 'axios';


export const GetResult = () => {


    async function loadRepos() {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get("https://api.github.com/users/dartbill/repos", opts)
            console.log(data)
            // setRepo(data)

        } catch (err) {
            console.warn(err)
        }
    }


    return loadRepos()
};



