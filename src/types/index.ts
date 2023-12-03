export interface Blog {
    createdAt: string;
    id: string;
    slug: string;
    tittle: string;
    content: string;
    image: {
        url: string;
    }
}