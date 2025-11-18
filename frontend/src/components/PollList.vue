<template>
  <div>
    <div v-for="p in polls" :key="p.id">
      <poll-item :poll="p" @refresh="load()" />
    </div>
  </div>
</template>
<script>
import { ref, onMounted, inject } from 'vue';
import PollItem from './PollItem.vue';
export default { components:{PollItem}, setup(){ const socket=inject('socket'); const polls=ref([]);
  const load=async()=>{ const r=await fetch('http://localhost:3000/polls'); polls.value=await r.json(); };
  onMounted(()=>{ load(); socket.on('poll-updated', ()=>load()); });
  return { polls, load } }
}
</script>