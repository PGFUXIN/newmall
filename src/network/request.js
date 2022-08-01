import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
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