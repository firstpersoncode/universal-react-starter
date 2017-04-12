import Home from "./container/Home";
import Sample from "./container/Sample";
import About from "./container/About";
import Docs from "./container/Docs";

export default [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/sample',
  exact: true,
  component: Sample,
}, {
  path: '/about',
  exact: true,
  component: About,
}, {
  path: '/docs',
  exact: true,
  component: Docs,
}];
