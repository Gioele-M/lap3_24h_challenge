import React, { useState } from "react";
import styles from './style.module.css'

import UserInfo from "../UserInfo";

const SearchForm = ({ GetResult, GetUsername }) => {

    const [user, setUser] = useState('')
    const [userinfo, setUserinfo] = useState(false)

    // console.log(GetResult)

    const onFormSubmit = (e) => {
        e.preventDefault()

        GetUsername(user)
        GetResult(user)
        setUser('')

        setUserinfo(true)
    }

    const onUserChange = (e) => {
        const input = e.target.value
        setUser(input)
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="username">Username:</label>
                <input className={styles.username} placeholder="Insert github username" type="text" id="username" value={user} onChange={onUserChange} />
                <button className={styles.button} type="submit">submit</button>
            </form>
            {userinfo ? <UserInfo /> : "nothing"}
        </div>
    )


}


export default SearchForm
