import { lazy } from "react";

//* link path
export const home_link = `/home`;
export const about_link = `/about`;
export const whats_new_link = `/whats-new`;
export const profile_link = `/profilee`;

//* link name

export const home_linkname = `/Home`;
export const about_linkname = `/About`;
export const whats_new_linkname = `/Whats New`;
export const profile_linkname = `/Profilee`;

//* Components

const Home = lazy(()=> import("../pages/Home"));
const About = lazy(()=> import("../pages/About"));
const WhatsNew = lazy(()=> import("../pages/WhatsNew"));
const Profile = lazy(()=> import("../pages/Profile"));


const routes = [
  {
    path: home_link,
    exact: true,
    name: home_linkname,
    element: Home,
  },
  {
    path: about_link,
    exact: true,
    name: about_linkname,
    element: About,
  },
  {
    path: whats_new_link,
    exact: true,
    name: whats_new_linkname,
    element: WhatsNew,
  },
  {
    path: profile_link,
    exact: true,
    name: profile_linkname,
    element: Profile,
  },
]

export default routes;