import Home from "./container/Home";
import About from "./container/About";
import Docs from "./container/Docs";

export default [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/about',
  exact: true,
  component: About,
}, {
  path: '/documentation',
  exact: true,
  component: Docs,
}];
