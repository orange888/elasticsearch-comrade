import Router from "vue-router";
import CreateAliasesView from "./Views/AliasesView.vue";
import Home from "./Views/Home.vue";
import IndexSettingsView from "./Views/IndexSettingsView.vue";
import RESTView from "./Views/RESTView.vue";
import TasksView from "./Views/TasksView.vue";
import TemplatesView from "./Views/TemplatesView.vue";

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
      path: "/rest",
      nodeName: "rest",
      component: RESTView
    },
    {
      path: "/aliases",
      nodeName: "createAliases",
      component: CreateAliasesView
    },
    {
      path: "/tasks",
      nodeName: "tasks",
      component: TasksView
    },
    {
      path: "/snapshots",
      nodeName: "snapshots",
      component: () =>
        import(/* webpackChunkName: "snapshots" */ "./Views/SnapshotsView.vue")
    },
    {
      path: "/templates",
      nodeName: "templates",
      component: TemplatesView
    },
    {
      path: "/indexSettings/:indexName",
      nodeName: "indexSettings",
      component: IndexSettingsView,
      props: true
    }
  ]
});
