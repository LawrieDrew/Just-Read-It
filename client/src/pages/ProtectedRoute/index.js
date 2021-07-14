import React, { useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import BookCard from "../../components/BookCard";
import "./style.css";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {
	const { user } = useContext(UserContext)
	return (
		<div>
				
				<h1>Welcome {user.username}!</h1>
				<BookCard/>
				{/* <div>
					<iframe src="/audio/homepage.mp3" allow="autoplay" style="display:none" id="iframeAudio">
					</iframe> 
					<audio autoplay loop id="playAudio">
						<source src="/audio/homepage.mp3"/>
					</audio>			
				</div> */}

				<div>
					<iframe src="/audio/homepage.mp3" allow="autoPlay">
					</iframe> 
					<audio loop autoPlay>
						<source src="/audio/homepage.mp3" type="audio/filetype"/>
					</audio>
				</div>
				
		</div>
		
	)

}

export default ProtectedRoute;