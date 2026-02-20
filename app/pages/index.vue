<script setup lang="ts">
import type { ProvideHero, Project, Hero } from "~~/app/types";
import { useScrollAnimation } from "~~/app/composables/useScrollAnimation";

useSeoMeta({ title: "Home" });
useScrollAnimation();

const home = ref<Hero | null>(null);
const about = ref('')
const { t, locale } = useI18n()
const id = ref("cm2iy2j2o052v07k2he41hrie")



// const { about, home } = inject<ProvideHero>("hero") ?? {};

// Fetch projects for preview
interface Projects {
  projects: Project[];
}

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



// // if (data.value) {
// //     console.log(data.value);

//     provide<ProvideHero>('hero', {
//       about: data.value?.hero.about,
//       home: data.value?.hero
//     })
//   }



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
    <section v-if="home"
      class="min-h-[calc(100vh-60px)] w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div
        class="w-[90%] max-w-6xl flex table:flex-row movil:flex-col justify-between items-center gap-8"
      >
        <div class="table:w-[55%] movil:w-full flex flex-col movil:items-center table:items-start">
          <h6 class="hero-text-reveal text-[#40CEF7] laptop:text-2xl movil:text-lg font-nunito font-semibold">
            {{ $t("home.greet") }}
          </h6>
          <h1
            class="hero-text-reveal gradient-text laptop:text-7xl table:text-5xl movil:text-4xl font-ubuntu font-bold leading-tight movil:text-center table:text-left"
          >
            {{ home?.name }}
          </h1>
          <h2
            class="hero-text-reveal text-color font-ubuntu table:text-3xl movil:text-xl mt-2 movil:text-center table:text-left"
          >
            {{ home?.occupation }}
          </h2>
          <div class="hero-text-reveal mt-8 flex gap-4 movil:flex-col table:flex-row movil:items-center">
            <NuxtLink
              to="/projects"
              class="px-8 py-3 bg-[#40CEF7] text-white font-ubuntu font-semibold rounded-xl transition-all duration-300 hover:bg-[#1a9fd4] hover:shadow-lg"
            >
              {{ $t("home.greet").includes("Hola") ? "Ver Proyectos" : "View Projects" }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-8 py-3 border-2 border-[#40CEF7] text-[#40CEF7] font-ubuntu font-semibold rounded-xl transition-all duration-300 hover:bg-[#40CEF7] hover:text-white"
            >
              {{ $t("home.greet").includes("Hola") ? "Contacto" : "Contact Me" }}
            </NuxtLink>
          </div>
        </div>
        <div class="table:w-[40%] movil:w-[60%] flex justify-center items-center">
          <div class="float-animation">
            <img
              v-if="home?.avatar?.url"
              class="laptop:w-[350px] laptop:h-[350px] table:w-[280px] table:h-[280px] movil:w-[200px] movil:h-[200px] rounded-2xl object-cover shadow-xl"
              :src="home.avatar.url"
              loading="lazy"
              alt="Joan Cruz"
            />
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 flex flex-col items-center gap-2 text-color opacity-60">
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
    </section>

    <!-- About Preview Section -->
    <section class="py-20 w-full flex justify-center">
      <div class="w-[90%] max-w-5xl fade-in">
        <div class="text-center mb-10">
          <h2 class="text-color font-ubuntu font-bold laptop:text-4xl movil:text-2xl">
            {{ $t("about.title") }}
          </h2>
          <div class="section-divider mt-4"></div>
        </div>
        <div class="flex table:flex-row movil:flex-col items-center gap-10">
          <!-- <div class="table:w-[40%] movil:w-full flex justify-center fade-in-left">
            <img
              v-if="home?.avatar?.url"
              class="w-[250px] h-[250px] rounded-2xl object-cover shadow-lg"
              :src="home.avatar.url"
              alt="Joan Cruz"
            />
          </div> -->
          <div class="w-full fade-in-right">
            <p class="text-color font-nunito laptop:text-lg movil:text-base leading-relaxed">
              {{ about }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="py-20 w-full section-bg-color">
      <div class="w-[90%] max-w-6xl mx-auto">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-color font-ubuntu font-bold laptop:text-4xl movil:text-2xl">
            {{ $t("home.greet").includes("Hola") ? "Proyectos" : "Projects" }}
          </h2>
          <div class="section-divider mt-4"></div>
        </div>
        <div
          class="grid laptop:grid-cols-3 table:grid-cols-2 movil:grid-cols-1 gap-6 stagger-children"
        >
          <div
            v-for="project in projectsData?.projects?.slice(0, 3)"
            :key="project.id"
            class="card-hover rounded-2xl overflow-hidden card-bg-color"
          >
            <div class="overflow-hidden">
              <img
                class="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110"
                :src="project.image.url"
                :alt="project.title"
              />
            </div>
            <div class="p-5">
              <h3 class="font-ubuntu font-semibold text-lg text-color mb-2">
                {{ project.title }}
              </h3>
              <!-- <div class="flex gap-2 mt-3 flex-wrap">
                <img
                  class="w-8 h-8 object-contain rounded"
                  v-for="(tech, index) in project.techs?.slice(0, 4)"
                  :key="index"
                  :src="tech.url"
                />
              </div> -->
              <div class="flex justify-between mt-4">
                <a
                  v-if="project.github"
                  :href="`https://github.com/crunux/${project.github}`"
                  target="_blank"
                  class="text-[#40CEF7] font-nunito font-semibold text-sm link-underline"
                >
                  Github
                </a>
                <a
                  v-if="project.preview"
                  :href="project.preview"
                  target="_blank"
                  class="text-[#40CEF7] font-nunito font-semibold text-sm link-underline"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-10 fade-in">
          <NuxtLink
            to="/projects"
            class="inline-block px-8 py-3 border-2 border-[#40CEF7] text-[#40CEF7] font-ubuntu font-semibold rounded-xl transition-all duration-300 hover:bg-[#40CEF7] hover:text-white"
          >
            {{ $t("home.greet").includes("Hola") ? "Ver todos los proyectos" : "View All Projects" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 w-full section-bg-color">
      <div class="w-[90%] max-w-3xl mx-auto text-center fade-in">
        <h2 class="text-color font-ubuntu font-bold laptop:text-4xl movil:text-2xl mb-4">
          {{ $t("home.greet").includes("Hola") ? "Trabajemos juntos" : "Let's Work Together" }}
        </h2>
        <div class="section-divider mt-4 mb-8"></div>
        <p class="text-color font-nunito laptop:text-lg movil:text-base mb-8 opacity-80">
          {{ $t("home.greet").includes("Hola")
            ? "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes."
            : "I'm always open to new opportunities and interesting projects."
          }}
        </p>
        <NuxtLink
          to="#contact"
          class="inline-block px-10 py-4 bg-[#40CEF7] text-white font-ubuntu font-bold text-lg rounded-xl transition-all duration-300 hover:bg-[#1a9fd4] hover:shadow-xl hover:scale-105"
        >
          {{ $t("home.greet").includes("Hola") ? "Contactame" : "Get In Touch" }}
        </NuxtLink>
      </div>
    </section>

    <!-- Blog Preview Section -->
    <section class="py-20 w-full">
      <div class="w-[90%] max-w-5xl mx-auto">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-color font-ubuntu font-bold laptop:text-4xl movil:text-2xl">Blog</h2>
          <div class="section-divider mt-4"></div>
        </div>
        <div class="flex flex-col gap-4 stagger-children">
          <NuxtLink
            v-for="post in postsData?.posts?.slice(0, 3)"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="card-hover flex table:flex-row movil:flex-col items-center gap-4 p-4 rounded-2xl card-bg-color transition-all duration-300"
          >
            <img
              class="table:w-[150px] table:h-[100px] movil:w-full movil:h-[150px] rounded-xl object-cover"
              :src="post.image.url"
              :alt="post.tittle"
            />
            <div class="flex-1">
              <h3 class="font-ubuntu font-semibold text-lg text-color">
                {{ post.tittle }}
              </h3>
              <span class="text-sm opacity-50 text-color font-nunito">
                {{ new Date(post.createdAt).toLocaleDateString() }}
              </span>
            </div>
            <div class="text-[#40CEF7] movil:hidden table:block">
              <div class="i-carbon-arrow-right text-2xl"></div>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center mt-10 fade-in">
          <NuxtLink
            to="/blog"
            class="inline-block px-8 py-3 border-2 border-[#40CEF7] text-[#40CEF7] font-ubuntu font-semibold rounded-xl transition-all duration-300 hover:bg-[#40CEF7] hover:text-white"
          >
            {{ $t("home.greet").includes("Hola") ? "Ver todos los posts" : "View All Posts" }}
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="py-20" id="contact">
    <!-- Page Header -->
      <div class="text-center mb-8 fade-in">
        <h1 class="text-color font-ubuntu font-bold laptop:text-5xl table:text-4xl movil:text-3xl">
          Contact
        </h1>
        <div class="section-divider mt-4"></div>
      </div>

      <!-- Contact Form -->
      <section class="max-w-3xl mx-auto rounded-2xl section-bg-color p-8 fade-in">
        <FormContact />
      </section>
    </section>
  </div>
</template>
