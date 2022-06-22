import React from 'react';
import { useSelector } from 'react-redux';



export default function () {

    const data = useSelector(state => state.username)

    if (data.data) {
        console.log(data.data[2])
    }
    const something = () => {
        if (data.data) {

            return data.data.map((e) => { return <p>{e.name}</p> })
        } else {
            <h1>NO DATA!!!</h1>
        }
    }


    return (
        <section>
            <div>
                {data.data ? something() : "nothing"}
            </div>
        </section>
    )
}
