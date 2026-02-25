<template>
    <div class="top-1/5 pointer-events-none absolute inset-x-0 transform-gpu blur-3xl z-1" aria-hidden="true">
        <div class="blob relative left-[calc(50%+36rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary/80 to-accent/60 opacity-30 -translate-x-1/2"
            style="background: linear-gradient(315deg, oklch(0.72 0.12 195), oklch(0.60 0.10 220))" />
    </div>
</template>

<style scoped>
.blob {
    clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    animation: morph 1000ms ease-in-out infinite alternate;
}

.blob:hover {
    animation: morph 500ms ease-in-out infinite alternate;
}
</style>
