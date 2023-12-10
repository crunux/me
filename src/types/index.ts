export interface Posts {
    createdAt: string;
    id: string;
    slug: string;
    tittle: string;
    image: Image;
}

export interface Post {
    id: string;
    tittle: string;
    content: string;
    slug: string;
    image: Image;
    createdAt: string;
    createBy: CreatedBy

}

interface Image {
    url: string;
}
interface CreatedBy {
    name: string;
    picture: string;
    id: string;
}

export interface Route {
    name: string;
    page: string,

}

export interface LinkSocial {
    icon: string;
    link: string;
    name: string;
}