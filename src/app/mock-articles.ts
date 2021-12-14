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
        title: 'Title',
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
        description: 'Lorem Ipsum Dolor Sit Amet Consecutor',
        key: 'First Article',
        date: new Date('December 17, 1995 03:24:00'),
        imageUrl: 'https://quantdare.com/wp-content/uploads/2017/10/World-connection.jpg'
    },

    {
        id:2,
        title: 'Second Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Second Article',
        key: 'Second Article',
        date: new Date('December 18, 1995 03:24:00'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },

    {
        id:3,
        title: 'Third Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Third Article',
        key: 'Third Article',
        date: new Date('December 19, 1995 03:24:00'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },

    {
        id:4,
        title: 'Fourth Article',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde!',
        description: 'Fourth Article',
        key: 'Fourth Article',
        date: new Date('December 20, 1995 03:24:00'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    }
];
