import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFmMDc4NTE4Yzk1ZWM3YjJmMWFkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njg0NDI1MywiZXhwIjoxNjg3MTAzNDUzfQ.xuw1n8nnlKOlBc6XdFOQogedQeiB6mHc-u8YK3QfPJ0";

export const publicRequest = axios.create({
    baseURL: BASE_URL
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });