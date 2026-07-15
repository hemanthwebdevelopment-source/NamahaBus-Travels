import { useState } from "react";

export default function Login(){
    let [userdata,setUserdata] = useState({username:"",password:""})    
    let handledata= ()=>{
        setUserdata((currData)=>{
          return {...currData, [event.target.name]:event.target.value};
        })
    }
    let loginform = async(event)=>{
        event.preventDefault();
        try{
        const res =await fetch("http://localhost/3000/login",{
            method:"Post",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
        const data = await res.json(userdata);
        alert(data.message);
    }catch (err) {
      console.log(err);
      alert("Something went wrong");
}
}
    return (
    <div>
    <h1>Login</h1>
    <div>
            <form onSubmit={loginform}>
            <div>
            <label htmlFor="username">Username</label>
            <input onChange={handledata} name="username" id="username" placeholder="Enter your username" required type="text"></input>
            {/* <div class="valid-feedback"> Looks good!</div> */}
        </div>
            <div class="mb-3">
                <label htmlFor="password">Password</label>
                <input onChange={handledata} name="password" id="password" type="password" placeholder="Enter your password" required></input>
                {/* <div class="valid-feedback"> Looks good!</div> */}
            </div>
            <button >Login</button>
            </form>
    </div>
</div>
)
}