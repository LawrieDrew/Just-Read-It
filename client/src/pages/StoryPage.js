import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../utils/API";
import "./style.css";
import Content from "../components/Content";
// import List from "../components/List";
// import ListItem from "../components/ListItem";
import Col from "../components/Col";

//FONT AWESOME PLAY BUTTON
//MUST INSTALL THIS DEPENDENCY TO HAVE PLAY BUTTON - joey
// npm install --save @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function StoryPage(props) {
  var audio1 = document.getElementById('audio1');
  var audio2 = document.getElementById('audio2');
  var audio3 = document.getElementById('audio3');
  const playButton = <FontAwesomeIcon icon={faPlay} />

  const [story, setStory] = useState({})

    const {id} = useParams()
    useEffect(() => {
      API.getStory(id)
        .then(res => setStory(res.data))
        .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   


    function increment() {
      document.getElementById("pageOne").classList.add("hidden");
      document.getElementById("pageTwo").classList.remove("hidden");
    }
    function increment2() {
      document.getElementById("pageTwo").classList.add("hidden");
      document.getElementById("pageThree").classList.remove("hidden");
    }
    function increment3() {
      console.log("incremenet user level + 1")
      window.location.href="/"
    }


    return (
        <div>
            <h2>{story.title}</h2> 
            <Col size="md-4">
            <Content>
              <div id="pageOne">
              <h3>{story.page1}</h3>
              <img src={"./images/"+story.page1Keyword+".png"} alt="icon"/>
        
              <audio id="audio1" src={"./audio/"+story.page1Keyword+".mp3"}></audio>
              <button onClick={() => audio1.play()}>{playButton}</button>
              
              <button onClick={() => increment()}>Next Page</button>
              </div>

              <div id="pageTwo" className="hidden">
              <h3 >{story.page2}</h3>
              <img src={"./images/"+story.page2Keyword+".png"} alt="icon"/>

              <audio id="audio2" src={"./audio/"+story.page2Keyword+".mp3"}></audio>
              <button onClick={() => audio2.play()}>{playButton}</button>

              <button onClick={() => increment2()}>Next Page</button>
              </div>
              
              <div id="pageThree" className="hidden">
              <h3 >{story.page3}</h3>
              <img src={"./images/"+story.page3Keyword+".png"} alt="icon"/>

              <audio id="audio3" src={"./audio/"+story.page3Keyword+".mp3"}></audio>
              <button onClick={() => audio3.play()}>{playButton}</button>

              <button onClick={() => increment3()}>Complete Story!</button>
              </div>
            </Content>
            </Col>
            
        
         
        </div>
          
      );
};

export default StoryPage;