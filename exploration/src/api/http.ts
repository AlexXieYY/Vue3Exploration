import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// 创建axios实例化
const service = axios.create({
    baseURL: "/api",
    timeout: 30000, // 请求超时时间
    headers: {
        "Content-Type": "application/json;charset=UTF-8" // 表单数据传递转化
    },
    withCredentials: true // 自动添加服务器提供cookie信息
});

// // 请求拦截器 发送数据到后台前拦截
// service.interceptors.request.use(
//     (config: AxiosRequestConfig): AxiosRequestConfig => {
//         return config;
//     },
//     (error: any) => {
//         console.log("axios中request报错", error);
//         return Promise.reject(error);
//     }
// );
//
// // 响应拦截器 获取后台数据前拦截器
// service.interceptors.response.use(
//     (response: AxiosResponse) => {
//         return response.data;
//     },
//     (error: any) => {
//         console.log("axios中response报错", error);
//         return Promise.reject(error);
//     }
// );

export default service;
