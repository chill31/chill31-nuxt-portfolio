<script setup>
const props = defineProps(['tip', 'name']);

</script>

<template>
    <div :name=props.name :data-tip="props.tip" class="skill-icon">
        <Icon :name="props.name" class="w-8 h-8" :data-tip="'\'' + props.tip + '\''" />
    </div>
</template>