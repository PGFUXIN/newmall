import {request} from './request'
export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}