import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";
import "./style.css"
import { Link } from "react-router-dom"
import Friends from "../Friends";

function BookCard() {

     function Stop() {
         var audie = document.getElementById("homepageAudio");
                 audie.animate({volume: 0}, 400);
           }

    const { user } = useContext(UserContext);  
    const [stories, setStories] = useState([])

  
      useEffect(() => {
          loadStories()
      }, [])
  
      function loadStories() {
          API.getStories()
          .then(res =>
              setStories(res.data)
          )
          .catch(err => console.log(err));
      }

      let userLevel = user.level

      let userStories = stories.filter(story => story.level <= userLevel)
     
      console.log(userStories)

      function upDateBlurb( title, synopsis) {
        document.getElementById("Blurb").innerHTML = 
        `
       ${title}<br/>${synopsis}<br/>
      
      `
     }  
     
     // removed audio button for blurb
     // <img id="soundBtn" src="./images/sound.png" onClick={() => chapter()}/> 

      return (        
          <div id="landing" className="container">
              
              <div id="bookshelf" className="container">
                {userStories.length ? (
                                    
                    <div className="d-flex justify-content-center flex-wrap ">
                    {userStories.map(userStories => (
                        <Link to={{
                            pathname: `story/${userStories._id}`
                            }}>
                        <div className="books">
                        <img className="rounded mx-auto d-block" onClick={Stop()} onMouseOver={() => upDateBlurb(userStories.title, userStories.synopsis)}  src="./images/book.png" alt="book"/>
                        
                        </div>
                        </Link>
                        
                    ))}
                    
                    <h3 id="Blurb" className="animated fadeIn" >Welcome to Just Read it!</h3>
                    </div>
                   
                ) : (
                    <h1>...loading</h1>
                )}

                <Friends/>
            
            </div>      

            <div>
					<iframe src="/audio/homepage.mp3" allow="autoPlay" >
					</iframe> 
					<audio loop autoPlay id="homepageAudio">
						<source src="/audio/homepage.mp3" type="audio/filetype" />
					</audio>
			</div>          
          </div>
      )
  
  }
  
  export default BookCard;