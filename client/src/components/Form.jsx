import React, { useState } from 'react'

const Form = () => {
        // more than one state
          //  getter,   setter!
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <div>
        <div className='row'>
            
            <form action="" className="col-md-4 offset-2  mt-5 pt-3 pb-3 bg-primary text-white">
            <h2>More than one state</h2>
                <div className='form-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            {/* Display in real time form data */}
            <div className='col-md-4 offset-1 mt-5 pt-3 pb-3 bg-primary text-white'>
                <h2>Display Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    </div>
  )
}

export default Form  