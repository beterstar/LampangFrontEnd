import axios from "axios";
import { getToken } from "../utils/app.utils";
const token = getToken();


const instance = axios.create({
    baseURL: 'https://',  //DEV
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
    },
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log(error);
    }
);

if (token) {
    instance.interceptors.response.use(
        (resp: any) => {
            return resp;
        },
        (validate) => {
            return validate;
        }
    );
}
export default class BaseAPI {
    static api = instance;
}

