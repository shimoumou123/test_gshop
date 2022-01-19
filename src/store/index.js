//该文件用于创建Vuex 中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
const countOption = {
    namespaced:true,
    actions:{
        jia(context,value){
            context.commit('JIA',value)
        },
        jian(context,value){
            context.commit('JIAN',value)
        },
        jiaOdd(context,value){
            if(context.state.sum%2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value){
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
            
        }
    },
    mutations:{
        JIA(state,value){
            state.sum +=value
        },
        JIAN(state,value){
            state.sum -=value
        },
    },
    state:{
        sum:0,
        schoolName:'尚硅谷',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }

}

export default  new Vuex.Store({
 
    modules:{
        countAbout:countOption
    }
})

