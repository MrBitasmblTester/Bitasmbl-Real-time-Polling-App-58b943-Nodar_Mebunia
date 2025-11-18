<template>
  <form @submit.prevent="create">
    <input v-model="title" placeholder="Poll title" />
    <input v-model="opt" placeholder="Option" />
    <button @click.prevent="addOption">Add option</button>
    <div v-for="o in options">{{o}}</div>
    <button type="submit">Create</button>
  </form>
</template>
<script>
import { ref } from 'vue';
import { createPoll } from '../services/api';
export default { setup(){ const title=ref(''), opt=ref(''), options=ref([]);
  const addOption=()=>{ if(opt.value){ options.value.push(opt.value); opt.value=''; } }
  const create=async()=>{ if(!title.value) return; await createPoll({title: title.value, options: Object.fromEntries(options.value.map(o=>[o,0]))}); title.value=''; options.value=[]; }
  return { title,opt,options,addOption,create }
} }
</script>