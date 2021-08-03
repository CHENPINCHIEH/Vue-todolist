<template v-if="seen">
  <div class="container">
    <table>
      <tr>
        <th>＃</th>
        <th>Task Name</th>
        <th>Status</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>

      <!-- <tr v-for="list in lists" :key="list">-->
      <!-- index -->
      <tr v-for="(list,index) in lists" :key="index">
        
  <!-- <td>{{list.id}}</td>
  <td>{{list.name}}</td>
  <td>{{list.status}}</td>
  <td><button>編輯</button></td>
  <td><button>刪除</button></td> -->
   <!-- binding index 到 Row -->
        <row @delete-event="$emit('delete-event', index)" @edit-event="$emit('edit-event',index)" :list="list" :index="index" />
        <!-- id will be wrong -->
        <!-- <Row @delete-event="$emit('delete-event', list.id)" @edit-event="$emit('edit-event',list.id)" :list="list" :index="index" /> -->
      </tr>
    </table>
  </div>
</template>

<script>
import row from "./Row.vue";

export default {
  name: "Table",
  props: {
    lists: Array,
  },
  components: {
    row,
  },
  // 自訂事件綁定，小心陣列逗點
  emits: ["delete-event","edit-event"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  /* margin:0 auto; */
  border-collapse: collapse;
  text-align: center;
  /* width: 100%; */
}

th {
  width: 10vw;
}
th:nth-child(2) {
  width: 20vw;
}
th {
  border-bottom: 2px solid black;
  padding: 10px;
}
</style>
