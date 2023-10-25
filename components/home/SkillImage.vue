<script setup>
const props = defineProps(['tip', 'src'])
</script>

<template>
<div class="skill-image" :data-tip="props.tip">
  <img :src="props.src" class="w-8 h-8">
</div>
</template>