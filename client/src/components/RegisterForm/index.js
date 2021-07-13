import React, { useRef } from 'react'
import Card from "../Card"

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="d-flex align-items-center justify-content-center flex-column container">
			<Card title="Register a New User">
				<form
					ref={formRef}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							username: userNameRef.current.value,
							password: passwordRef.current.value
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
						<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
						<button className="btn btn btn-success" type='submit'>Submit</button>
					</div>
				</form>
			</Card>
		</div>
	)
}


export default RegisterForm