import { lazy } from "react";
import { components_link } from "./routes";

//* link path
export const radio_buttons_link = `/components/radio_buttons`;
export const checkboxes_link = `/components/checkboxes`;
export const tree_view_link = `/components/tree_view`;
export const custom_tabs_link = `/components/custom_tabs`;
export const date_lab_link = `/components/date_lab`;

//* link name
export const radio_buttons_linkname = `Radio Buttons`;
export const checkboxes_linkname = `Checkboxes`;
export const tree_view_linkname = `Tree View`;
export const custom_tabs_linkname = `Custom Tabs`;
export const date_lab_linkname = `Show Date`;

//* Components
const RadioButtons = lazy(()=> import("../ComponentLab/RadioButtons"));
const Checkboxes = lazy(()=> import("../ComponentLab/CheckboxesLab"));
const TreeView = lazy(()=> import("../ComponentLab/TreeViewLab"));
const CustomTabs = lazy(()=> import("../ComponentLab/CustomTabsLab"));
const DateLab = lazy(()=> import("../ComponentLab/DateLab"));

const componentRoutes = [
  {
    path: radio_buttons_link,
    pathname: radio_buttons_linkname,
    element: <RadioButtons />,
  },
  {
    path: checkboxes_link,
    pathname: checkboxes_linkname,
    element: <Checkboxes />,
  },
  {
    path: tree_view_link,
    pathname: tree_view_linkname,
    element: <TreeView />,
  },
  {
    path: custom_tabs_link,
    pathname: custom_tabs_linkname,
    element: <CustomTabs />,
  },
  {
    path: date_lab_link,
    pathname: date_lab_linkname,
    element: <DateLab />,
  },
]

export default componentRoutes;