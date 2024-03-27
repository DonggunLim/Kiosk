import "./styles/reset.css";
import "./styles/global.css";

import Router from "./utilities/router";
import PageIndex from "./pages/index";

export default function App() {
  const router = new Router();
  const { homepage, orderpage, adminpage } = new PageIndex(router);
  router //
    .addRoutes([
      { path: "/", component: homepage },
      { path: "/order", component: orderpage },
      { path: "/admin", component: adminpage },
    ])
    .init();
}
