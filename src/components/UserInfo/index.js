import React from 'react';
import { useSelector } from 'react-redux';




export default function () {

    const data = useSelector(state => state.userinfo)
    // console.log(data)
    const something = () => {
        console.log(data)
        if (data.data) {
            console.log('i have been called')

            return data.data.map((e) => { return <p >{e.name}</p> })
        } else {
            <h1>NO DATA!!!</h1>
        }
    }


    return (
        <section>
            <div>
                <p>{data ? something() : "nothing"}</p>
            </div>
        </section>
    )
}
