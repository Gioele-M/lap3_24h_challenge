import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { SearchForm } from "../../components";
import { GetResult } from "../../actions";



const Home = () => {

    //where we need to make calls to the redux/store

    //dispatch stuff

    const result = useSelector(state => state.result)
    // const result = ''
    const dispatch = useDispatch();

    const search = searchTerm => dispatch(GetResult(searchTerm));

    return (
        <>
            <h1>Home page</h1>
            <SearchForm GetResult={search} />

        </>
    )
}


export default Home
