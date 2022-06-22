import React from "react";
import styles from './style.module.css'


const RepoCard = (props) => {

    const { name, forks, stargazers, issues, url } = props.data

    
    const onClickRepo = (e) => {
        console.log(url)
    }

    return(
        <>
            <p className={styles.para}>
                <p className={styles.repoName}><a onClick={onClickRepo}>{name}</a></p>
                <ul>
                    <li>Forks:{forks}</li>
                    <li>Stargazers: {stargazers}</li>
                    <li>Issues: {issues}</li>
                </ul>
                </p>
        </>
    )

}




export default RepoCard





