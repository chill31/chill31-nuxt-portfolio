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
            <HomeSkillIcon name="vscode-icons:file-type-html" tip="HTML" />
            <HomeSkillIcon name="vscode-icons:file-type-css" tip="CSS" />
            <HomeSkillIcon name="logos:javascript" tip="Javascript" />
            <HomeSkillIcon name="vscode-icons:file-type-typescript-official" tip="Typescript" />
            <HomeSkillIcon name="logos:tailwindcss-icon" tip="TailwindCSS" />
          </div>
        </div>

        <div class="flex flex-col items-start justify-start min-w-[18rem] w-fit bg-white/10 rounded-lg gap-2 p-3">
          <h3 class="text-[1.3rem]">Web Frameworks</h3>
          <div class="flex items-start justify-start w-full bg-white/10 rounded-lg gap-2 p-3">
            <HomeSkillIcon name="vscode-icons:file-type-next" tip="Next.js" />
            <HomeSkillIcon name="vscode-icons:file-type-reactjs" tip="React" />
            <HomeSkillIcon name="vscode-icons:file-type-vue" tip="Vue" />
            <HomeSkillIcon name="vscode-icons:file-type-nuxt" tip="Nuxt.js" />
          </div>
        </div>

        <HomeIconContainer title="Backend">
          <HomeSkillIcon name="vscode-icons:file-type-next" tip="Next.js" />
          <HomeSkillIcon name="vscode-icons:file-type-nuxt" tip="Nuxt.js" />
          <HomeSkillIcon name="vscode-icons:file-type-prisma" tip="Prisma ORM" />
          <HomeSkillIcon name="simple-icons:cockroachlabs" tip="CockroachDB" />
          <HomeSkillIcon name="simple-icons:auth0" tip="Auth0" />
          <HomeSkillImage tip="Clerk" src="/clerk.png" />
        </HomeIconContainer>

        <HomeIconContainer title="Python">
          <HomeSkillIcon name="vscode-icons:file-type-python" tip="Python" />
          <HomeSkillIcon name="logos:matplotlib-icon" title="Matplotlib" />
          <HomeSkillIcon name="logos:numpy" tip="Numpy" />
          <HomeSkillIcon name="vscode-icons:file-type-django" tip="DJango" />
        </HomeIconContainer>

        <HomeIconContainer title="Misc">
          <HomeSkillIcon name="logos:visual-studio-code" tip="Visual Studio Code" />
          <HomeSkillIcon name="logos:pycharm" tip="PYCharm editor" />
          <HomeSkillIcon name="logos:git-icon" tip="Git" />
          <HomeSkillIcon name="logos:mysql" tip="MySQL" />
          <HomeSkillIcon name="devicon:postgresql" tip="Postgresql" />
        </HomeIconContainer>

      </div>

      <h3 class="mt-16 text-h3 font-serif">Wanting to learn:</h3>

      <div class="flex items-start justify-start w-fit max-w-[95vw] bg-white/10 rounded-lg gap-2 p-3">
        <HomeSkillIcon name="logos:solidjs-icon" tip="SolidJS" />
        <HomeSkillIcon name="vscode-icons:file-type-flutter" tip="Flutter" />
        <HomeSkillIcon name="vscode-icons:file-type-swift" tip="Swift" />
        <HomeSkillIcon name="tabler:brand-react-native" tip="React Native" />
      </div>

    </section>

    <hr class="w-[calc(100vw-2rem)] h-[1px] my-8 bg-gray-400">

    <section class="min-h-screen w-screen flex mt-4 flex-col items-center justify-start gap-8">
      <h1 class="text-h1 font-serif">Projects</h1>
      <p class="text-center w-[60rem] max-w-[calc(100vw-2rem)] mb-12 mt-[-2rem]">All of my projects are not listed here as it is a pain to update them everytime I create something, so just go to <a href="https://chill31-projects.vercel.app">My Projects Website</a> as it auto updates according to my github repositories.</p>

      <div class="flex flex-wrap gap-8 items-center justify-center w-full px-4">

        <HomeProjectCard title="Discussions App"
          description="Advanced discussions app which supports searching by filter, authentication, and many more. It supports discussion tags and comments with the help of database. If you are logged in, you can add comments to any discussion. For no reason, it also has a light mode."
          github="chill31/discussions-app" live-demo="chill31-discussions" image="/previews/discussions.png"
          :inverse="false" :tech-used="[
            {
              tech: 'Next.js',
              iconName: 'vscode-icons:file-type-next'
            },
            {
              tech: 'React',
              iconName: 'logos:react'
            },
            {
              tech: 'TailwindCSS',
              iconName: 'logos:tailwindcss-icon'
            },
            {
              tech: 'Typescript',
              iconName: 'vscode-icons:file-type-typescript-official'
            },
            {
              tech: 'NextUI',
              iconName: 'Next UI',
              image: true,
              src: '/nextui.png'
            },
            {
              tech: 'Prisma ORM',
              iconName: 'vscode-icons:file-type-prisma'
            },
            {
              tech: 'CockroachDB',
              iconName: 'simple-icons:cockroachlabs'
            },
            {
              tech: 'Clerk',
              iconName: 'Clerk Auth',
              image: true,
              src: '/clerk.png'
            },
          ]" />

        <HomeProjectCard title="Quiz App"
          description="Easy to use quiz app where you can take quizzes without the need of authentication. If you do log in, you will be able to create quizzes and save results after taking any quiz"
          github="chill31/quiz-app" live-demo="chill31-quiz" image="/previews/quiz.png" :inverse="false" :tech-used="[
            {
              tech: 'Next.js',
              iconName: 'vscode-icons:file-type-next'
            },
            {
              tech: 'React',
              iconName: 'logos:react'
            },
            {
              tech: 'TailwindCSS',
              iconName: 'logos:tailwindcss-icon'
            },
            {
              tech: 'Typescript',
              iconName: 'vscode-icons:file-type-typescript-official'
            },
            {
              tech: 'NextUI',
              iconName: 'Next UI',
              image: true,
              src: '/nextui.png'
            },
            {
              tech: 'Prisma ORM',
              iconName: 'vscode-icons:file-type-prisma'
            },
            {
              tech: 'CockroachDB',
              iconName: 'simple-icons:cockroachlabs'
            },
            {
              tech: 'Clerk',
              iconName: 'Clerk Auth',
              image: true,
              src: '/clerk.png'
            },
          ]" />

        <HomeProjectCard title="Blog App"
          description="Simple Blog app which has private and public blogs with authentication. Private blogs can only be viewed by logged-in users while public blogs can be viewed by anyone. Administrators can log in via a specific password and create and manage their blogs. Users can also customize the website's theme by going to the dashboard"
          github="chill31/blog-app" live-demo="chill31-blog" image="/previews/blog.png"
          :inverse="false" :tech-used="[
            {
              tech: 'Next.js',
              iconName: 'vscode-icons:file-type-next'
            },
            {
              tech: 'React',
              iconName: 'logos:react'
            },
            {
              tech: 'TailwindCSS',
              iconName: 'logos:tailwindcss-icon'
            },
            {
              tech: 'Typescript',
              iconName: 'vscode-icons:file-type-typescript-official'
            },
            {
              tech: 'NextUI',
              iconName: 'Next UI',
              image: true,
              src: '/nextui.png'
            },
            {
              tech: 'Prisma ORM',
              iconName: 'vscode-icons:file-type-prisma'
            },
            {
              tech: 'CockroachDB',
              iconName: 'simple-icons:cockroachlabs'
            },
            {
              tech: 'Clerk',
              iconName: 'Clerk Auth',
              image: true,
              src: '/clerk.png'
            },
          ]" />

      </div>

    </section>

</Container></template>