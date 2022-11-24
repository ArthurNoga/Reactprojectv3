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

            const datas = response.data
            const array = []
            const client = []
            datas.data.map(u => {

                if (u.attributes.dev.id == userid) {
                    array.push(u)
                }
                if (u.attributes.dev.id == userid) {
                    client.push(u.attributes.client)
                }

            })

            return {array, client}

        });
};

const projectService = {
    fetchProjectsByUserId
}

export default projectService