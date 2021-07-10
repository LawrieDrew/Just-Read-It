import React, { useState, useEffect } from "react";
import API from "../utils/API";
import List from "../components/List";
import ListItem from "../components/ListItem";
// import BookBtn from "../components/BookButton";
// import StartBtn from "../components/StartButton";
// import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import HText from "../components/HText";
import "./style.css";

function Home() {
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

    function upDateBlurb(synopsis) {
        document.getElementById("Blurb").innerHTML = synopsis;
        playPop();
    }

    function playPop() {
      var pop = document.getElementById('pop');
        pop.currentTime = 0;
        pop.play();
    }

    function goToBook(_id){
      window.location = "/"+_id
    }

    return (

      <div className="home"> 

        <div className="main">
            <HText>
              Just Read It!
            </HText>
            <Wrapper >
                  {stories.length ? (
                <List className="booklist">
                  {stories.map(stories => (
                    <ListItem className="book" key={stories._id} onClick={() => upDateBlurb(stories.synopsis)}>
                        <audio id="pop" src={"./audio/"+"pop"+".mp3"}></audio>
                        <h3 className="story-title">
                          Title: {stories.title} <br></br>
                        </h3>
                        <img className="book" onMouseOver={() => upDateBlurb(stories.synopsis)} onClick={() =>goToBook(stories._id)} href={"/"+stories._id} src="./images/book.png" alt="book"/>

                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}

              <h2 id="Blurb">Hello! Welcome to JustReadIt! Start by clicking on a story to hear about it.</h2>

            </Wrapper>
        </div>

        <div className="background">
            <div>
                {/* KIDS */}
                <img className="kid1" src="./images/background/KID1relative.png" alt="kid1"></img>
                <img className="kid2" src="./images/background/KID2relative.png" alt="kid2"></img>
                <img className="kid3" src="./images/background/kid3relative.png" alt="kid3"></img>
                <img className="kid4" src="./images/background/kid4relative.png" alt="kid4"></img>
                <img className="kid5" src="./images/background/kid5relative.png" alt="kid5"></img>

                {/* SUN AND CLOUDS */}
                <img className="sun" src="./images/background/SUN.png" alt="sun"></img>
                <img className="cloud1" src="./images/background/CLOUD1.png" alt="cloud1"></img>
                <img className="cloud2" src="./images/background/CLOUD2.png" alt="cloud2"></img>
                <img className="cloud3" src="./images/background/CLOUD2.png" alt="cloud3"></img>
                
            </div>
        </div>

      </div>
    )

}

export default Home;