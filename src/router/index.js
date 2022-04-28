import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
import layout from "@/views/Layout";
import Search from "@/views/Search";
import Home from "@/views/Home";
import Play from "@/views/Play";
import Comment from "@/views/Comment";



const routes = [
    {
        path: "/",
        redirect: "/layout"
    },
    {
        path: "/layout",
        redirect: "/layout/home",
        component: layout,

        children: [
            {
                path: 'home',
                component: Home,
                meta: { // meta保存路由对象额外信息的
                    title: "首页"
                },
            },
            {
                path: 'search',
                component: Search,
                meta: { // meta保存路由对象额外信息的
                    title: "搜索"
                },

            }

        ]

    },
    {
        path: "/Play",
        component: Play
    },
    {
        path: "/comment",
        component:Comment
    }
]
const index = new VueRouter({
    routes
})
export default index