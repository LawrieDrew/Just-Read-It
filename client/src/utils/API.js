import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    //create user 
    createUser: function(){
        return axios.post("/api/user/signup")
    },
    //get all users 
    getUsers: function() {
        return axios.get("/api/user");
    },
    //get specific user by id 
    getUser: function(id) {
        return axios.get("api/user/"+ id);
    },
    //get all stories
    getStories: function() {
        return axios.get("api/story/")
    },
    getStory: function(id) {
        return axios.get("api/story/"+id);
    }
};