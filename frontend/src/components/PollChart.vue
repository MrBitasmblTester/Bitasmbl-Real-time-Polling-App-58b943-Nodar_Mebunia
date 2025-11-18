<template>
  <svg :width="200" :height="(Object.keys(data).length*24+10)">
    <g v-for="(v,k,i) in data" :key="k">
      <rect :x="0" :y="i*24" :width="Math.max(1,v*10)" height="18" fill="#4f46e5" />
      <text :x="Math.max(4,v*10)+6" :y="i*24+14">{{k}} ({{v}})</text>
    </g>
  </svg>
</template>
<script>
export default { props:['data'] }
</script>