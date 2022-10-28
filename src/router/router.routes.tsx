import paths from "./router.paths";
import { HomePage, LoginPage } from "@pages";

const appRoutes = [
  {
    name: "Home",
    path: paths.PATH_BASE,
    element: <HomePage />
  },
  {
    name: "Login",
    path: paths.PATH_LOGIN,
    element: <LoginPage />
  }
];

export default appRoutes;
