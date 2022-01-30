import { about_link, components_link, home_link, hooks_link, profile_link, redux_link, whats_new_link } from "../routes/pages/pages.paths";

const headerItems = [
  {
    label: `Home`,
    path: home_link,
  },
  {
    label: `Components`,
    path: components_link,
  },
  {
    label: `Hooks`,
    path: hooks_link,
  },
  {
    label: `Redux`,
    path: redux_link,
  },
  {
    label: `Profile`,
    path: profile_link,
  },
  {
    label: `Whats New`,
    path: whats_new_link,
  },
  {
    label: `About this`,
    path: about_link,
  }
]

export default headerItems;