<template>
  <td>{{ list.id }}</td>
  <td>{{ list.name }}</td>
  <td>
    <button
      :class="[
        list.status == 'Todo'
          ? 'Todo'
          : list.status == 'In Progress'
          ? 'Progress'
          : list.status == 'Complete'
          ? 'Complete'
          : '',
        'status',
      ]"
    >
      {{ list.status }}
    </button>
  </td>

  <td><button @click="onEdit(index)">編輯</button></td>

  <!-- id is changeable so it wont work  -->
  <!-- <td><button @click="onEdit(list.id)">編輯</button></td> -->

  <!-- 呼叫一個function(自行命名) -->
  <!-- or 直接用emit(要刪除method -->
  <td><button @click="onDelete(index)">刪除</button></td>
  <!-- <td><button @click="$emit('delete-event',list.id)">刪除</button></td> -->

  
</template>
<script>
export default {
  name: "Row",
  props: {
    list: Object,
    index : String,
  },data(){
    return{ editObj:{}, objIndex : String }
  },
  methods: {

    onDelete(index) {
    // 創造自訂事件
    // this 指向 component instance
    // this.$emit('delete-event',index)
    var answer = confirm("確定刪除？");
      if (answer) {

      //vuex
      this.$store.dispatch("deleteList",index);
    }}
  ,
    onEdit(index){


    // -------- vuex ---------
    this.$store.dispatch("editList",index);

    this.$emit('open-form');
    }

    //----------- id will be wrong
    // onDelete(id) {
    // // console.log(id);
    // // 創造自訂事件
    // // this 指向 component instance
    // this.$emit('delete-event',id)
    // },
    // onEdit(id){
    // this.$emit('edit-event',id)
    // }
    // ----------------------------
  },
    

};
</script>

<style scoped>
td {
  border-bottom: 2px solid rgb(247, 244, 244);
  padding: 10px;
}

.status {
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
}

</style>