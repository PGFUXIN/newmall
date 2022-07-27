import Vue from 'vue'
import VueRouter from 'vue-router'
const Categroy = ()=>import('../view/categroy/categroy');
const Home = ()=>import('../view/home/home');
const Shopcart = ()=>import('../view/shopcart/shopcart');
const User = ()=>import('../view/user/user');
Vue.use(VueRouter)

const routes=[{
  redirect:'/Home',
  path:'',
  component:Home
},
  {
    name:'home',
    path:'/Home',
    component:Home
  },
  {
    name:'categroy',
    path:'/Categroy',
    component:Categroy
  },
  {
    name:'shopcat',
    path:'/Shopcart',
    component:Shopcart
  },
  {
    name:'user',
    path:'/User',
    component:User
  }];

const vueRouter = new VueRouter({
  routes:routes,
  mode:'history'
});

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

export default vueRouter