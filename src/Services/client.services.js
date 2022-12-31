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


const fetchClientsByUserId = (userid) => {

    let clients = [];
    const projects = [];
    return axios
        .get(API_URL + "fetchuserclient/?dev=15",)
        .then((response) => {
            console.log(response.data)
            response.data.map((i,) => {
                const client = {
                    id: i.id,
                    firstname: i.firstname,
                    lastname: i.lastname,
                    mail: i.mail,
                    tel: i.tel,
                    url: i.url,
                }
                clients.push(client);
            })

                return clients;
            });


};
const ClientServices = {addClient, getCLientById,fetchClientsByUserId}
export default ClientServices