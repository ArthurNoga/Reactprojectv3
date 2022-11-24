import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const register = (firstname, lastname, username, password, price = 0) => {
    return fetch(
        API_URL + "devs/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                username,
                password,
                price
            }),
        }
    )
};

const login = (username, password) => {
    return axios
        .get(API_URL + "devs/",)
        .then((response) => {

            const datas = response.data

            let data={}
            datas.data.map(u=> {
            if(u.attributes.username===username){
                data=u
            }
            })
            return data

        });
};



const logout = () => {
    localStorage.removeItem("user");
    localStorage.clear()
};

const AuthService = {
    register,
    logout,
    login

};

export default AuthService