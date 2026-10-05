import { useState } from "react";

export default function TodoList(){
    const[ticket,setTicket] = useState([0, 0, 0]);

    const generateTicket = () =>{
        let newTicket = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        setTicket(newTicket);
    };
    return (
        <div>
             
        </div>
    );
};