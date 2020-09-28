export default {
    state:{
        test:"test-a"
    },
    getters:{},

    //分完仓库之后 仓库内部的mutations和actions 还是注册在全局的
    mutations:{
        updateA(state,msg){
            //state : 分仓库的state
            state.test = msg
        }
    },
    actions:{
        updateA({commit,state},msg){
            //state : 分仓库的state
            console.log(msg);
            commit("updateA",msg)
        }
    }
}