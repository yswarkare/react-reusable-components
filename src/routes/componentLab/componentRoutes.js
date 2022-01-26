import { lazy } from 'react';
import {
	radio_buttons_link,
	checkboxes_link,
	tree_view_link,
	custom_tabs_link,
	date_lab_link,
} from './componentLab.paths';

//* link name
export const radio_buttons_linkname = `Radio Buttons`;
export const checkboxes_linkname = `Checkboxes`;
export const tree_view_linkname = `Tree View`;
export const custom_tabs_linkname = `Custom Tabs`;
export const date_lab_linkname = `Show Date`;

//* Components
const RadioButtons = lazy(() => import('../../ComponentLab/RadioButtons/RadioButtonsLab'));
const Checkboxes = lazy(() => import('../../ComponentLab/CheckboxesLab/CheckboxesLab'));
const TreeView = lazy(() => import('../../ComponentLab/TreeViewLab/TreeViewLab'));
const CustomTabs = lazy(() => import('../../ComponentLab/CustomTabsLab/CustomTabsLab'));
const DateLab = lazy(() => import('../../ComponentLab/DateLab/DateLab'));

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
];

export default componentRoutes;
