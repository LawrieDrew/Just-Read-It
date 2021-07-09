import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../utils/API";
import "./style.css";
import Content from "../components/Content";
// import List from "../components/List";
// import ListItem from "../components/ListItem";
import Col from "../components/Col";
import Row from "../components/Row";
import Card from 'react-bootstrap/Card';


function StoryPage(props) {
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
      <div className="story-page">
        <div className="story-card">
            <h2>{story.title}</h2> 
            <Col size="md-4">
            <Card className="story-card">
            <Content>
              <div id="pageOne">
              <h3> {story.page1}</h3>
              <img src={"./images/"+story.page1Keyword+".png"} alt="icon"/>
              <button className="next-btn" onClick={() => increment()}>Next Page</button>
              </div>

              <div id="pageTwo" className="hidden">
              <h3 >{story.page2}</h3>
              <img src={"./images/"+story.page2Keyword+".png"} alt="icon"/>
              <button className="next-btn" onClick={() => increment2()}>Next Page</button>
              </div>
              
              <div id="pageThree" className="hidden">
              <h3 >{story.page3}</h3>
              <img src={"./images/"+story.page3Keyword+".png"} alt="icon"/>
              <button className="next-btn" onClick={() => increment3()}>Complete Story!</button>
              </div>
            </Content>
            </Card>
            </Col>
            </div>
            <Col>
              <Row>
              <div id="pageOne">
                <div>
                <button className="answer-btn" size="lg">
                  Answer 1
                </button>
                <button className="answer-btn" size="lg">
                  Answer 2
                </button>
                <button className="answer-btn" size="lg">
                  Answer 3
                </button>
                </div>
                </div>
                </Row>
              </Col>
            
            
        
         
        </div>
        
          
      );
};

export default StoryPage;