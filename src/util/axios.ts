import axiosRaw from 'axios';

const axios = axiosRaw.create({
    // 前端地址
  baseURL: 'http://localhost:8080/api',
  timeout: 15000,
});

export default axios;
