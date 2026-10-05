import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let[comment,setComment] = useState([{
        username : "vk",
        comments : "great job",
        rating : 4
    }]);
let addNewCommnet = (comment) =>{
    setComment((currComments) =>[...currComments, comment])
}    
    return (
        <div>
            <h2>all comments</h2>
            {comment.map((comments,idx)=>(
                <div className="Comment" >
                <span>{comments.username}</span>
                &nbsp;&nbsp;
                <span>rating:{comments.rating}</span>
                <br></br><br></br>
                 <span>{comments.comments}</span>
            </div>
            ))}
           
            <hr></hr>
            <CommentsForm addNewCommnet={addNewCommnet}/>
        </div>
        
    )
}