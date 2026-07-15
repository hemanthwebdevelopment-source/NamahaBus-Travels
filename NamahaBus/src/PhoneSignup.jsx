import React from "react"
import { useState } from 'react'
import { PhoneInput } from "react-simple-phone-input";
import "react-simple-phone-input/dist/index.css";
import "./PhoneSignup.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"
import {auth} from "./firebase/setup"
 //  const [value, setValue] = useState()
export default function PhoneSignup(){
    let [phone,setPhone] = useState("");
    let [user,setUser] = useState(null);
    let [otp,setOtp] = useState("");
    const Sendotp=async()=>{
        try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const conformation = await signInWithPhoneNumber(auth,phone,recaptcha);
      console.log(conformation);
      setUser(conformation);
    }catch(err){
        console.error(err);
    }}

    const verifyOtp=async()=>{
        try{
           await user.confirm()  
        }
        catch(err){
            console.error(err);
        }
    }
    return(
        <div className="phone-signup">
            <div className="phone-content">
            <PhoneInput
            country="IN"
            placeholder="Add your phone"  onChange={() =>setPhone("+" +phone)}/>
            <Button onClick={Sendotp} sx={{marginTop:"10px"}} variant="contained" endIcon={<SendIcon />}>
                SendOTP
            </Button>
            <div sx={{marginTop:"10px"}} id="recaptcha"></div>
            <br></br>
            <TextField onClick={(e)=>setOtp(e.target.value)} sx={{marginTop:"10px",width:"300px"}} variant="outlined" size="smail" label="Enter OTP" />
            <br></br>
            <Button onClick={verifyOtp} sx={{marginTop:"10px"}} variant="contained" color="success" endIcon={<SendIcon />}>
            Verify OTP
            </Button>
        </div>
    </div>
    )
}