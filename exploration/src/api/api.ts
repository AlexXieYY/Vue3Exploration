import request, { AxiosRequestConfig } from "axios";

// 定义请求的返回类型，根据实际情况修改
interface ResponseData {
    // 示例：
    data: any;
}

export function getServe(): Promise<ResponseData> | any {
    const config: AxiosRequestConfig = {
        url: "", // 添加请求的URL地址
        method: "get",
    };

    return request(config);
}

