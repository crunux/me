export interface Posts {
    createdAt: string | Date;
    publishedAt: string | Date;
    updatedAt?: string | Date;
    id: string;
    slug: string;
    title: string;
    image: Image;
    excerpt: string;
    readTime: string;
    tags: string[];
}

export interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
    image: Image;
    excerpt: string;
    readTime: string;
    tags: string[];
    createdAt: string | Date;
    publishedAt: string | Date;
    updatedAt?: string | Date;
    createdBy: CreatedBy

}

interface Image {
    url: string;
}

export interface CreatedBy {
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

interface Tech {
    url: string
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image?: Image;
    github: string;
    preview: string;
    techs?: Tech[];
    tags: string[];
}
export interface SendEmail {
    name: string;
    lastname: string;
    email: string;
    message: string;
}

export interface Hero{
    about: string;
    home: string;
    name: string;
    occupation: string;
    avatar: {url: string};
    createdAt: string | Date;
    publishedAt: string | Date;
    cv:{url:string}
}

export interface ProvideHero{
    about?: string;
    home?: Hero;
}
