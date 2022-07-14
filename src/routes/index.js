import { createRouter, createWebHistory } from "vue-router";

import PostsComponent from "@/components/Posts/PostsComponent";
import ViewPostComponent from "@/components/Posts/ViewPostComponent";
import EditPostComponent from "@/components/Posts/EditPostComponent";
import AddNewPostComponent from "@/components/Posts/AddNewPostComponent";
import RandomUserComponent from "@/components/Users/RandomUserComponent";

const routes = [{
    path: "/posts",
    name: "PostsComponent",
    component: PostsComponent,
},
{
    path: "/posts/:id",
    name: "ViewPostComponent",
    component: ViewPostComponent,
},
{
    path: "/edit-post/:id",
    name: "EditPostComponent",
    component: EditPostComponent,
},
{
    path: "/add-post/",
    name: "AddNewPostComponent",
    component: AddNewPostComponent,
},
{
    path: "/random-user",
    name: "RandomUserComponent",
    component: RandomUserComponent,
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;