export default function Router() {
  this.routes = [];

  this.addRoutes = (routes) => {
    this.routes.push(...routes);
    return this;
  };

  this.init = () => {
    window.addEventListener("popstate", () => this.render());
    this.render();
  };

  this.navigate = (path) => {
    history.pushState({}, "", path);
    this.render();
  };

  this.render = () => {
    const path = window.location.pathname;
    const currentRoute = this.routes.find((route) => route.path === path);

    if (currentRoute) {
      const $app = document.querySelector(".app");
      $app.innerHTML = "";
      currentRoute.component($app);
    }
  };
}
