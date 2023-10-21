<!-- return a vue component with children prop which is the content put inside the Container tag when used in a file -->
<template>
  <div class="w-screen min-h-screen h-fit bg-bg text-white flex flex-col items-center justify-start gap-12 py-8">
    <slot></slot>
  </div>
</template>