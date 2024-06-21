import request from "../utils/request";

interface LoginParams {
    username: string;
    password: string;
}
export const GO_LOGIN = (params:LoginParams) => {
    return request({
        url: '/getLogin',
        method: 'get',
        params
    })
}