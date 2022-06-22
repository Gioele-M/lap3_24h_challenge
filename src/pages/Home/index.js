import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { SearchForm, RenderRepo, UserInfo } from "../../components";
import { GetResult } from "../../actions";



const Home = () => {


    const dispatch = useDispatch();

    const search = searchTerm => dispatch(GetResult(searchTerm));


    return (
        <>
            <h1>Home page</h1>
            <SearchForm GetResult={search} GetUsername={search} />
            <UserInfo />
            <RenderRepo />
        </>
    )
}


export default Home
