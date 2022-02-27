import { createContext, useContext, useEffect, useState } from 'react';

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
};

export const ThemeContext = createContext(themes.light);

export const useThemeContext = () => {
	return useContext(ThemeContext);
};

export const ThemeUpdateContext = createContext(themes.dark);

export const useThemeUpdateContext = () => {
	return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);
	const darkColors = {
		surface_50: '#999',
		surface_100: '#888',
		surface_200: '#777',
		surface_300: '#666',
		surface_400: '#555',
		surface_500: '#444',
		surface_600: '#333',
		surface_700: '#222',
		surface_800: '#111',
		surface_900: '#090909',

		primary_50: '#efefef',
		primary_100: '#e9e9e9',
		primary_200: '#e7e7e7',
		primary_300: '#e5e5e5',
		primary_400: '#e3e3e3',
		primary_500: '#e1e1e1',
		primary_600: '#dfdfdf',
		primary_700: '#cfcfcf',
		primary_800: '#bfbfbf',
		primary_900: '#afafaf',
	};
	const lightColors = {
		primary_50: '#999',
		primary_100: '#888',
		primary_200: '#777',
		primary_300: '#666',
		primary_400: '#555',
		primary_500: '#444',
		primary_600: '#333',
		primary_700: '#222',
		primary_800: '#111',
		primary_900: '#090909',

		surface_50: '#efefef',
		surface_100: '#e9e9e9',
		surface_200: '#e7e7e7',
		surface_300: '#e5e5e5',
		surface_400: '#e3e3e3',
		surface_500: '#e1e1e1',
		surface_600: '#dfdfdf',
		surface_700: '#cfcfcf',
		surface_800: '#bfbfbf',
		surface_900: '#afafaf',
	};

	const baseCss = {
		backgroundColor: 'var(--surface-800) !important',
		color: 'var(--primary-500) !important',
	};

	useEffect(() => {}, [darkTheme]);

	const toggleTheme = () => {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	};

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				<div
          id={`theme-context`}
					style={{
						"backgroundColor": `${
							darkTheme ? darkColors.surface_800 : lightColors.surface_800
						}`,
						"color": `${darkTheme ? darkColors.primary_800 : lightColors.primary_800}`,
					}}
				>
					{children}
				</div>
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
