import React from 'react';
import { useSelector } from 'react-redux';

import styles from './style.module.css'


export default function () {

    const data = useSelector(state => state.userinfo)
    // console.log(data)
    const something = () => {
        console.log(data)
        if (data) {
            console.log('i have been called')

            const name = data.name == null ? "Not Registered" : data.name

            if (data.login == null || data.login == '') return <p>Please insert a GitHub username and click on the repo to find out more!</p>

            return <p >Name: {name}, Login: {data.login}, Repos: {data.publicRepos}, Followers: {data.followers}, Following: {data.following}</p>
        } else {
            <h1>NO DATA!!!</h1>
        }
    }


    return (
        <section>
            <div className={styles.container}>
                <p className={styles.userinfo}>{data ? something() : <p>Nothing here</p>} </p>
            </div>
        </section>
    )
}
