import { useState,useEffect} from "react"

export default function Counter(){
    let[count,setCount] = useState(0);

    let increseCount = () =>{
        setCount(currCount => currCount + 1);
    };
    useEffect(function printSome(){
        console.log("this is a side effect")
    })

    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={increseCount}>+1</button>
        </div>
    )
}