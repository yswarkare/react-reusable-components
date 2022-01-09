import React, { Fragment, Suspense, useEffect, useState } from 'react';
import Loader from './Loader';
import TabHeader from './TabHeader';

const CustomTabs = ({
	tabs = '',
	tabBarName: _tabBarName = '',
	activeIndex: _activeIndex = '',
	tabHeaders: _tabHeaders = '',
	addClasses = '',
	tabsClasses: _tabsClasses = '',
	headerClasses: _headerClasses = '',
	panelClasses: _panelClasses = '',
	children = '',
	activeColor = '',
	inactiveColor = '',
	getActiveIndex = () => {},
	...restProps
}) => {
	const [tabBarName, setTabBarName] = useState(_tabBarName || '');
	const [activeIndex, setActiveIndex] = useState(_activeIndex || 0);
	const [tabPanels, setTabPanels] = useState([]);
	const [tabHeaders, setTabHeaders] = useState(['']);
	const [headerClasses, setHeaderClasses] = useState('');
	const [panelClasses, setPanelClasses] = useState('');
	const [tabsClasses, setTabsClasses] = useState('');

	useEffect(() => {
		let newTabBarName = '';
		if (!_tabBarName && _tabBarName !== '') {
			if (tabs) {
				for (let i = 0; i < tabs.length; i++) {
					if (tabs[i]?.header) {
						newTabBarName = newTabBarName + tabs[i].header;
					}
				}
			}
			newTabBarName = newTabBarName.split(' ').join('');
		} else {
			newTabBarName = _tabBarName;
		}
		setTabBarName(newTabBarName);
		let index = parseInt(localStorage.getItem(newTabBarName));
		if (index) setActiveIndex(index);
		else setActiveIndex(0);
		if (restProps?.children) {
			let panels = [];
			for (let i = 0; i < restProps?.children?.length; i++) {
				let element = restProps?.children[i];
				if (element?.type?.name === 'TabPanel') {
					panels.push(element);
				}
			}
			setTabPanels(panels);
		}
	}, [_tabBarName, restProps?.children, tabs]);

	const setActiveTabIndex = (index) => {
		index = parseInt(index);
		localStorage.setItem(tabBarName, index);
		setActiveIndex(index);
		getActiveIndex(index);
	};
	return (
		<div className={`w-full flex flex-col justify-center content-center items-center ${addClasses}`}>
			<TabHeader
				tabBarName={tabBarName}
				tabs={tabs}
				getActiveIndex={(index) => {
					setActiveTabIndex(index);
				}}
				activeIndex={activeIndex}
				activeColor={activeColor}
				inactiveColor={inactiveColor}
			></TabHeader>
			{restProps?.children &&
				children?.map((element, index) => {
					if (element?.type?.name === 'FixedHeader') {
						return <Fragment key={index}>{element}</Fragment>;
					}
				})}
			{restProps?.children && tabPanels && (
				<Fragment>
					<Suspense fallback={Loader}>{tabPanels[activeIndex]}</Suspense>
				</Fragment>
			)}
			{restProps?.children &&
				children?.map((element, index) => {
					if (element?.type?.name === 'FixedFooter') {
						return <Fragment key={index}>{element}</Fragment>;
					}
				})}
		</div>
	);
};

export default CustomTabs;
