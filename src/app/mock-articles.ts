import { Article } from "./article";


export const ARTICLES: Article[] = [
    /* set for + articles
    {
        id: index +1 
        title: 'to set',
        content: 'article content',
        description: 'Preview || First words of the content',
        key: 'To set => = title || in the title of the page ',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    */
    
    {
        id: 1, 
        title: 'My first article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'First Article',
        key: 'First Article',
        date: new Date('December 17, 1995 03:24:00'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },

    {
        id:2,
        title: 'Second Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Second Article',
        key: 'Second Article',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },

    {
        id:3,
        title: 'Third Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Third Article',
        key: 'Third Article',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },

    {
        id:4,
        title: 'Fourth Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Fourth Article',
        key: 'Fourth Article',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    }
];
