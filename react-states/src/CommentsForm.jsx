import { useState } from "react";
import { useFormik } from 'formik';

export default function CommentsForm({addNewCommnet}){
    // let [formData,setFormData] = useState({
    //     username : "",
    //     comments : "",
    //     rating : 1
    // });


     const formik = useFormik({
     initialValues: {
       username : "",
       comments : "",
       rating : 1,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData,[event.target.name] : event.target.value};
        })
    }
    let handleSubmit = (event) =>{
        console.log(formData);
        addNewCommnet(formData);
        event.preventDefault();
    }
     return (
        <div>
            <p>Give me Comments !</p>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="username">username</label> &nbsp;
                <input placeholder="UserName" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br></br><br></br>
                
                <label htmlFor="comment">comment</label> &nbsp;
                <textarea placeholder="comments" value={formData.comments} onChange={handleInputChange} id="comment" name="comments"></textarea>
                <br></br>
                
                <label htmlFor="rating">rating</label> &nbsp;
                <input placeholder="Rating" type="number" value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
     )
}