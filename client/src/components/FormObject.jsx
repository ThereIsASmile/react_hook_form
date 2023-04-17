import React, { useState } from 'react'

const FormObject = () => {
        // getter, setter
    const [user, setUser] = useState({
        firstNameObject: "",
        lastNameObject: "",
        emailObject: "",
        passwordObject: "",
        confirmPasswordObject: "",
        hasBeenSubmitted:false
    })


    const changeHandler = (event) => {
        console.log(event.target.name, event.target.value)
        setUser({...user,[event.target.name]: event.target.value})
    }
    // name can be switched with id if needed... in the input tag

return (
<div>
    <div className='row'>
        
        <form action="" className="col-md-4 offset-2  mt-5 pt-3 pb-3 bg-success text-white">
        <h2>Only one state </h2>
        <p>made with an object of keys and values.</p>
        <p>It uses one change handler.</p>
            <div className='form-group'>
                <label htmlFor="firstNameObject">First Name</label>

                <input type="text" name="firstNameObject" className="form-control" onChange={changeHandler} value={user.firstNameObject}/>

                {user.firstNameObject.length> 0 && user.firstNameObject.length < 3 ?(
                    <p>First name must be more than 3 characters.</p>
                    ) : null
                }

            </div>
            <div className='form-group'>
                
                <label htmlFor="lastNameObject">Last Name</label>

                <input type="text" name="lastNameObject" className="form-control" onChange={changeHandler} value={user.lastNameObject}/>

                {user.lastNameObject.length> 0 && user.lastNameObject.length < 3 ?(
                    <p>Last name must be more than 3 characters.</p>
                    ) : null
                }

            </div>
            <div className='form-group'>
                <label htmlFor="emailObject">Email</label>

                <input type="text" name="emailObject" className="form-control" onChange={changeHandler} value={user.emailObject}/>

                {user.emailObject.length>0 && user.emailObject.length < 8 ?( 
                    <p>Email must be more than 8 characters.</p>
                    ) : null
                }

            </div>
            <div className='form-group'>
                <label htmlFor="passwordObject">Password</label>

                <input type="password" name="passwordObject" className="form-control" onChange={changeHandler} value={user.passwordObject}/>

                {user.passwordObject.length>0 && user.passwordObject.length < 8 ?( 
                    <p>Password must be more than 8 characters.</p>
                    ) : null
                }

            </div>
            <div className='form-group'>
                <label htmlFor="confirmPasswordObject"> Confirm Password</label>

                <input type="password" name="confirmPasswordObject" className="form-control" onChange={changeHandler} value={user.confirmPasswordObject}/>

                {user.confirmPasswordObject.length>0 && user.confirmPasswordObject.length < 8 ?( 
                    <p>Password must be more than 8 characters.</p>
                    ) : null
                }
                {user.confirmPasswordObject !== user.passwordObject ? (<p>Passwords does not match.</p>
                ): null}

            </div>
        </form>
        {/* Display in real time form data */}
        <div className='col-md-4 offset-1 mt-5 pt-3 pb-3 bg-success text-white'>
            <h2>Display Form Data</h2>
            <p>First Name: {user.firstNameObject}</p>
            <p>Last Name: {user.lastNameObject}</p>
            <p>Email: {user.emailObject}</p>
            <p>Password: {user.passwordObject}</p>
            <p>Confirm Password: {user.confirmPasswordObject}</p>
        </div>
    </div>
</div>
)
}

export default FormObject