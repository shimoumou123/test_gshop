//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import MSite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//创建一个路由器

const router = new VueRouter({
    routes:[
        {
           path:'/msite',
           component:MSite,
           meta:{
               showFooter:true
           }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            component:MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
        }
    ]
})

router.beforeEach((to,from,next)=>{
   if(to.meta.isAutt){
        if(localStorage.school =='atguigu'){
            next();
        }else{
            alert('学校错误')
        }
    }else{
        next();
    }
})
router.afterEach((to,from)=>{
    document.title = to.name
})
export default router