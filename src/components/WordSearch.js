import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WordSearch() {
        const [word, setWord] = useState('');
        const navigate = useNavigate();

    return(
        <form 
            className="flex space-between space-x-1 max-w-[300px]"
            onSubmit={() =>{
            navigate('/dictionary/' + word);
        }}>
            <input 
                className="px-3 py-1 rounded shrink min-w-0"
                placeholder="search word"
                type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <button className="bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded">Search</button>
        </form>  
    )
}