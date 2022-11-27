import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const fetchProjectsByUserId = (userid) => {
    return axios
        .get(API_URL + "projects/",)
        .then((response) => {
            const data = response.data
            const client = []
            data.data.map(u => {
                    client.push(u.attributes.client)
            })

            return {data, client}
        });
};

const projectService = {
    fetchProjectsByUserId
}

export default projectService