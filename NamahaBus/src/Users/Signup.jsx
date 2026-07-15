import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const navigate  = useNavigate()
      const [userDetails,setUserDetails] = useState({username:"",email:"",password:"",age:""});
      const handleInputChange=(event)=>{
         setUserDetails((currData)=>{
          return {...currData, [event.target.name]:event.target.value};
         })
         // console.log(setUserDetails);
        }
        // console.log(userDetails);
      const submitForm =async (event)=>{
        event.preventDefault();
        try{
        const res = await fetch("http://localhost:3000/signup",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userDetails)
        })
    //    await navigate("/");
        const data = await res.json();
        alert(data.message);
       }catch (err) {
      console.log(err);
      alert("Something went wrong");
}
}
        return(
    <div>
    <h1>SignUp on NamahaBus</h1>
    <div>
            <form onSubmit={submitForm}>
            <div >
            <label htmlFor="username" >Username</label><br></br>
            <input onChange={handleInputChange} name="username" id="username" placeholder="Enter your username"  required type="text"></input>
            {/* <div class="valid-feedback"> Looks good!</div> */}
        </div>
            <div >
                <label htmlFor="password" >Password</label>
                <input onChange={handleInputChange} name="password" id="password" type="password" placeholder="Enter your password" required></input>
                {/* <div class="valid-feedback"> Looks good!</div> */}
            </div>
             <div >
                <label htmlFor="email">Email</label>
                <input onChange={handleInputChange} name="email" id="email" placeholder="Enter your email" required type="email"></input>
                {/* <div class="valid-feedback"> Looks good!</div> */}
            </div>
             <div >
                <label htmlFor="age">Age</label>
                <input onChange={handleInputChange} name="age" id="age" placeholder="Enter your age" required type="number"></input>
                {/* <div class="valid-feedback"> Looks good!</div> */}
            </div>
            <button className="button">SignUp</button>
            </form>
    </div>
</div>
)
}
