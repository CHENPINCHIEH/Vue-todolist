<template>
  <AddListBtn @click="openForm"/>
  <!-- <Form
    @add-list="addList"
    v-if="isFormShow"
    @close-form="clsForm"
    v-bind:editObj="editObj"
    @update-list="updateList"
    @empty-obj="emptyObj"
    @empty-index="emptyIndex"
  /> -->
  <!------------- vuex ------------>
    <Form
    v-if="isFormShow"
    @close-form="clsForm"
    @empty-obj="emptyObj"
    @empty-index="emptyIndex"
  />
  <Table
    @open-form="openForm"
    v-if="!isFormShow"
  />

</template>

<script>
import Table from "./components/Table.vue";
import AddListBtn from "./components/AddListBtn.vue";
import Form from "./components/Form.vue";
import { mapState,mapActions,mapGetters } from 'vuex'


export default {
  name: "App",
  components: {
    // short hand
    // Table,
    Table: Table,
    AddListBtn,
    Form,
  },
  data() {
    return { isFormShow: false,};
  },
  methods: {
    //  addList(obj) {

    //     // this.lists = [...this.lists, obj];

    //     // store
    //     // store.addList(obj);

    //     // 只寫在data沒有用
    //     // this.lists = store.state.lists;
    //     // console.log(this.lists);

    //   // close form
    //   this.toggleForm();
    // },
    // deleteList(index) {

    //   var answer = confirm("確定刪除？");

    //   if (answer) {

    //     // store
    //     store.deleteList(index);
    //     this.lists = store.state.lists;


    //     // id will be wrong
    //     // this.lists = this.lists.filter((obj) => {
    //     //   return obj.id !== id;
    //     // });
    //   }
    // },
    // editList() {

      // declare objIndex for later update use
      // this.objIndex = index;
      // this.editObj = this.lists[index];

      //identify edit action 
      // this.editObj.type = "edit";

      // ---- user can edit id so this will be wrong--------------
      // let editObjArr = this.lists.filter((obj) => {
      //   return obj.id == id;
      // });
      // this.editObj = JSON.parse(JSON.stringify(editObjArr[0]));
      // ----------------------------------------------------------

      //open form
      // this.toggleForm();
    // },
    // updateList(obj){
    //  store.updateList(obj,this.objIndex);
    //  this.lists = store.state.lists;

      //--------id will be wrong
      // this.lists.forEach((e) => {   
      //   if(e.id==this.editObj.id){
      //     e.id = obj.id;
      //     e.name = obj.name;
      //     e.status = obj.status;
      //   }
      // })
      //-------------------------------},
    // emptyObj(){
    //   //清空物件
    //   this.editObj ={
    //     id:"",
    //     name:"",
    //     status:"",
    //   };
    // },
    // emptyIndex(){
    //   this.objIndex ="";
    // },
    toggleForm() {
      this.isFormShow = !this.isFormShow;
    },openForm() {
      this.isFormShow = true;
    },clsForm(){
       this.isFormShow = false;
    },
  },
  created() {

    // this.lists = [
    //   {
    //     id: 24,
    //     name: "Buy Grocery",
    //     status: "Todo",
    //   },
    //   {
    //     id: 25,
    //     name: "Send Email",
    //     status: "In Progress",
    //   },
    //   {
    //     id: 28,
    //     name: "Finish Assignment",
    //     status: "Complete",
    //   },
    //   {
    //     id: 30,
    //     name: "Bake Cake",
    //     status: "Todo",
    //   },
    //   {
    //     id: 31,
    //     name: "Write Blog Post",
    //     status: "In Progress",
    //   },
    // ];

  
  },
  computed:{
    // 只要 lists 改變都會重新計算並觸發相關聯的DOM 
    // ...mapState(['lists']),
 
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 800px;
  margin: 30px auto;
}

.status.Todo {
  color: gray;
  border: 1px solid gray;
}

.status.Progress {
  color: rgba(255, 190, 27, 0.981);
  border: 1px solid rgba(255, 190, 27, 0.981);
}

.status.Complete {
  color: rgb(92, 128, 19);
  border: 1px solid rgb(92, 128, 19);
}
</style>
