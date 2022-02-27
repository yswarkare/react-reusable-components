import { createContext, useContext, useEffect, useState } from 'react';
import users from '../dummy/users/users';
import { darkTheme, lightTheme } from './themes';
import useSessionStorage from './useSessionStorage';

const inititalState = {
	theme: 'dark',
  users: users,
};

const ContextState = createContext(inititalState);

export const useContextState = () => {
	return useContext(ContextState);
};

const UpdateContextState = createContext({});

export const useUpdateContextState = () => {
	return useContext(UpdateContextState);
};

export const ContextStateProvider = ({ children }) => {
	const [contextState, setContextState] = useSessionStorage("context-state", inititalState);

	useEffect(() => {
		console.log({ contextState });
	}, [contextState]);

	const updateContextState = (prop, value) => {
		setContextState((prevState) => ({ ...prevState, [prop]: value }));
	};

	return (
		<ContextState.Provider value={contextState}>
			<UpdateContextState.Provider value={updateContextState}>
				<div
					id={`theme-context`}
					style={
						contextState.theme === 'dark'
							? darkTheme(contextState.theme)
							: contextState.theme === 'light'
							? lightTheme(contextState.theme)
							: darkTheme(contextState.theme)
					}
				>
					{children}
				</div>
			</UpdateContextState.Provider>
		</ContextState.Provider>
	);
};
