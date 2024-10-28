import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import UserDetail from "../views/UserDetail.vue";
import UserProfile from "../views/UserProfile.vue";
import UserPost from "../views/UserPost.vue";
import UserIndex from "../views/UserIndex.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/about", component: About },
  { path: "/user", component: User },
  // { path: "/user/:name", component: UserDetail },
  // { path: "/user/:name/posts", component: UserPost },
  // { path: "/user/:name/profile", component: UserProfile },
  {
    path: "/user/:name",
    component: UserIndex,
    children: [
      {
        path: "",
        component: UserDetail,
      },
      {
        path: "/user/:name/posts",
        component: UserPost,
      },
      {
        path: "/user/:name/profile",
        component: UserProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
