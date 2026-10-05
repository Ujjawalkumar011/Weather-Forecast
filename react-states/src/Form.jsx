import { useState } from "react"

export default function Form(){
     let [formData,setFormData] = useState({
        fullName : "",
        UserName : "",
        password : "",
     })
   let handleInputChange = (event) =>{
    setFormData((currData) =>{
        currData[ event.target.name] = event.target.value;
        return {...currData}
    });
   }
  let handleSubmit = (event) =>{
    event.preventDefault();
    setFormData({ fullName : "",
        UserName : "",
        password: "",
    })
}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">fullName</label>
            <input placeholder="enter your full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
             <br></br><br></br> 

            <label htmlFor="userName">userName</label> 
            <input placeholder="enter your full name" type="text" value={formData.UserName} onChange={handleInputChange} id="userName" name="UserName"/>
            <br></br><br></br> 

            <label htmlFor="password">userName</label> 
            <input placeholder="enter your password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    )
}