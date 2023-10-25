<script setup>
const props = defineProps(['title', 'description', 'image', 'techUsed', 'github', 'liveDemo', 'inverse']);

function redirect(link) {
  if (link.endsWith('?ending=__open-false__')) {
    window.location.href = link.replace('?ending=__open-false__', '');
  } else {
    window.open(link, '_blank');
  }
}

</script>

<template>
  <div
    class="group flex flex-col gap-8 items-center justify-center bg-zinc-900 rounded-xl w-[30rem] max-w-[calc(100vw-1rem)]">

    <div class="h-[19rem] w-full rounded-t-lg overflow-hidden">
      <img v-on:click="redirect(`https://${props.liveDemo}.vercel.app?ending=__open-false__`)" :src="props.image"
        class="h-full w-full group-hover:scale-[110%] transition-[transform] cursor-pointer">
    </div>
    <div class="flex flex-col items-center justify-center gap-2 bg-zinc-900 rounded-xl pb-4 px-2 w-full">
      <h2 class="text-xl">{{ props.title }}</h2>
      <p class="text-slate-200 text-center text-[.9rem] mx-2 h-[15ch] overflow-y-auto">{{ props.description }}</p>
      <hr class="w-[90%] h-[1px] bg-gray-300/10 my-6" />
      <div class="flex w-[90%] flex-wrap items-center justify-center gap-2">
        <div v-for="tech in props.techUsed">
          <!-- if there is an icon -->
          <HomeSkillIcon class="project-icon" v-if="!tech.image" :tip="tech.tech" :name="tech.iconName"></HomeSkillIcon>

          <!-- if there is an image -->
          <HomeSkillImage v-if="tech.image" class="project-icon" :src="tech.src" :tip="tech.tech" />
        </div>
      </div>
      <hr class="w-[90%] h-[1px] bg-gray-300/10 my-6" />
      <div class="w-full flex items-center justify-center gap-2">

        <button v-on:click="redirect(`https://github.com/${props.github}`)" class="bg-white/10 p-[2px] rounded-md outline-2 outline-transparent outline focus:outline-white">
          <HomeSkillIcon name="mdi:github" tip="" />
        </button>

        <button v-on:click="redirect(`https://${props.liveDemo}.vercel.app`)" class="bg-white/10 p-[2px] rounded-md outline-2 outline-transparent outline focus:outline-white">
          <HomeSkillIcon name="material-symbols:link" tip="" />
        </button>

      </div>
    </div>

  </div>
</template>