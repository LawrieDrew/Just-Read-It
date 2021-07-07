import React, {Fragment, useState} from "react";

const Auth = () => {
    const [register, setRegister] = useState(false);

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        name:'',
        username:'',
    })

    const {email, password, name, username} = formData;

    const onChange = (e) =>{
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    console.log(formData)

    const onSubmit= (e) => {
       e.preventDefault();
       console.log("button clicked") 
    }

    //Classes 
    const registerClass = !register ? 'form-switcher_option' : 'form-switcher_option selected';

    const loginClass = register ? 'form-switcher_option' : 'form-switcher_option selected';

    const buttonText = register ? "Sign Up" : "Login"

    return (
        <Fragment>
        
            <div className="form-switcher">
                <div className={loginClass} onClick={e => setRegister(false)}>Login</div>
                <div className={registerClass} onClick={e => setRegister(true)}>Sign Up</div>
            </div>

            <div className="login-form">
                <form className="login-form_group" onSubmit={(e) => onSubmit(e)}>
                    <input className='input_text'
                    type= "name"
                    placeholder= "name"
                    name ="name"
                    value={name}
                    onChange={(e)=> onChange(e)}
                    required
                    />

                    <input className='input_text'
                    type= "email"
                    placeholder= "email address"
                    name ="email"
                    value={email}
                    onChange={(e)=> onChange(e)}
                    required
                    />

                    <input className='input_text'
                    type= "username"
                    placeholder= "username"
                    name ="username"
                    value={username}
                    onChange={(e)=> onChange(e)}
                    required
                    />

                    <input className='input_text'
                    type= "password"
                    placeholder= "password"
                    name ="password"
                    value={password}
                    onChange={(e)=> onChange(e)}
                    required
                    />

                    <input className= "input_submit"
                    type = "submit"
                    value ={buttonText}
                    />
                </form>
            
            </div>
       
        </Fragment>

        
    )
}

export default Auth;