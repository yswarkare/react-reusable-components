 
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import componentsList from '../../data/componentsList.data';
import ComponentInfo from '../../views/ComponentInfo/ComponentInfo';

const Components = () => {
	return (
		<div className={`w-full flex p-4 flex-col justify-center content-center items-center`}>
			<div className={`w-full flex flex-row justify-start content-start items-start`}>
				<aside className={`w-20/100 p-2 flex flex-col justify-start content-start items-start`}>
					<div className={`p-2 flex flex-row justify-center content-center items-center`}>
						<span className='text-12'>
							{`List of custom components`}
						</span>
					</div>
					{componentsList?.map((component, index) => {
						return <ComponentInfo key={index} {...component}></ComponentInfo>;
					})}
				</aside>
				<div className={`flex-grow w-full flex flex-col justify-start content-center items-center`}>
				<Suspense fallback={<Loader visible={true} />} >
					<Outlet />
				</Suspense> 
				</div>
			</div>
		</div>
	);
};

export default Components;
