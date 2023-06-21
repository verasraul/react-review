import { randomAdvice } from "../services/Constants";
import {useState, useEffect } from 'react';



function Random(props) {
    const [counsel, setCounsel] = useState("")

    async function handleClick(){
        const answer = await randomAdvice()

        setCounsel(answer.data.slip.advice)
    }
        useEffect(() => {

        }, [handleClick])

    return (
        <div>
            <h1>Random Advise</h1>
            <button onClick={() => handleClick()} >Click For Random Advice</button>
            <p>ANSWER GOES HERE</p>
        </div>
    )
}