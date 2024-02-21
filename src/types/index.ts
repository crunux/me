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
    image: Image;
    github: string;
    preview: string;
    techs: Tech[];
}
export interface SendEmailService {
    from: string;
    subject: string;
    body: string;
}
