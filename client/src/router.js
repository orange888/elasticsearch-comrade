import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TerminalView from "./views/TerminalView.vue";
import CreateAliasesView from "./views/CreateAliasesView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      nodeName: "home",
      component: Home
    },
    {
      path: "/terminal",
      nodeName: "terminal",
      component: TerminalView
    },
    {
      path: "/aliases/create",
      nodeName: "createAliases",
      component: CreateAliasesView
    },
    {
      path: "/about",
      nodeName: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
