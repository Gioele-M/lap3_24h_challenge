import React, { useState } from "react";
import { GetResult } from "../../actions";

const SearchForm = ({ GetResult }) => {

    const [user, setUser] = useState('')

    // console.log(GetResult)

    const onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(user)
        GetResult(user)
        setUser('')

    }

    const onUserChange = (e) => {
        const input = e.target.value
        setUser(input)
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={user} onChange={onUserChange} />
                <button type="submit">submit</button>
            </form>
        </div>
    )


}


export default SearchForm
