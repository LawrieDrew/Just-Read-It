import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List,  ListItem }  from "../components/List";
import BookBtn from "../components/BookButton";
// import StartBtn from "../components/StartButton";
import { Link } from "react-router-dom";



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

   

    return (
        <div>
                <h1>Just Read It</h1>
                {stories.length ? (
              <List>
                {stories.map(stories => (
                  <ListItem key={stories._id} onClick={() => upDateBlurb(stories.synopsis)}>
                      <strong>
                        Title: {stories.title} <br></br>
                      </strong>
                      <BookBtn onClick={() => upDateBlurb(stories.synopsis)}> Hear about this story </BookBtn>
                      <Link to={"/"+stories._id}>Read story!</Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

            <h2 id="Blurb">Hello! Welcome to JustReadIt! Start by clicking on a story to hear about it.</h2>
            
        </div>
    )

}

export default Home;