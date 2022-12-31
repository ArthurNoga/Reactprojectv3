import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const fetchProjectsByUserId = (userid) => {
    let project = {id: "",name: "", description: "", technology: "",isOver:""};
    let clients = [];
    const projects = [];

        return axios
        .get(API_URL + "fetchproject?dev=15",)
        .then((response) => {
            response.data.map((i) => {
                project.id = i.id;
                project.name = i.name;
                project.description = i.description;
                project.technology = i.technology;
                project.isOver = i.isOver;

                projects.push(project);

            });
            return projects
        });
};

const projectService = {
    fetchProjectsByUserId
}

export default projectService