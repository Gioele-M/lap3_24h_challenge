import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { SearchForm, RenderRepo, UserInfo } from "../../components";
import { GetResult, GetUsername } from "../../actions";

import styles from "./style.module.css"

const Home = () => {


    const dispatch = useDispatch();

    const searchUserName = searchTerm => dispatch(GetUsername(searchTerm))

    const searchResult = searchTerm => dispatch(GetResult(searchTerm));


    return (
        <>
            <h1 className={styles.title} >GitHub Search</h1>
            <SearchForm GetResult={searchResult} GetUsername={searchUserName} />
            <UserInfo />
            <RenderRepo />
        </>
    )
}


export default Home
