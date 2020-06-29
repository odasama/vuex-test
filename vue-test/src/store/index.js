import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    counter:1000,
    students:[
      {id:"001",name:"张三",age:20},
      {id:"002",name:"李四",age:25},
      {id:"003",name:"王五",age:30}
    ],
    info:{
      name:'oda',
      age:28
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    addition(state,count){
      state.counter+=count
    },
    updateInfo(state){
      //无法响应式添加属性
      //state.info['address']='济南'

      //响应式添加属性
      //Vue.set(state.info,'address','济南')

      //无法响应式删除属性
      //delete state.info.name

      //响应式删除属性
      //Vue.delete(state.info,'name')
    },
    aupdateInfo(state){
      state.info.name='sama'
    }
  },
  actions:{
    aupdateInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('aupdateInfo')
          console.log(payload)
          resolve('返回结果');
        },1000)
      })
    }
  },
  getters:{
    more20Stu(state){
      return state.students.filter(student=>student.age>20)
    },
    more20StuLength(state,getters){
      return getters.more20Stu.length
    },
    more20StuAge(state) {
      return age => state.students.filter(student => student.age > age)
    }
  },
  modules:{
    
  }
})

export default store
