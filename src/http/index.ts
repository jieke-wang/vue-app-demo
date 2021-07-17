import axios from 'axios'
import { ElMessage } from 'element-plus'

const $http = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 2000,
    headers: {
        // token: localStorage.getItem('token')
    }
});

// 请求拦截
$http.interceptors.request.use(config => {
    config.headers.token = localStorage.getItem('token');
    return config;
}, err => {
    console.log(err);
});

// 响应拦截
$http.interceptors.response.use(res => {
    return res.data;
}, err => {
    ElMessage.error("请求失败");
    return Promise.reject(err);
});

export default $http