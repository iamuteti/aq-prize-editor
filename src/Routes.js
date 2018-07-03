// @flow
import type { ParentRoute } from './core/Types';
import Example from './views/example';
import Prize from './views/prize';
/*
This is where the sidebar routes are setup. Basically,
it is a collection of ParentRoutes, which are interpreted by
the views/Sidebar.jsx component. See ParentRoute type for more
details.
*/
const routes: Array<ParentRoute> = [
  {
    name: 'Example',
    path: '/example',
    className: 'fa-link',
    sublinks: [],
    component: Example
  },
  {
    name: 'Prize',
    path: '/prize',
    className: 'fa-link',
    sublinks: [],
    component: Prize
  }
];

export default routes;
