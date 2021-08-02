<template>
  <AddListBtn @click="openForm"/>
  <Form
    @add-list="addList"
    v-if="isFormShow"
    @close-form="clsForm"
    v-bind:editObj="editObj"
    @update-list="updateList"
    @empty-obj="emptyObj"
    @empty-index="emptyIndex"
  />
  <Table
    @delete-event="deleteList"
    @edit-event="editList"
    :lists="lists"
    v-if="!isFormShow"
  />
</template>

<script>
import Table from "./components/Table.vue";
import AddListBtn from "./components/AddListBtn.vue";
import Form from "./components/Form.vue";

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
    return { lists: [], isFormShow: false, editObj:{}, objIndex : String };
  },
  methods: {
    addList(obj) {
      //add new data
      this.lists = [...this.lists, obj];
      //close form
      this.toggleForm();
    },
    deleteList(index) {
      var answer = confirm("確定刪除？");
      if (answer) {

        this.lists = this.lists.filter((e,i) => {
          return i != index;
        });
 
        // id will be wrong
        // this.lists = this.lists.filter((obj) => {
        //   return obj.id !== id;
        // });
      }
    },
    editList(index) {

      // declare objIndex for later update use
      this.objIndex = index;
      this.editObj = this.lists[index];

      //identify edit action 
      this.editObj.type = "edit";

      // ---- user can edit id so this will be wrong--------------
      // let editObjArr = this.lists.filter((obj) => {
      //   return obj.id == id;
      // });
      // this.editObj = JSON.parse(JSON.stringify(editObjArr[0]));
      // ----------------------------------------------------------

      //open form
      this.toggleForm();

    },updateList(obj){
    
      //重寫陣列
      this.lists[this.objIndex] = obj;
     
      

      //--------id will be wrong
      // this.lists.forEach((e) => {   
      //   if(e.id==this.editObj.id){
      //     e.id = obj.id;
      //     e.name = obj.name;
      //     e.status = obj.status;
      //   }
      // })
      //-------------------------------

    },emptyObj(){
      //清空物件
      this.editObj ={
        id:"",
        name:"",
        status:"",
      };
    },emptyIndex(){
      this.objIndex ="";
    },toggleForm() {
      this.isFormShow = !this.isFormShow;
    },openForm() {
      this.isFormShow = true;
    },clsForm(){
       this.isFormShow = false;
    },
  },
  created() {
    this.lists = [
      {
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
    ];
  },
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
