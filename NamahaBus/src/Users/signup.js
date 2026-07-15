import React from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function signup(){
    return(
        <div>
        <PhoneInput
        country={'us'}
        // value={this.state.phone}
        // onChange={phone => this.setState({ phone })}
/>
        </div>
    )
}