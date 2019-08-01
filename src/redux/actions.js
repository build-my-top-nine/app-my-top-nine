import axios from 'axios'

export const SEND_DETAILS = "SEND_DETAILS"
export const USER_LOGGED_IN = "USER_LOGGED_IN"

export const sendDetails = creds => dispatch => {
    console.log(creds)
    return axios
        //.post('http://localhost:5000/auth/register', {name: 'test1', email: "test@test.com", password: "test"})
        .post('http://localhost:5000/auth/register', {email: "test@test.com", password: "test", name: "test"})
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
  }
