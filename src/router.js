import Vue from "vue";
import VueRouter from "vue-router";
import stations from "./views/stations";
import input_streams from "./views/input_streams.vue";
import roi_frames from "./views/roi_frames.vue";
import objects from "./views/objects.vue";
import train from "./views/train.vue";
import integrations from "./views/integrations.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "stations",
    component: stations,
  },
  {
    path: "/input_streams",
    name: "input_streams",
    component: input_streams,
  },
  {
    path: "/roi_frames",
    name: "roi_frames",
    component: roi_frames,
  },
  {
    path: "/objects",
    name: "objects",
    component: objects,
  },
  {
    path: "/train",
    name: "train",
    component: train,
  },
  {
    path: "/integrations",
    name: "integrations",
    component: integrations,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
