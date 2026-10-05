import { useState } from "react";

export default function Joker(){
    let [joke,setJoke] = useState ({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
     
    const getNewJoke = async () =>{
        
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup, punchline: jsonResponse.punchline});

    }

    return(
        <div>
            <h2>joker</h2>
            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}