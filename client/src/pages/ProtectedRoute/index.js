import React, { useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import BookCard from "../../components/BookCard";
import "./style.css";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {

	const { user } = useContext(UserContext)
	return (
		<div className="wrapper">
				<h1>Welcome {user.username}!</h1>
				<BookCard/>
		</div>
	)

}

export default ProtectedRoute