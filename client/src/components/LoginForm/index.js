import React, { useRef } from 'react'
import Card from "../Card"



function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="d-flex justify-content-center align-items-center flex-column container">
			
			<h1> Just Read It!</h1>
			<Card title="Login with username and password">
					<form
						ref={formRef}
						onSubmit={(e) => {
							e.preventDefault();
							return onLogin({
								username: userNameRef.current.value,
								password: passwordRef.current.value
							});
						}}
					>
						<div className="form-group">
							<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
							<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
							<button className="btn btn-success" type='submit'>
								Submit
								</button>
						</div>
					</form>

				
			</Card>

		</div>
		
	)
}


export default LoginForm