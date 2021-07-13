import React, { useContext } from 'react';
import LoginForm from "../LoginForm";
import { UserContext } from '../../utils/UserContext';
import "./style.css";
import Floats from '../Floats';


function Login() {
	const { loginUser } = useContext(UserContext);


    /* We need to POST to the API the users info,
        This will get passed down as a prop to the LoginForm */
	const login = (data) => {
		console.log('Logging in ' + JSON.stringify(data));
		fetch('api/users/login', {
			method: 'POST',
			body: JSON.stringify(data),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(response => {
				if (response.status === 200) { //All good
					return response.json();
				}
			})
			.then((response) => {
				loginUser(response);
			})
			.catch((err) => {// No beuno, kick them
				console.log('Error logging in.', err);
			});
	}

	return (
		<div className="container">
			<Floats/>
			<LoginForm onLogin={login} />
		</div>
	)
}

export default Login;