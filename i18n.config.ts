
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            home: {
                name: 'JOAN CRUZ',
                greet: 'Hi, My name is',
                ocupation: 'Frontend Developer'
            },
            about: {
                title: "About Me",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }

        },
        es: {
            home: {
                name: 'JOAN CRUZ',
                greet: 'Hola, Mi nombre es',
                ocupation: 'Frontend Developer'
            },
            about: {
                title: "Acerca de Mi",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }
        }
    },
}))