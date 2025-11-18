<template>
  <div id="app">
    <h1>Real-time Polls</h1>
    <poll-editor />
    <poll-list />
  </div>
</template>
<script>
import PollList from './components/PollList.vue';
import PollEditor from './components/PollEditor.vue';
export default { components:{ PollList, PollEditor } }
</script>