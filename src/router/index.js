import HomePage from "../views/HomePage/index";
import Users from "../views/Users/index";
import Comments from "../views/Comments/index";
import Photos from "../views/Photos/index";
import Reselect from "../views/Reselect/index";

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/comments",
    component: Comments
  },
  {
    path: "/photos",
    component: Photos
  },
  {
    path: "/reselect",
    component: Reselect
  }
];

export default routes;
