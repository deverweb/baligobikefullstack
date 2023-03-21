export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.path !== "/" && to.path.endsWith("/")) {
  //   const { path, query, hash } = to;
  //   console.log("path: ", path);
  //   const nextPath = path.replace(/\/+$/, "") || "/";
  //   console.log("nextPath: ", nextPath);
  //   const nextRoute = { path: nextPath, query, hash };
  //   return navigateTo(nextRoute, { redirectCode: 301 });
  // }
  if (to.path !== "/" && !to.path.endsWith("/")) {
    const { path, query, hash } = to;
    const nextPath = path + "/";
    const nextRoute = { path: nextPath, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
  }
});
