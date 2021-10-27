import {
  createWebHistory,
  createRouter
} from "vue-router";

const routes = [{
    path: "/",
    alias: "/accounts",
    name: "accounts",
    component: () => import("./components/Accounts")
  },
  {
    path: "/accounts/:id",
    name: "account-details",
    component: () => import("./components/AccountsInfo")
  },
  {
    path: "/accounts-add",
    name: "add-account",
    component: () => import("./components/AddAccount")
  },

  {
    path: "/signin",
    name: "signin",
    component: () => import("./components/Signin")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/Signup")
  },
  {
    path: "/opportunity",
    alias: "/opportunity",
    name: "opportunity",
    component: () => import("./components/Opportunities")
  },
  {
    path: "/opportunity-add",
    alias: "/opportunity-add",
    name: "opportunity-add",
    component: () => import("./components/AddOpportunity")
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;