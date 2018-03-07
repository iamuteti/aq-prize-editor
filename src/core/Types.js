// @flow

export type User = {
  id: string,
  displayName: string,
  avatarBig: string,
  avatarSmall: string,
  key: string,
  algorithm: string
}

/*
This type defines a single sublink row that is displayed in the sidebar, under a main sidebar link
*/
export type ChildRoute = {
  /* Display name in the sidebar */
  name: string,
  /* react-dom-router path string that will be set 
  when this is clicked */  
  path: string,
  exact?: boolean,
  component: Object,
  showInSidebar?: boolean
}

/*
This type defines a single row that is displayed in the sidebar.
*/
export type ParentRoute = {
  /* Display name in the sidebar */
  name: string,
  /* react-dom-router path string that will be set 
  when this is clicked */
  path?: string,
  exact?: boolean,
  /* any sublinks, if any. If none, this should be an empty array */
  sublinks: Array<ChildRoute>,
  /* Admin LTE font-awesome icon as defined in https://adminlte.io/themes/AdminLTE/pages/UI/icons.html */
  className? : string,
  /* The react component to render */
  component: React$ComponentType<any>,
}

export const Types = {
  authenticator: "authenticator"
}