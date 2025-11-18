<template>
  <div>
    <div v-for="c in comments" :key="c">- {{c}}</div>
    <input v-model="text" placeholder="Add comment" />
    <button @click="post">Comment</button>
  </div>
</template>
<script>
import { ref, inject } from 'vue';
export default { props:['comments','pollId'], setup(props){ const text=ref(''), socket=inject('socket');
  const post=()=>{ if(!text.value) return; socket.emit('comment',{pollId:props.pollId, comment:text.value}); text.value=''; }
  return { text, post }
} }
</script>