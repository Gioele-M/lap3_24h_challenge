import React, { useState } from "react";
import styles from './style.module.css'


const RepoCard = (props) => {

    const { name, forks, stargazers, issues, url } = props.data

    const [clicked, setClicked] = useState(false)
    
    const onClickRepo = (e) => {
        console.log(url)
        setClicked(!clicked)
    }

    const repoList = <ul>
    <li>Forks:{forks}</li>
    <li>Stargazers: {stargazers}</li>
    <li>Issues: {issues}</li>
    </ul>

    return(
        <>
            <p className={styles.para}>
                <p className={styles.repoName}><a onClick={onClickRepo}>{name}</a></p>
                { clicked ? repoList : ""}
                </p>
        </>
    )

}




export default RepoCard





