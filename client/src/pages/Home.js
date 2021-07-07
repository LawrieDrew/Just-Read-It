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

            <HText>
              Just Read It!
            </HText>
            <Wrapper>
                  {stories.length ? (
                <List>
                  {stories.map(stories => (
                    <ListItem  key={stories._id} onClick={() => upDateBlurb(stories.synopsis)}>
                        <audio id="pop" src={"./audio/"+"pop"+".mp3"}></audio>
                        <h3 className="story-title">
                          Title: {stories.title} <br></br>
                        </h3>
                        <img onMouseOver={() => upDateBlurb(stories.synopsis)} onClick={() =>goToBook(stories._id)} href={"/"+stories._id} src="./images/book.png" alt="book"/>
                        
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}

              <h2 id="Blurb">Hello! Welcome to JustReadIt! Start by clicking on a story to hear about it.</h2>

            </Wrapper>
          
          
            
        </div>
    )

}

export default Home;