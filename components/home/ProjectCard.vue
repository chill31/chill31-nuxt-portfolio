<script setup>
const props = defineProps(['title', 'description', 'techUsed', 'github', 'liveDemo', 'inverse']);
</script>

<template>
  <div>{{ props.title }}</div>
</template>