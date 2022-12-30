import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const addClient = (firstname, lastname, mail, tel) => {
    return axios.post(API_URL + "addClient", {
        firstname,
        lastname,
        mail,
        tel
    }, config);
};

const getCLientById = async (id) => {

    await axios.get(API_URL + "clients/" + id + "/")
        .then((response) => {
            return response.data.data
        })
}

const ClientServices = {addClient, getCLientById}
export default ClientServices