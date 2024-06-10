// 定义状态容器(仓库)
// 修改容器(仓库)中的 state
// 仓库中的 action 的使用

import { defineStore} from 'pinia'

export const mainStore = defineStore('main',{
    state:()=>{
        return {
            helloPinia:'pinia test!',
            count:0,
            phone:'17808098401'
        }
    },
    getters:{
        phoneHidden():string{
            return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    },
    actions:{
        changeState(){
            this.count++
            this.helloPinia = 'change helloPinia!!!'
        }
    }
})
