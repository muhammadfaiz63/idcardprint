'use server';
import axios from 'axios';

const timeout = Number(15000);

export const fetchApi = async ({ method, baseUrl, url, params, data, headers, ...rest }: Props) => {
    console.log("method, baseUrl, url, params, data",method, baseUrl, url, params, data)

    const finalHeaders = {
        rejectUnauthorized: false,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        ...headers,
    };

    const response = await axios({
        timeout,
        baseURL:baseUrl,
        url,
        params,
        method,
        headers: finalHeaders,
        data: data && JSON.stringify(data),
        ...rest,
    }); 
    return response.data;
};

interface Props {
    method?: string;
    baseUrl?: string;
    url?: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
    headers?: Record<string, unknown>;
}