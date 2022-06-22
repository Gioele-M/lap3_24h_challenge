import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { SearchForm } from "../../components";




const Home = () => {

    //where we need to make calls to the redux/store

    //dispatch stuff

    //const result = useSelector(state => state.result)
    const result = ''


    return (
        <>
            <h1>Home page</h1>
            <SearchForm />

        </>
    )
}


export default Home
