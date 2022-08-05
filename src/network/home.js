import {request,requestTest} from './request'
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(params){
  return request({
    url:'/home/data',
    params
  })
}