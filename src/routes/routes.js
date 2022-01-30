import { lazy } from 'react';
import componentRoutes from './componentLab/componentRoutes';
import {
	default_layout_link,
	home_link,
	about_link,
	whats_new_link,
	profile_link,
	components_link,
	hooks_link,
	redux_link,
} from './pages/pages.paths';

//* link name

export const home_linkname = `Home`;
export const about_linkname = `About`;
export const whats_new_linkname = `Whats New`;
export const profile_linkname = `Profilee`;
export const components_linkname = 'Components';
export const hooks_linkName = 'React Hooks';
export const redux_linkName = 'React Redux';

//* Components

const DefaultLayout = lazy(() => import('../layouts/DefaultLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const WhatsNew = lazy(() => import('../pages/WhatsNew'));
const Profile = lazy(() => import('../pages/Profile'));
const Components = lazy(() => import('../pages/Components'));
const Hooks = lazy(() => import('../pages/Hooks'));
const Redux = lazy(() => import('../pages/Redux'));

const routes = [
	{
		path: default_layout_link,
		element: <DefaultLayout />,
		children: [
			{
				path: home_link,
				pathname: home_linkname,
				element: <Home />,
			},
			{
				path: about_link,
				pathname: about_linkname,
				element: <About />,
			},
			{
				path: whats_new_link,
				pathname: whats_new_linkname,
				element: <WhatsNew />,
			},
			{
				path: profile_link,
				pathname: profile_linkname,
				element: ((args) => {
					console.log(args);
					return <Profile />;
				})(),
			},
			{
				path: components_link,
				pathname: components_linkname,
				element: <Components />,
				children: ((match) => {
					console.log(match);
					return componentRoutes;
				})(),
			},
			{
				path: hooks_link,
				pathname: hooks_linkName,
				element: <Hooks />,
			},
			{
				path: redux_link,
				pathname: redux_linkName,
				element: <Redux />,
			},
		],
	},
];

export default routes;
