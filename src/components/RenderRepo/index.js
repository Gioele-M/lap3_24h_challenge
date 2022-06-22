import React from 'react';
import { useSelector } from 'react-redux';

import styles from './style.module.css'
import { RepoCard } from '../'

export default function () {

    const data = useSelector(state => state.username)

    if (data.data) {
        console.log(data.data[0])
    }
    const something = () => {
        if (data.data) {

            
            return data.data.map((e) => { 
                const data = {name: e.name, forks: e.forks, stargazers: e.stargazers_count, issues: e.open_issues, url: e.url}
                return  <RepoCard data={data} /> 
            }) //<p className={styles.para}>{e.name}</p>
        } else {
            return <h1>NO DATA!!!</h1>
        }
    }


    return (
        <section>
            <div className={styles.container}>
                {data.data ? something() : "Please input a github username"}
            </div>
        </section>
    )
}
