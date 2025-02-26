import { Blogs } from "./Blog.model";

export const BlogInitialState:Blogs = {
    blogs:[
        {
            id:1,
            title: "Angular",
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
        },
        {
            id:2,
            title: "React",
            description: "React is a JavaScript library for building user interfaces."
        },
        {
            id:3,
            title: "Vue",
            description: "Vue.js is a progressive framework for building user interfaces."
        }
   ]
};