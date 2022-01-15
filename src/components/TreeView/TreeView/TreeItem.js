import React from 'react';
import { Button } from 'primereact/button';

const TreeeItem = ({
	showPanel = false,
	header = '',
	headerClass = '',
	headerBarClass = '',
	headerContainerClass = '',
	iconClass = '',
  togglePanel = () => {},
	...restProps
}) => {
	

	return (
		<div className={`accordion-tab w-full mx-2 my-1 overflow-visible`}>
			<div
				className={`w-full hover:bg-primary-bg-gradient bg-primary-bg-surface border-1 border-gray-status cursor-pointer flex flex-row justify-center content-center items-center ${
					showPanel === true ? 'rounded-t' : 'rounded-md '
				} ${headerBarClass}`}
				onClick={() => {
					togglePanel(!showPanel);
				}}
			>
				<div className={`flex-shrink flex flex-col justify-center content-center items-center`}>
					<Button
						tooltip={`${showPanel === true ? 'hide' : 'show'}`}
						tooltipOptions={{ position: 'top' }}
						icon={`
                        fas fa-angle-right text-lg text-gray-status px-4 py-1 
                        ${
													showPanel === true
														? 'transition duration-300 transform rotate-90'
														: 'transition duration-300'
												} 
                        ${iconClass ? iconClass : ''}
                    `}
						label
					></Button>
				</div>
				<div
					className={`w-full transition duration-200 flex-grow flex flex-col justify-center content-center items-center ${headerContainerClass}`}
				>
					<span className={`w-full flex flex-row text-xl px-4 py-1 ${headerClass}`}>{header}</span>
				</div>
			</div>
			<div
				className={`w-full overflow-visible transition duration-200 flex flex-col justify-center content-center items-center`}
			>
				{showPanel && (
					<div classes={`w-full border-1 border-t-0 border-gray-status rounded-b flex flex-col`}>
						{restProps?.children}
					</div>
				)}
			</div>
		</div>
	);
};

export default TreeeItem;
