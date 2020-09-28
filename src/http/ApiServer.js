import axios from "axios";
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

const axiosins = axios.create({
    baseURL:"/api",
    timeout:15000
})
// 添加请求拦截器
axiosins.interceptors.request.use(function (config) {
    NProgress.start()
    return config;
});

// 添加响应拦截器
axiosins.interceptors.response.use(function (response) {
    NProgress.done()
    return response.data;
}, function (error) {
    NProgress.done()
    return Promise.reject(error);
});


export default axiosins;