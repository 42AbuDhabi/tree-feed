import axios from "axios/index";

export function signUpNewUser(data) {
    return new Promise(async (resolve, reject) => {
        axios.post(process.env.REACT_APP_API_URL + "/users/register", data)
        .then(results => {
            resolve(results.data) 
        })
        .catch(err => { 
            console.error(err);
            resolve(false);
        });
    })

};