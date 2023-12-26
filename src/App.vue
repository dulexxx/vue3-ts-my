

<template>
  <div>
   <div class="todo_List_title">
      todoList
   </div>
   <div class="todo_list_content">
    <div class="todo_list_add">
        <input type="text" @keyup.enter="add" v-model="addValue">
    </div>
    <div class="todo_list_show">
      <ul>
        <li v-for="(item, i) in list ? list : []" :key="i">
          <span>
            名称： {{ item.name }}
          </span>
          <span>
            状态 {{ item.type ? '完成' : '待办' }}
          </span>
          <button @click="itemDone(item)">状态更改</button>
        </li>
      </ul>
    </div>
    <div class="todo_list_fliter">

    </div>

   </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
  const addValue = ref('');
  const list = ref([])
  const init = () => {
    const data = localStorage.getItem('todoList')
    list.value = JSON.parse(data) ? JSON.parse(data) : []
  }
  init()
  const add = () => {
    list.value.unshift({
      name: addValue.value,
      type: false
    })
    localStorage.setItem('todoList', JSON.stringify(list.value))
  }
  const itemDone = (item) => {
    item.type = !item.type
  }
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
