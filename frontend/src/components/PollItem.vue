<template>
  <div>
    <h3>{{poll.title}} <small>({{poll.likes}}♥)</small></h3>
    <div v-for="(v,k) in poll.options" :key="k">
      <button @click="vote(k)">Vote</button> {{k}} - {{v}}
    </div>
    <poll-chart :data="poll.options" />
    <comments :comments="poll.comments" :pollId="poll.id" />
  </div>
</template>
<script>
import { inject } from 'vue';
import PollChart from './PollChart.vue';
import Comments from './Comments.vue';
export default { components:{PollChart,Comments}, props:['poll'], setup(props){ const socket=inject('socket');
  const vote=(opt)=> socket.emit('vote',{pollId:props.poll.id, option:opt});
  return { vote } }
}
</script>