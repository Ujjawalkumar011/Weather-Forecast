import { useState } from "react";
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let [arr,setArr] = useState(["no moves"]);
    
    let updateBlue =() =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, blue:prevMoves.blue+1};
        });
        // setArr((prrarr)=>{ return {(...prrarr,"blue arr")}})

    };
    let updateyellow =() =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, yellow:prevMoves.yellow+1};
        });
    };
    let updatered =() =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, red:prevMoves.red+1};
        });
    };
    let updategreen =() =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, green:prevMoves.green+1};
        });
    };

    return(
        <div>
            <p>Game ludo</p>
            <p>{arr}</p>
            <div className="board">
                 <p>Blue Moves = {moves.blue} </p>
                 <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                 <p>red Moves = {moves.red} </p>
                 <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
                 <p>green Moves = {moves.green}</p>
                 <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
                 <p>yellow Moves ={moves.yellow} </p>
                 <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateyellow}>+1</button>
            </div>
        </div>
    );
};