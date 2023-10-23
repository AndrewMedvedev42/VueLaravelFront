import { createRouter, createWebHistory} from "vue-router"
import newsList from "../views/newsList.vue";
import newsArticle from "../views/newsArticle.vue";

export const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "newlist",
            component: newsList,
        },
        {
            path: "/articles/:id",
            name: "article",
            component: newsArticle,
        }
    ]
})

export default router