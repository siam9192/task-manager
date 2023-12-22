import axios, { Axios } from 'axios';
import React from 'react';

const AxiosBase = () => {
    const base = axios.create({
        baseURL:'https://task-manager-iceuqvfbr-siam-hasans-projects.vercel.app/api/v1'
    })
    return base;
}

export default AxiosBase;
