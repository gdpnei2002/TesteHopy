import axios from "axios";

const options = axios.create ({
    method: "POST",
    url: "https://api.hopypay.com.br/v1/transactions",
    headers: {
        authorization: 'Basic ' + new Buffer("{SECRET_KEY}:x").toString('base64')
    }
})
export default options;