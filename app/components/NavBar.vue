<script setup lang="ts">
const route = useRoute();

const isScrolled = ref(false);
const { y } = useWindowScroll();
const mobileOpen = ref(false);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
]

watch(y, (newValue: number) => {
  isScrolled.value = newValue >= 20;
});


</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md overflow-x-hidden">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="flex items-center gap-0 text-lg font-bold tracking-tight">
        <span class="text-foreground">Cru</span>
        <span class="text-primary">nux</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <NuxtLink :to="link.href"
            :class="`text-sm font-medium transition-colors hover:text-primary ${route.path === link.href ? 'text-primary' : 'text-muted-foreground'}`">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button @click="mobileOpen = !mobileOpen" class="text-foreground md:hidden"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'">
        <Icon v-if="mobileOpen" name="lucide:x" class="h-5 w-5" />
        <Icon v-else name="lucide:menu" class="h-5 w-5" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden">
      <ul class="flex flex-col gap-1 px-6 py-4">
        <li v-for="link in navLinks" :key="link.href">
          <NuxtLink :to="link.href" @click="mobileOpen = false" :class="`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${route.path === link.href
            ? 'text-primary'
            : 'text-muted-foreground'
            }`">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
  <!-- <nav class="flex fixed w-screen h-[60px] top-0 left-0 z-[99] justify-between items-center transition-all duration-300"
    :class="{ 'navbar-scrolled': isScrolled }">
    <div class="pl-4">
      <NuxtLink
        class="text-3xl font-ubuntu text-[#2d2e2e] dark:text-[#d9d9d9] font-semibold transition-colors duration-300"
        to="/">
        <span class="text-[#40CEF7]">Cru</span>nux
      </NuxtLink>
    </div>
    <div v-if="activeRoute" class="w-[450px] m-2 ml-8 flex flex-row laptop:items-start movil:items-center gap-[2px]">
      <NuxtLink
        class="cursor-pointer dark:text-[#d9d9d9] nav-link font-ubuntu font-semibold text-[#2d2e2e] px-3 py-2 rounded-lg transition-all duration-300"
        v-for="link in links" :key="link.name" :to="link.page">
        {{ link.name }}
      </NuxtLink>
    </div>
    <!-- Social links + controls
  </nav> -->
</template>
<style scoped>
.navbar-scrolled {
  background: rgba(203, 204, 204, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.dark .navbar-scrolled {
  background: rgba(36, 37, 37, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #40cef7;
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link.router-link-exact-active {
  color: #40cef7;
}

.nav-link.router-link-exact-active::after {
  width: 80%;
}
</style>
