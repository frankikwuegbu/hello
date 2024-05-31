import { useState, useEffect } from "react";

function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('state updated ' + word)
    }, [word]);

    useEffect(() => {
        console.log('state updated ' + word2)
    }, [word2]);

    return(
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h1>search for the defintion of {word}</h1>

            <input type="text" onChange={(e) => {
                setWord2(e.target.value);
            }} />
            <h1>search for the defintion of {word2}</h1>
        </>
    )
}

export default Dictionary;