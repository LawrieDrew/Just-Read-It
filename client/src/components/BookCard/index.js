import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";
import "./style.css"
import { Link } from "react-router-dom"
import Friends from "../Friends";

function BookCard() {

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

      function playPop() {
        var pop = document.getElementById('pop');
          pop.currentTime = 0;
          pop.play();
      }

      function upDateBlurb( title, synopsis) {
        document.getElementById("Blurb").innerHTML = 
        `
       ${title}<br/>${synopsis}<br/>
      <img id="soundBtn" src="./images/sound.png"/> 
        `
     }  
     

    
    

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
                        <img className="rounded mx-auto d-block" onMouseOver={() => upDateBlurb(userStories.title, userStories.synopsis)}  src="./images/book.png" alt="book"/>
                        <audio id="pop" src={"./audio/"+"pop"+".mp3"}></audio>
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
          </div>
      )
  
  }
  
  export default BookCard;