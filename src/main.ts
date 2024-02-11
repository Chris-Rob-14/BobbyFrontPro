import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import AccueilPro from "./pages/AccueilPro.vue";
import ComptePro from "./pages/ComptePro.vue";
import RecherchePro from "./pages/RecherchePro.vue";
import AgendaHebdoPro from "./pages/AgendaHebdoPro.vue";
import ValidationRDVPro from "./pages/ValidationRDVPro.vue";
import FAQPro from "./pages/FAQPro.vue";
import MessageriePro from "./pages/MessageriePro.vue";
import ConnexionPro from "./pages/ConnexionPro.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
  meta?: {
    logo?: string;
    title?: string;
    description?: string;
  };
}

const routes: Route[] = [
  {
    path: "/accueilpro",
    name: "AccueilPro",
    component: AccueilPro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/comptepro",
    name: "ComptePro",
    component: ComptePro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/recherchepro",
    name: "RecherchePro",
    component: RecherchePro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/agendahebdopro",
    name: "AgendaHebdoPro",
    component: AgendaHebdoPro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/validationrdvpro",
    name: "ValidationRDVPro",
    component: ValidationRDVPro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/faqpro",
    name: "FAQPro",
    component: FAQPro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/messageriepro",
    name: "MessageriePro",
    component: MessageriePro,
    meta: { logo: '/Logo.svg' }
  },
  {
    path: "/",
    name: "ConnexionPro",
    component: ConnexionPro,
    meta: { logo: '/Logo.svg' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "BobbyPro";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
