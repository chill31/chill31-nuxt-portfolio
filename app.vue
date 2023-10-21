<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    "title": "Discussions App",
    "description": "discussions app which has authentication and easy to use interface.",
    "techUsed": [
      {
        "tech": "Next.js",
        "iconName": "nextjs-icon"
      },
      {
        "tech": "Tailwindcss",
        "iconName": "tailwindcss-icon"
      }
    ],
    "github": "discussions-app",
    "liveDemo": "chill31-discussions"
  },
  {
    "title": "Quiz App",
    "description": "advanced quiz app which supports creating and taking quizzes with authentication and saving quiz results.",
    "techUsed": [
      {
        "tech": "Next.js",
        "iconName": "nextjs-icon"
      },
      {
        "tech": "Tailwindcss",
        "iconName": "tailwindcss-icon"
      }
    ],
    "github": "quiz-app",
    "liveDemo": "chill31-quiz"
  }
])
</script>

<template>
  <Container class="!gap-0 !pt-0">

    <main
      class="min-h-screen h-fit w-screen flex items-start justify-start gap-0 flex-wrap max-md:flex-col-reverse max-md:items-center max-md:justify-center ">

      <div
        class="flex flex-col gap-2 items-start max-md:items-center justify-center w-[50%] max-md:w-screen min-h-screen max-md:min-h-fit max-md:py-4 h-fit">
        <h1 class="text-[6.5rem] max-md:text-[5rem] text-center font-serif ml-[10%] max-md:ml-0">Chill<span
            class="text-[7rem] max-md:text-[5.5rem] font-serif text-accent">31</span></h1>
        <p class="ml-[10%] max-md:ml-0 text-[1.5rem] max-md:text-main max-md:text-center">mostly front end developer but
          trying to advance in back end.</p>
      </div>

      <div class="flex items-center justify-center w-[50%] max-md:w-full min-h-screen max-md:min-h-fit">
        <img src="/logo.png" class="h-full w-full mr-[10%] max-md:mr-0 max-md:h-[75%] max-md:w-[75%]" />
      </div>

    </main>

    <hr class="w-[calc(100vw-2rem)] h-[1px] my-8 bg-gray-400">

    <section class="min-h-screen w-screen flex mt-4 flex-col items-center justify-start gap-8">

      <h1 class="text-h1 font-serif">Skills</h1>
      <p>Not much, but still</p>

      <div class="flex flex-wrap items-center justify-center gap-4 w-full">

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Base Web</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <Icon name="vscode-icons:file-type-html" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-css" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-js" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-typescript" class="w-8 h-8" />
          </div>
        </div>

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Web Frameworks</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <Icon name="vscode-icons:file-type-next" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-reactjs" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-vue" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-nuxt" class="w-8 h-8" />
          </div>
        </div>

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Backend</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <Icon name="vscode-icons:file-type-next" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-nuxt" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-prisma" class="w-8 h-8" />
            <Icon name="simple-icons:cockroachlabs" class="w-8 h-8" />
            <Icon name="simple-icons:auth0" class="w-8 h-8" />
            <img src="/clerk.png" class="w-8 h-8">
          </div>
        </div>

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Python</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <Icon name="vscode-icons:file-type-python" class="w-8 h-8" />
            <Icon name="logos:matplotlib-icon" class="w-8 h-8" />
            <Icon name="logos:numpy" class="w-8 h-8" />
            <Icon name="vscode-icons:file-type-django" class="w-8 h-8" />
          </div>
        </div>

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Misc</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <Icon name="logos:visual-studio-code" class="w-8 h-8"></Icon>
            <Icon name="logos:pycharm" class="w-8 h-8"></Icon>
            <Icon name="logos:git-icon" class="w-8 h-8"></Icon>
            <Icon name="logos:mysql" class="w-8 h-8"></Icon>
            <Icon name="devicon:postgresql" class="w-8 h-8"></Icon>
          </div>
        </div>

      </div>

      <h3 class="mt-16 text-h3 font-serif">Wanting to learn:</h3>

      <div class="flex items-start justify-start w-fit max-w-[95vw] bg-white/10 rounded-lg gap-2 p-3">
        <Icon name="logos:solidjs-icon" class="w-8 h-8"></Icon>
        <Icon name="vscode-icons:file-type-flutter" class="w-8 h-8" />
        <Icon name="vscode-icons:file-type-swift" class="w-8 h-8" />
        <Icon name="logos:solidjs-icon" class="w-8 h-8"></Icon>
      </div>

    </section>

    <hr class="w-[calc(100vw-2rem)] h-[1px] my-8 bg-gray-400">

    <section class="min-h-screen w-screen flex mt-4 flex-col items-center justify-start gap-8">
      <h1 class="text-h1 font-serif">Projects</h1>

      <span class="text-red-500">unfinished</span>
      
    </section>

  </Container>
</template>