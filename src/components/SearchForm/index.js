import React, { useState } from "react";
import { GetResult } from "../../actions";

const SearchForm = () => {

    const [user, setUser] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        GetResult()


        // dispatch({type:'TITLE', payload: song})
        // dispatch({type: 'ARTIST', payload:artist})


    }

    const onUserChange = (e) => {
        setUser(e.target.user)

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
