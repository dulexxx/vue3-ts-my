

<template>
  <abc></abc>
 <h1>888</h1>
 <el-button>78787</el-button>
  <RouterView></RouterView>
</template>

<script setup lang="tsx">
import {useStore} from './store/index'
import { onMounted } from 'vue';
import {gitUesInfo} from '@/api/common'
const store = useStore()
  console.log(store)
  const abc = <h1> { store.state.count }</h1>
  onMounted(() =>{
    gitUesInfo().then(res=>{
      console.log(res.data.data)
    })
  })
</script>
<style scoped lang="less">
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
h1 {
  color: @red;
}
</style>
