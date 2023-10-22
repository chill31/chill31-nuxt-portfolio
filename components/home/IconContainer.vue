<script setup>
const props = defineProps(['title']);
</script>

<template>
  <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
    <h3 class="text-[1.3rem]">{{ props.title }}</h3>
    <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
      <slot></slot>
    </div>
  </div>
</template>