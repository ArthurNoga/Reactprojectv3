import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const fetchProjectsByUserId = (userid) => {
    console.log(userid)
        return axios
        .get(API_URL + "fetchdata/?dev=15",)
        .then((response) => {
            response.data.map((project) => {
                console.log(project.name)
            })
            return null;
        });
};

const projectService = {
    fetchProjectsByUserId
}

export default projectService