import React, { useState } from "react";
import styles from './style.module.css'

const SearchForm = ({ GetResult, GetUsername }) => {

    const [user, setUser] = useState('')

    // console.log(GetResult)

    const onFormSubmit = (e) => {
        e.preventDefault()

        GetUsername(user)
        GetResult(user)
        setUser('')

    }

    const onUserChange = (e) => {
        const input = e.target.value
        setUser(input)
    }

    return (
        <div >
            <form className={styles.container} onSubmit={onFormSubmit}>
                <label className={styles.label} htmlFor="username">Username: </label>
                <input className={styles.username} placeholder="Insert GitHub Username" type="text" id="username" value={user} onChange={onUserChange} />
                <button className={styles.button} type="submit">Submit!</button>
            </form>
        </div>
    )


}


export default SearchForm
