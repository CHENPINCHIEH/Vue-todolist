<template>
  <!-- sumit 事件觸發  -->
  <form @submit="onSumit">
    <!-- v-model bind data , input tag (watch) -->
    <!-- <label>id :</label><input v-model="formValue.id" type="text" /><br />
    <label>name :</label><input v-model="formValue.name" type="text" /><br />
    <label>status :</label
    ><input v-model="formValue.status" type="text" /><br /> -->

    <!-- v-model bind data with Function, input tag (computed) -->
    <!-- <label>id :</label><input v-model="formValueId" type="text" /><br />
    <label>name :</label><input v-model="formValueName" type="text" /><br />
    <label>status :</label><input v-model="formValueStatus" type="text" /><br /> -->

    <!-- created -->
    <label>id :</label><input v-model.trim="id" type="text" /><br />
    <label>name :</label><input v-model.trim="name" type="text" /><br />
    <label>status :</label
    ><input v-model.trim="status" type="text" /><br />

    <input class="btn-submit" type="submit" />
    <span class="btn-close" @click="closeForm">close</span>
  </form>
</template>
<script>
// ------------ EventBus ------------
// 這個作業不適合用
// import {EventBus} from '../EventBus.js' 

export default {
  name: "Form",
  props: {
    editObj: Object,
  },
  data() {
    return {
      // -------------created / computed-----------
      id: "",
      name: "",
      status: "",

      //----- binding v-model and conditional data flow with data() only
      // formValue: {
      //   id: this.editObj? this.editObj.id : "",
      //   name: this.editObj? this.editObj.name : "",
      //   status: this.editObj? this.editObj.status : "",
      // },

      // ------ watch --------
      //   formValue: {
      //   id: this.editObj.id,
      //   name: this.editObj.name,
      //   status: this.editObj.status,
      // },
    };
  },
  // ------watch formValue (assigned editObj at the beginning) in data()
  // // 耗效能
  // watch: {
  //   formValue : function(){
  // // if editObj is empty then is not editing
  //     if(!editObj){
  //       this.formValue.id = "";
  //       this.formValue.name= "";
  //       this.formValue.status= "";
  //     }
  //   }
  // },
  methods: {
    onSumit(e) {
      e.preventDefault();

      // declare a new obj
      //--------------watch
      // const newlist = {
      //   id: this.formValue.id,
      //   name: this.formValue.name,
      //   status: this.formValue.status,
      // };

      const newlist = {
        id: this.id,
        name: this.name,
        status: this.status,
      };

      // ---------- If editObj is empty then is not edit
      // if(!this.editObj.id){
      //   this.$emit("add-list", newlist);
      // }
      // -----------else with editObj
      // else{
      //    this.$emit("update-list", newlist);
      // }

      // ---------- If editObj dont have type edit is add function
      if (!(this.editObj.type === "edit")) {

        this.$emit("add-list", newlist);

        // --------- EventBus (不適合用) -------------
        // EventBus.$emit("add-list", newlist);
      }
      // -----------else with it is update
      else {

        this.$emit("update-list", newlist);

        // --------- EventBus （不適合用） -------------
        // EventBus.$emit("update-list", newlist);
      }

      // close form
      this.closeForm();
    },
    // close form with empty editObj
    closeForm() {
      this.$emit("close-form");
      this.$emit("empty-obj");
      this.$emit("empty-index");
    },
    //---------------with computed but go wrong, become not define,becourse computed go faster-----------------
    // checkedEditObj(){
    //   if (this.editObj.type == "edit") {

    //   this.id = this.editObj.id;
    //   this.name = this.editObj.name;
    //   this.status = this.editObj.status;

    //   return this.editObj 
    //   }
    // }
  },
  // ------------------created------------------
  created : function(){
    if(this.editObj.type == "edit")
    {
      this.id = this.editObj.id;
      this.name = this.editObj.name;
      this.status = this.editObj.status;
    }
  },

  // -------------------computed fail doesnt work..not yet solve------------------
  // computed: {
  //   formValueId: {
  //     get(){
  //       // dosent work, not define(with method)
  //       // var obj = checkedEditObj();
  //       // return obj.id
  //       this.id = this.editObj.id;
  //       return this.id
  //     },
  //     set(val){
  //       this.id = val;
  //     }
  //   },
  //   formValueName: {
  //     get(){
  //       // var obj = checkedEditObj();
  //       // return obj.name
  //       this.name = this.editObj.name;
  //       return this.name
  //     },
  //     set(val){
  //       this.name = val;
  //     }
  //   },
  //   formValueStatus: {
  //     get(){
  //       // var obj = checkedEditObj();
  //       // return obj.status

  //       this.status = this.editObj.status;
  //       return this.status
  //     },
  //     set(val) {
  //       this.status = val;
  //     }
  //   },
  // },
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 55px;
  text-align: left;
  padding: 10px;
}

form {
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  width: 90vw;
}

input {
  width: 250px;
}

.btn-submit,
.btn-close {
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(43, 50, 254);
  color: rgb(43, 50, 254);
  margin-top: 20px;
  width: 300px;
  margin-right: 20px;
}
</style>