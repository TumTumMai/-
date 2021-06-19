import { startsWith } from "lodash";

export default ({ store, redirect, route, app }) => {
  console.log("asdasdasd");
  if (store.state.auth.user.roles) {
    let role = store.state.auth.user.roles[0];
    console.log(route.fullPath);
    console.log(role);
    // // if (!startsWith(route.fullPath, '/login')) {
    // // }
    if (role === "ROLE_MODERATOR") {
      // if (!startsWith(route.fullPath, '/login')) {
      // }
      console.log("asdasdasd");
      if (!startsWith(route.fullPath, "/account/information")) {
        console.log("asdasd");
        return redirect(`/account/information`);
      }
    }
  }
};
