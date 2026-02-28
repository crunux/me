<script setup lang="ts">
  const currentYear: number = new Date().getUTCFullYear();
  const socialLinks = [
    { href: 'https://linkedin.com/in/crunux', label: 'LinkedIn', icon: 'lucide:linkedin' },
    { href: 'https://github.com/crunux', label: 'GitHub', icon: 'lucide:github' },
    { href: 'https://x.com/crunux_', label: 'X', icon: 'lucide:twitter' },
    { href: 'mailto:crunux@proton.me', label: 'Email', icon: 'lucide:mail' },
  ]
</script>
<template>
  <footer class="border-t border-border/50 bg-background">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
      <p class="text-sm text-muted-foreground">
        &copy; {{ currentYear }}
        <span class="text-primary">Crunux</span>
        <!-- <span></span> -->
        Built with Nuxt.js and <span class="text-red-500">❤</span>.
      </p>
      <div class="flex items-center gap-4">
        <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer"
          :aria-label="link.label" class="text-muted-foreground transition-colors hover:text-primary">
          <Icon :name="link.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
