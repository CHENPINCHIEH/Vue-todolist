// import Vue from 'vue';
import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        // data source
        lists: [{
                id: 24,
                name: "Buy Grocery",
                status: "Todo",
            },
            {
                id: 25,
                name: "Send Email",
                status: "In Progress",
            },
            {
                id: 28,
                name: "Finish Assignment",
                status: "Complete",
            },
            {
                id: 30,
                name: "Bake Cake",
                status: "Todo",
            },
            {
                id: 31,
                name: "Write Blog Post",
                status: "In Progress",
            },
        ],
        editObj:{},
        objIndex:Number,
    },
    mutations: {
        // 第一個參數是state, 第二個才是傳進來的
        addList(state,obj) {
            state.lists.push(obj);
        },
        deleteList(state,index){
            state.lists = this.state.lists.filter((e, i) => {
                return i != index;
            });
        },
        updateList(state, obj){
            state.lists[state.objIndex] = obj;
        },
        editList(state,index){
            const editObj = state.lists[index];
            editObj.type = "edit";
            state.editObj = editObj;
            state.objIndex = index;
        },
        emptyEditObj(state){
            state.editObj = {};
        }
    },
    actions: {
        addList(context,obj){
            context.commit('addList',obj);
        },
        deleteList(context,index) {
            context.commit('deleteList',index);
        }, 
        // {commit} : need to call commit multiple times
        editList({commit,state}, index) {
            commit('editList', index);
        },
        updateList(context,obj){
              context.commit('updateList',obj);
        },
        emptyEditObj(context){
            context.commit('emptyEditObj');
        }
    },
    modules: {}
})

export default store;