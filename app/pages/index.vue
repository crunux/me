<script setup lang="ts">
import type { Hero, LinkSocial, Project } from '~/types';


interface Projects {
  projects: Project[];
}
useSeoMeta({ title: "Home" });
useScrollAnimation();
const { locale } = useI18n()



const home = ref<Hero | null>(null);
const about = ref('')
const id = ref("cm2iy2j2o052v07k2he41hrie")


const getHero = gql`
  query getHero($locale: [Locale!]!, $id: ID!){
    hero(locales: $locale, where: { id: $id }) {
      about
      createdAt
      name
      occupation
      avatar {
        url(transformation: { image: { resize: { fit: clip, height: 400, width: 400 } } })
      }
      id
      cv {
        url
      }
    }
  }
`;


const { data, error, refresh } = await useAsyncQuery<{ hero: Hero }>(getHero, {
  locale: [locale.value],
  id
});

const projectsQuery = gql`
  query getProjects {
    projects {
      github
      id
      image {
        url(
          transformation: {
            image: { resize: { height: 400, width: 500, fit: clip } }
          }
        )
      }
      title
      preview
      description
      techs {
        url(
          transformation: {
            image: { resize: { height: 200, width: 200, fit: clip } }
          }
        )
      }
    }
  }
`;

const { data: projectsData } = await useAsyncQuery<Projects>(projectsQuery);

// Fetch blog posts for preview
const postsQuery = gql`
  query getPosts {
    posts {
      createdAt
      id
      slug
      tittle
      image {
        url(
          transformation: {
            document: { output: { format: svg } }
            image: { resize: { width: 350, height: 300, fit: crop } }
          }
        )
      }
    }
  }
`;

const { data: postsData } = await useAsyncQuery<{ posts: any[] }>(postsQuery);

watchEffect(() => {
  if (data.value) {
    home.value = data.value.hero;
    about.value = data.value.hero.about;
  }
});

watch([data, locale], async () => {
  await refresh();
});
</script>
<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    <!-- <section v-if="home"
      class="min-h-[calc(100vh-60px)] w-full flex flex-col justify-start items-center relative overflow-hidden gap-2 mt-14">
      <div
        class="flex border border-gray-400 text-[#40CEF7]  items-center table:text-md movil:text-xs movil:text-center table:text-left rounded-md px-2 py-1 mb-4 mx-auto gap-2">
        <div class="rounded-full size-2 bg-green-500" />
        AVAILABLE FOR WORK
      </div>
      <div class="flex flex-col items-center m-0 table:mt-6">
        <h1
          class="hero-text-reveal gradient-text laptop:text-9xl table:text-7xl movil:text-6xl font-ubuntu font-bold leading-tight movil:text-center table:text-left">
          {{ home?.name }}
        </h1>
        <h2
          class="hero-text-reveal text-color font-ubuntu table:text-xl movil:text-lg movil:text-center table:text-left">
          < <span>{{ displayedText }}</span>
            <span v-if="isTyping" class="animate-pulse">|</span> />
        </h2>
        <div class="table:w-3/6 flex justify-center flex-wrap gap-2 mt-2 fade-in">
          <p v-for="item in tech" :key="item"
            class="border border-gray-400 text-sm text-[#40CEF7] rounded-md px-2 table:px-3 py-1">
            {{ item }}
          </p>
        </div>
        <div class="flex gap-2 fade-in m-2">
          <NuxtLink v-for="link in socialLinks" :key="link.name" :to="link.link"
            class="text-[#40CEF7] rounded-md px-2 table:px-3 py-1">
            <Icon :name="link.icon" class="size-10" />
          </NuxtLink>
        </div>
        <div class="hero-text-reveal mt-6 table:mt-8 flex gap-4 movil:flex-col table:flex-row movil:items-center">
          <NuxtLink to="/projects"
            class="px-2 py-1 table:px-6 table:py-2 bg-[#40CEF7] text-white font-ubuntu rounded-md transition-all duration-300 hover:bg-[#1a9fd4] hover:shadow-lg">
            {{ $t("home.greet").includes("Hola") ? "Ver Proyectos" : "View Projects" }}
          </NuxtLink>
          <NuxtLink to="/contact"
            class="px-2 py-1 table:px-6 table:py-2 border-2 border-[#40CEF7] text-[#40CEF7] font-ubuntu rounded-md transition-all duration-300 hover:bg-[#40CEF7] hover:text-white">
            {{ $t("home.greet").includes("Hola") ? "Contacto" : "Contact Me" }}
          </NuxtLink>
        </div>
        <NuxtLink class="w-[100px] px-4 py-2 table:px-10 bg-[#40CEF7] text-white text-sm tex-tcenter font-ubuntu rounded-xl transition-all duration-300 hover:bg-[#1a9fd4] hover:shadow-lg my-2">
          Resume
        </NuxtLink>
      </div> -->

    <!-- <div class="table:w-[40%] movil:w-[60%] flex justify-center items-center">
          <div class="float-animation">
            <img v-if="home?.avatar?.url"
              class="laptop:w-[350px] laptop:h-[350px] table:w-[280px] table:h-[280px] movil:w-[200px] movil:h-[200px] rounded-2xl object-cover shadow-xl"
              :src="home.avatar.url" loading="lazy" alt="Joan Cruz" />
          </div>
        </div> -->
    <!-- </div> -->

    <!-- Scroll indicator -->
    <!-- <div class="absolute bottom-16 flex flex-col items-center gap-2 text-color opacity-60">
      <span class="text-sm font-nunito">Scroll</span>
      <div class="w-[2px] h-8 bg-[#40CEF7] rounded animate-bounce"></div>
    </div>
    </section>
    <section v-else class="w-full min-h-[calc(100vh-60px)] my-20">
      <div class="w-[90%] max-w-3xl mx-auto text-center">
        <h2 class="text-color font-ubuntu font-bold laptop:text-4xl movil:text-2xl mb-4">
          {{ $t("home.greet").includes("Hola") ? "Cargando..." : "Loading..." }}
        </h2>
        <p class="text-color font-nunito laptop:text-lg movil:text-base">
          {{ $t("home.greet").includes("Hola")
            ? "Estamos cargando la información. Por favor, espera un momento."
            : "We're loading the information. Please wait a moment."
          }}
        </p>
      </div>
    </section> -->

    <AboutSection />

    <!-- Projects Preview Section -->
    <section class="mx-auto max-w-5xl px-6 py-24 fade-in">
      <div class="grid gap-12">
        <div>
          <h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
            Projects
          </h2>
          <p class="mt-4 leading-relaxed text-muted-foreground">
            Backend developer with a focus on building high-performance APIs, microservices, and scalable
            systems. I work across the stack but my heart lives in the server side.
          </p>
          <p class="mt-4 leading-relaxed text-muted-foreground">
            Currently exploring distributed systems and container orchestration. Always learning, always
            shipping.
          </p>
        </div>
        <div>
          <div class="grid laptop:grid-cols-3 table:grid-cols-2 movil:grid-cols-1 gap-6 stagger-children">
            <ProjectGrid />
          </div>
          <div class="text-center mt-10">
            <NuxtLink to="/projects"
              class="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              {{ $t("home.greet").includes("Hola") ? "Ver todos los proyectos" : "View All Projects" }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="mx-auto max-w-5xl px-6 py-24">
      <div class="grid gap-12 fade-in">
        <div>
          <h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
            {{ $t("home.greet").includes("Hola") ? "Trabajemos juntos" : "Let's Work Together" }}
          </h2>
          <p class="mt-4 leading-relaxed text-muted-foreground">
            {{ $t("home.greet").includes("Hola")
              ? "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes."
              : "I'm always open to new opportunities and interesting projects."
            }}
          </p>
        </div>
        <div class=" mt-10 fade-in">
          <NuxtLink to="#contact"
            class="rounded-md border border-border bg-secondary px-5 py-2 text-md font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary">
            {{ $t("home.greet").includes("Hola") ? "Contactame" : "Get In Touch" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Blog Preview Section -->
    <section class="mx-auto max-w-5xl px-6 py-24">
      <div class="grid gap-12">
        <div class="fade-in">
          <h2 class="text-sm font-semibold tracking-widest text-primary">BLOG</h2>
          <p class="mt-4 leading-relaxed text-muted-foreground">Latest post</p>
        </div>
        <div>
          <CardBlog :post="postsData?.posts?.[0]" :key="postsData?.posts?.[0]?.id" />
        </div>
        <div class="text-center mt-10 fade-in">
          <NuxtLink to="/blog"
            class="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            {{ $t("home.greet").includes("Hola") ? "Ver todos los posts" : "View All Posts" }}
          </NuxtLink>
        </div>
      </div>
    </section>


    <section class="mx-auto max-w-5xl px-6 py-24" id="contact">
      <!-- Page Header -->
      <div class="fade-in">
        <h2 class="text-sm font-semibold tracking-widest text-primary">
          CONTACT
        </h2>
        <p class="mt-4 leading-relaxed text-muted-foreground">Get in touch</p>
      </div>
      <!-- Contact Form -->
      <FormContact />
    </section>
  </div>
</template>
