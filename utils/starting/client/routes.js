import Home from "./container/Home";
import About from "./container/About";

export default [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/about',
  exact: true,
  component: About,
}];
