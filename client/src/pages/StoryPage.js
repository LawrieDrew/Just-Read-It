import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../utils/API";


function StoryPage(props) {
    const [story, setStory] = useState({})

    const {id} = useParams()
    useEffect(() => {
      API.getStory(id)
        .then(res => setStory(res.data))
        .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div>
            <h2>{story.title}</h2> 
                
            <button>Next Page</button>
         
        </div>
          
      );
};

export default StoryPage;