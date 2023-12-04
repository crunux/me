import md from "markdown-it";

export default defineNuxtPlugin(() => {
    const renderer = md({ html: true });
    return {
        provide: {
            mdRenderer: renderer,
        },
    };
});