<template>
  <div class="container box">
    <!-- <button @click="toggleForm">Add Task</button> -->
    <!-- <button >Add Task</button> -->

    <!----------- vuex ------------>
    <button @click="emptyEditObj">Add Task</button>


  </div>
</template>
<script>
export default {
  name: "AddListBtn",
  methods:{
    // toggleForm(){
    //     this.$emit('toggleForm');
    // },
    emptyEditObj(){
      this.$store.dispatch("emptyEditObj");
    }
    
  }
};
</script>
<style scoped>
button {
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(43, 197, 254);
  color: rgb(43, 197, 254);
}

.box {
  display: flex;
  justify-content: flex-end;
}
</style>
