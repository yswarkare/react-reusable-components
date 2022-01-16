import { lazy } from "react";
import componentRoutes from "./componentRoutes";

//* link path

export const default_layout_link = `/`;
export const home_link = `/home`;
export const about_link = `/about`;
export const whats_new_link = `/whats-new`;
export const profile_link = `/profile`;
export const components_link = `/components`;

//* link name

export const home_linkname = `Home`;
export const about_linkname = `About`;
export const whats_new_linkname = `Whats New`;
export const profile_linkname = `Profilee`;
export const components_linkname = "Components";

//* Components

const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(()=> import("../pages/Home"));
const About = lazy(()=> import("../pages/About"));
const WhatsNew = lazy(()=> import("../pages/WhatsNew"));
const Profile = lazy(()=> import("../pages/Profile"));
const Components = lazy(()=> import("../pages/Components"));


const routes = [
  {
    path: default_layout_link,
    element: <DefaultLayout />,
    children: [
      {
        path: home_link,
        exact: true,
        pathname: home_linkname,
        element: <Home />,
      },
      {
        path: about_link,
        exact: true,
        pathname: about_linkname,
        element: <About />,
      },
      {
        path: whats_new_link,
        exact: true,
        pathname: whats_new_linkname,
        element: <WhatsNew />,
      },
      {
        path: profile_link,
        exact: true,
        pathname: profile_linkname,
        element: ((args) => {
          console.log(args)
          return <Profile />
        })(),
      },
      {
        path: components_link,
        pathname: components_linkname,
        element: <Components />,
        children: ((match) => {
          console.log(match)
          return componentRoutes
        })()
      },
    ]
  },
]

export default routes;