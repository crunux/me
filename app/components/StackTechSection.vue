<script setup>
  const { t } = useI18n();
  const stack = {
    frontend: {
      title: 'Desarrollo de Interfaz & Experiencia',
      description: 'Creación de interfaces reactivas, modernas y optimizadas para cualquier dispositivo.',
      items: [
        { name: 'Vue', icon: 'devicon-plain:vuejs' },
        { name: 'NuxtJs', icon: 'lineicons:nuxt' },
        { name: 'React', icon: 'hugeicons:react' },
        { name: 'React Native', icon: 'tabler:brand-react-native' },
        { name: 'Next.Js', icon: 'devicon-plain:nextjs' },
        { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
        { name: 'TypeScript', icon: 'devicon-plain:typescript' }
      ]
    },
    backend: {
      title: 'Arquitectura & Datos',
      description: 'Construcción de APIs de alto rendimiento y gestión eficiente de bases de datos relacionales y NoSQL.',
      items: [
        { name: 'Node.js', icon: 'devicon-plain:nodejs' },
        { name: 'Express', icon: 'lineicons:expressjs' },
        { name: 'NestJS', icon: 'devicon-plain:nestjs' },
        { name: 'Python', icon: 'devicon-plain:python' },
        { name: 'FastAPI', icon: 'devicon-plain:fastapi' },
        { name: 'PL/SQL', icon: 'lineicons:database' },
        { name: 'PostgreSQL', icon: 'devicon-plain:postgresql' },
        { name: 'MongoDB', icon: 'devicon-plain:mongodb' },
        { name: 'Redis', icon: 'devicon-plain:redis' }
      ]
    },
    tools: {
      title: 'Infraestructura & Productividad',
      description: 'Herramientas que garantizan un flujo de trabajo ágil, contenedores escalables y diseño colaborativo.',
      items: [
        { name: 'Git', icon: 'devicon-plain:git' },
        { name: 'Docker', icon: 'devicon-plain:docker' },
        { name: 'Linux', icon: 'devicon-plain:linux' },
        { name: 'Vscode', icon: 'devicon-plain:vscode' },
        { name: 'Vite', icon: 'lineicons:vite' },
        { name: 'Figma', icon: 'lineicons:figma' },
        { name: 'Terminal', icon: 'lucide:terminal' }
      ]
    }
  };
</script>
<template>
  <section class="mx-auto max-w-5xl px-6 py-24 fade-in">
    <div class="grid gap-12 fade-in">
      <div>
        <h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
          {{ t('stack.title') }}
        </h2>
        <p class="mt-4 leading-relaxed text-muted-foreground">
          {{ t('stack.description') }}
        </p>
      </div>
      <div>
        <div class="grid max-w-5xl md:grid-cols-3 gap-20">
          <div v-for="(category, key) in stack" :key="key" class="gap-2">
            <h2 class="text-sm font-semibold tracking-widest text-primary">
              {{ key }}
            </h2>
            <div v-for="tech in category.items" :key="tech.name"
              class="max-w-md flex justify-between items-center gap-2 text-foreground p-2 m-1 hover:border-b hover:border-primary">
              <h3>{{ tech.name }}</h3>
              <Icon :name="tech.icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>