import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  // instance.interceptors.response.setHeader("Access-Control-Allow-Origin", "*")
  instance.interceptors.response.use(result=>{
    return result.data
  },err=>{
    return err
  })
  return instance(config)
}

export function requestTest(config){
  const instance = axios.create({
    baseURL:'http://192.168.0.81:8080',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  instance.interceptors.response.use(result=>{
    return result.data
  },err=>{
    return err
  })
  return instance(config)
}