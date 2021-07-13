import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const AuthButton = () => {
	const { user, logoutUser } = useContext(UserContext);
	const { pathname } = useLocation();

	const buttonStyle = {
		marginRight: 10
	};

	const handleLogout = () => {
		fetch('api/users/logout', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(response => {
				if (response.status === 200) {
					logoutUser();
				}
			})
			.catch((err) => {
				console.log('Error logging out.', err);
			});
	}

	return (
		user ? (
			<button className="btn btn-secondary"
				onClick={handleLogout}>
				Logout
			</button>
		) : ( pathname === '/login'
				? <Link style={buttonStyle} className="btn btn-success register" to="/register">Register</Link>
				: <Link className="btn btn-success login" to="/login">Login</Link>
			)
	)
}

export default AuthButton;