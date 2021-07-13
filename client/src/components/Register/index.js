import React, { useContext } from 'react';
import RegisterForm from "../RegisterForm";
import { useHistory } from "react-router";
import { UserContext } from '../../utils/UserContext';
import "./style.css";
import Floats from '../Floats';
//The component for doing the actual signup of the User

function Register() {
	const { loginUser } = useContext( UserContext );

	const register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((response) => {
				if (response.status === 200) { //All good
					return response.json();
				}
			}).then(response => {
				loginUser(response);
			})
			.catch((err) => {// No beuno, kick them
				console.log('Error logging in.', err);
			});
	}

	return (
		<div>
			<Floats/>
			<RegisterForm onRegister={register} />
		</div>
	)

}

export default Register