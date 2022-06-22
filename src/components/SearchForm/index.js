import React, { useState } from "react";
import { GetResult } from "../../actions";

const SearchForm = () => {

    const [user, setUser] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(user)
        GetResult(user)
        setUser('')


        // dispatch({type:'TITLE', payload: song})
        // dispatch({type: 'ARTIST', payload:artist})


    }

    const onUserChange = (e) => {
        const input = e.target.value
        setUser(input)
        // console.log(user)


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
