import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import List from "../components/List";
import ListItem from "../components/ListItem";
// import BookBtn from "../components/BookButton";
// import StartBtn from "../components/StartButton";
// import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper"



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
        document.getElementById("Blurb").innerHTML = synopsis
    }

    function goToBook(_id){
      window.location = "/"+_id
    }
    return (
        <div>
          <Wrapper>
                <h1>Just Read It</h1>
                <h2>Welcome {credentials && credentials.username}</h2>
                {stories.length ? (
              <List>
                {stories.map(stories => (
                  <ListItem key={stories._id} onClick={() => upDateBlurb(stories.synopsis)}>
                      <strong>
                        Title: {stories.title} <br></br>
                      </strong>
                      <img onMouseOver={() => upDateBlurb(stories.synopsis)} onClick={() =>goToBook(stories._id)} href={"/"+stories._id} src="./images/book.png" alt="book"/>
              
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

            <h2 id="Blurb">Hello! Welcome to JustReadIt! Start by clicking on a story to hear about it.</h2>
            <Cloud/>
            </Wrapper>
            
        </div>
    )

}

export default Home;