<script setup lang="ts">
</script>
<template>
    <section class="mx-auto max-w-5xl px-6 py-24">
        <div class="grid gap-12 md:grid-cols-2">
            <!-- Left - About -->
            <div>
                <h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
                    About
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

            <!-- Right - Experience -->
            <div>
                <h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
                    Experience
                </h2>
                <div class="mt-4 flex flex-col gap-6">
                    <ExperienceItem period="2024 - Present" title="Backend Engineer" company="Freelance"
                        description="Building custom APIs and backend systems for clients using FastAPI, Node.js, and Docker."
                        :tags="['FastAPI', 'Docker', 'Node.js']" />
                    <ExperienceItem period="2022 - 2024" title="Full Stack Developer" company="Tech Startup"
                        description="Developed and maintained web applications with Vue.js and React frontends connected to Node.js backends."
                        :tags="['Vue', 'React', 'TypeScript']" />
                    <ExperienceItem period="2020 - 2022" title="Junior Developer" company="Software Agency"
                        description="Started my journey building REST APIs and learning modern web development practices."
                        :tags="['Git', 'Node.js', 'React']" />
                </div>
            </div>
        </div>
    </section>
</template>