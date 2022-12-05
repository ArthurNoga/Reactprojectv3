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

            let data = {}

            datas.data.map(u => {
                if (u.attributes.username === username && u.attributes.password === password) {
                    data = u
                }
            })
            const err = new Error("not found")
            console.log(response)
            return data.attributes.username == username && data.attributes.password == password ? data : err


        })
};


const logout = () => {
    localStorage.removeItem("user");
    localStorage.clear()
};

const changePassword = (user) => {
    // return fetch(
    //     API_URL + "devs/" + user.id + "/",
    //     {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             firstname: user.attributes.firstname,
    //             lastname: user.attributes.lastname,
    //             username: user.attributes.username,
    //             password: user.attributes.password,
    //             price: user.attributes.price,
    //             globalEarnings: user.attributes.globalEarnings
    //         }),
    //     }
    // )
    try {
        const response = axios.put( API_URL + "devs/" + user.id + "/", user)
        return response
    } catch (err) {
        // custom error
        console.log(err)
    }
}
const AuthService = {
    register,
    logout,
    login,
    changePassword
};

export default AuthService