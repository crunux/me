<script setup lang="ts">
import BlobTop from './style/BlobTop.vue';
import BlobBottom from './style/BlobBottom.vue';

const skills = [
    "Vue", "React", "React Native", "TypeScript", "Git", "Docker", "Node.js", "FastAPI",
]

const socialLinks = [
    { to: "https://linkedin.com/in/crunux", label: "LinkedIn", icon: "lucide:linkedin" },
    { to: "https://github.com/crunux", label: "GitHub", icon: "lucide:github" },
    { to: "https://x.com/crunux_", label: "X", icon: "lucide:twitter" },
    { to: "mailto:hello@joancruz.dev", label: "Email", icon: "lucide:mail" },
    { label: "bluesky", to: "https://bsky.app/profile/crunux.bsky.social", icon: "i-carbon-logo-bluesky" },
]

const ocupationWork = [
    "Frontend Developer",
    "Backend Developer",
    "React Native Developer"
]
const { displayedText, isTyping } = useTypingEffect({
    text: ocupationWork,
    speed: 100,
    delay: 2000,
    loop: true,
    cursor: true
});
</script>
<template>
    <section class="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <!-- Available badge -->
        <BlobTop />
        <BlobBottom />
        <div
            class="relative z-10 mb-8 flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/10 px-4 py-1.5">
            <span class="h-2 w-2 rounded-full bg-emerald-400" />
            <span class="text-xs font-medium tracking-wide text-primary">
                AVAILABLE FOR WORK
            </span>
        </div>

        <!-- Name -->
        <h1
            class="relative z-10 hero-text-reveal text-balance text-center text-5xl font-bold tracking-tight leading-tight text-primary md:text-7xl lg:text-8xl">
            Joan Cruz
        </h1>

        <!-- Code subtitle -->
        <p class="relative z-10 hero-text-reveal mt-4 font-mono text-base text-muted-foreground md:text-lg">
            <span class="text-primary">&lt;</span>{{ displayedText }}<span v-if="isTyping"
                class="text-primary animate-pulse">|
            </span><span class="text-primary">/&gt;</span>
        </p>

        <!-- Description -->
        <!-- <p class="mt-4 max-w-lg text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Backend developer who builds reliable APIs and scalable systems. Passionate about clean architecture,
            engineering principles, and developer experience.
        </p> -->

        <!-- Skills -->
        <div class="relative z-10 mt-8 flex max-w-md flex-wrap items-center justify-center gap-2">
            <span v-for="skill in skills" :key="skill"
                class="rounded-md border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary">
                {{ skill }}
            </span>
        </div>

        <!-- Social Links -->
        <div class="relative z-10 mt-8 flex items-center gap-5">
            <NuxtLink v-for="link in socialLinks" :key="link.label" :to="link.to" target="_blank"
                rel="noopener noreferrer" :aria-label="link.label"
                class="text-primary/70 transition-colors hover:text-primary">
                <Icon :name="link.icon" class="h-6 w-6" />
            </NuxtLink>
        </div>

        <!-- CTAs -->
        <div class="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <NuxtLink to="/projects"
                class="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                View Projects
            </NuxtLink>
            <NuxtLink to="mailto:hello@joancruz.dev"
                class="rounded-md border border-border bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Contact Me
            </NuxtLink>
            <NuxtLink to="#"
                class="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Resume
            </NuxtLink>
        </div>

        <!-- Scroll indicator -->
        <div class="relative z-10 mt-10 md:mt-36 flex flex-col items-center gap-2 text-muted-foreground">
            <span class="text-xs tracking-wide mb-4">Scroll</span>
            <div class="h-8 w-px bg-primary animate-bounce" />
            <!-- <div class="w-[2px] h-8 bg-primary rounded animate-bounce"/> -->
        </div>
    </section>
</template>
