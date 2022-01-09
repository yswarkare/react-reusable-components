const plugin = require('tailwindcss/plugin');
const buttons = require('./src/tailwind/buttons');
const links = require('./src/tailwind/links');
const height = require('./src/tailwind/height');
const width = require('./src/tailwind/width');
const cards = require('./src/tailwind/cards');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	presets: [],
	darkMode: 'media', // or 'class'
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			// HD: "1280px", // HD 1280x720
			HDR: '1365px', // HD Ready 1366x768
			'HD+': '1599px', // HD+	1600x900
			FHD: '1919px', // FHD	1920x1080
			WQHD: '2559px', // WQHD	2560x1440
			// "WQXGA": "2560px", // WQXGA	2560x1600
			// "QHD": "3200px", // QHD	3200×1800
			// "UHD": "3840px", // UHD	3840×2160
			// "4k": "4096px", // 4K 4096x2160
		},
		colors: ({ colors }) => ({
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white,
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
		}),
		columns: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			'3xs': '16rem',
			'2xs': '18rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
		},
		spacing: {
			0: '0px',
			px: '1px',
			'1px': '1px',
			'2px': '2px',
			'3px': '3px',
			0.25: '0.06125rem',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			13: '3.25rem',
			14: '3.5rem',
			15: '3.75rem',
			16: '4rem',
			17: '4.25rem',
			18: '4.5rem',
			19: '4.75rem',
			20: '5rem',
			21: '5.25rem',
			22: '5.5rem',
			23: '5.75rem',
			24: '6rem',
			25: '6.25rem',
			26: '6.5rem',
			27: '6.75rem',
			28: '7rem',
			32: '8rem',
			34: '8.5rem',
			36: '9rem',
			38: '9.5rem',
			40: '10rem',
			42: '10.5rem',
			44: '11rem',
			46: '11.5rem',
			48: '12rem',
			50: '12.5rem',
			52: '13rem',
			54: '13.5rem',
			56: '14rem',
			60: '15rem',
			63: '15.625rem',
			64: '16rem',
			68: '17rem',
			72: '18rem',
			76: '19rem',
			80: '20rem',
			84: '21rem',
			88: '22rem',
			92: '23rem',
			96: '24rem',
		},
		animation: {
			none: 'none',
			spin: 'spin 1s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			bounce: 'bounce 1s infinite',
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
		},

		backdropBlur: ({ theme }) => theme('blur'),
		backdropBrightness: ({ theme }) => theme('brightness'),
		backdropContrast: ({ theme }) => theme('contrast'),
		backdropGrayscale: ({ theme }) => theme('grayscale'),
		backdropHueRotate: ({ theme }) => theme('hueRotate'),
		backdropInvert: ({ theme }) => theme('invert'),
		backdropOpacity: ({ theme }) => theme('opacity'),
		backdropSaturate: ({ theme }) => theme('saturate'),
		backdropSepia: ({ theme }) => theme('sepia'),
		backgroundColor: ({ theme }) => theme('colors'),
		backgroundImage: {
			none: 'none',
			'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
			'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
			'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
			'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
			'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
			'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
			'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
			'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
		},
		backgroundOpacity: ({ theme }) => theme('opacity'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		blur: {
			0: '0',
			none: '0',
			sm: '4px',
			DEFAULT: '8px',
			md: '12px',
			lg: '16px',
			xl: '24px',
			'2xl': '40px',
			'3xl': '64px',
		},
		brightness: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2',
		},
		borderColor: ({ theme }) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.200', 'currentColor'),
		}),
		borderOpacity: ({ theme }) => theme('opacity'),
		borderRadius: {
			none: '0px',
			0: '0px',
			1: '1px',
			2: '2px',
			3: '3px',
			4: '4px',
			5: '5px',
			6: '6px',
			7: '7px',
			8: '8px',
			9: '9px',
			10: '10px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
			inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
			none: 'none',
			'card-1': '0 6px 5px -5px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 5px 5px 0 rgba(0, 0, 0, 0.12)',
			'card-2': '-3px 5px 10px 5px #b1b1b1',
			'card-3': '-3px 5px 5px 5px #b1b1b1',
			'card-4': '-3px 7px 5px 7px #a1a1a1',
			tab: '-1px 2px 3px 2px #a1a1a1',
		},
		boxShadowColor: ({ theme }) => theme('colors'),
		caretColor: ({ theme }) => theme('colors'),
		accentColor: ({ theme }) => ({
			...theme('colors'),
			auto: 'auto',
		}),
		contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2',
		},
		container: {},
		content: {
			none: 'none',
		},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			help: 'help',
			'not-allowed': 'not-allowed',
			none: 'none',
			'context-menu': 'context-menu',
			progress: 'progress',
			cell: 'cell',
			crosshair: 'crosshair',
			'vertical-text': 'vertical-text',
			alias: 'alias',
			copy: 'copy',
			'no-drop': 'no-drop',
			grab: 'grab',
			grabbing: 'grabbing',
			'all-scroll': 'all-scroll',
			'col-resize': 'col-resize',
			'row-resize': 'row-resize',
			'n-resize': 'n-resize',
			'e-resize': 'e-resize',
			's-resize': 's-resize',
			'w-resize': 'w-resize',
			'ne-resize': 'ne-resize',
			'nw-resize': 'nw-resize',
			'se-resize': 'se-resize',
			'sw-resize': 'sw-resize',
			'ew-resize': 'ew-resize',
			'ns-resize': 'ns-resize',
			'nesw-resize': 'nesw-resize',
			'nwse-resize': 'nwse-resize',
			'zoom-in': 'zoom-in',
			'zoom-out': 'zoom-out',
		},
		divideColor: ({ theme }) => theme('borderColor'),
		divideOpacity: ({ theme }) => theme('borderOpacity'),
		divideWidth: ({ theme }) => theme('borderWidth'),
		dropShadow: {
			sm: '0 1px 1px rgb(0 0 0 / 0.05)',
			DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
			md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
			lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
			xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
			'2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
			none: '0 0 #0000',
		},
		fill: ({ theme }) => theme('colors'),
		grayscale: {
			0: '0',
			DEFAULT: '100%',
		},
		hueRotate: {
			0: '0deg',
			15: '15deg',
			30: '30deg',
			60: '60deg',
			90: '90deg',
			180: '180deg',
		},
		invert: {
			0: '0',
			DEFAULT: '100%',
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexBasis: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
		}),
		flexGrow: {
			0: '0',
			1: '1',
			DEFAULT: '1',
		},
		flexShrink: {
			0: '0',
			1: '1',
			DEFAULT: '1',
		},
		fontFamily: {
			sans: [
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
			1: '0.1rem',
			2: '0.2rem',
			3: '0.3rem',
			4: '0.4rem',
			5: '0.5rem',
			6: '0.6rem',
			7: '0.7rem',
			8: '0.8rem',
			9: '0.9rem',
			10: '1rem',
			11: '1.1rem',
			12: '1.2rem',
			13: '1.3rem',
			14: '1.4rem',
			15: '1.5rem',
			16: '1.6rem',
			17: '1.7rem',
			18: '1.8rem',
			19: '1.9rem',
			20: '2rem',
			25: '2.5rem',
			30: '3rem',
			35: '3.5rem',
			40: '4rem',
			45: '4.5rem',
			50: '5rem',
			55: '5.5rem',
			60: '6rem',
			65: '6.5rem',
			70: '7rem',
			75: '7.5rem',
			80: '8rem',
			85: '8.5rem',
			90: '9rem',
			95: '9.5rem',
			100: '10rem',
			105: '10.5rem',
			110: '11rem',
			115: '11.5rem',
			120: '12rem',
			125: '12.5rem',
			130: '13rem',
			135: '13.5rem',
			140: '14rem',
			145: '14.5rem',
			150: '15rem',
			155: '15.5rem',
			160: '16rem',
			165: '16.5rem',
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		gap: ({ theme }) => theme('spacing'),
		gradientColorStops: ({ theme }) => theme('colors'),
		gridAutoColumns: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)',
		},
		gridAutoRows: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)',
		},
		gridColumn: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-7': 'span 7 / span 7',
			'span-8': 'span 8 / span 8',
			'span-9': 'span 9 / span 9',
			'span-10': 'span 10 / span 10',
			'span-11': 'span 11 / span 11',
			'span-12': 'span 12 / span 12',
			'span-full': '1 / -1',
		},
		gridColumnEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridColumnStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridRow: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-full': '1 / -1',
		},
		gridRowStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridRowEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridTemplateColumns: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))',
		},
		gridTemplateRows: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))',
		},
		height: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		}),
		inset: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
		}),
		keyframes: {
			spin: {
				to: {
					transform: 'rotate(360deg)',
				},
			},
			ping: {
				'75%, 100%': {
					transform: 'scale(2)',
					opacity: '0',
				},
			},
			pulse: {
				'50%': {
					opacity: '.5',
				},
			},
			bounce: {
				'0%, 100%': {
					transform: 'translateY(-25%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
				},
				'50%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
				},
			},
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0em',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			3: '.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
		},
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
		}),
		maxHeight: ({ theme }) => ({
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		}),
		maxWidth: ({ theme, breakpoints }) => ({
			none: 'none',
			0: '0rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			prose: '65ch',
			'1/100': '1%',
			'2/100': '2%',
			'3/100': '3%',
			'4/100': '4%',
			'5/100': '5%',
			'6/100': '6%',
			'7/100': '7%',
			'8/100': '8%',
			'9/100': '9%',
			'10/100': '10%',
			'11/100': '11%',
			'12/100': '12%',
			'13/100': '13%',
			'14/100': '14%',
			'15/100': '15%',
			'16/100': '16%',
			'17/100': '17%',
			'18/100': '18%',
			'19/100': '19%',
			'20/100': '20%',
			'21/100': '21%',
			'22/100': '22%',
			'23/100': '23%',
			'24/100': '24%',
			'25/100': '25%',
			'26/100': '26%',
			'27/100': '27%',
			'28/100': '28%',
			'29/100': '29%',
			'30/100': '30%',
			'31/100': '31%',
			'32/100': '32%',
			'33/100': '33%',
			'34/100': '34%',
			'35/100': '35%',
			'36/100': '36%',
			'37/100': '37%',
			'38/100': '38%',
			'39/100': '39%',
			'40/100': '40%',
			'41/100': '41%',
			'42/100': '42%',
			'43/100': '43%',
			'44/100': '44%',
			'45/100': '45%',
			'46/100': '46%',
			'47/100': '47%',
			'48/100': '48%',
			'49/100': '49%',
			'50/100': '50%',
			'51/100': '51%',
			'52/100': '52%',
			'53/100': '53%',
			'54/100': '54%',
			'55/100': '55%',
			'56/100': '56%',
			'57/100': '57%',
			'58/100': '58%',
			'59/100': '59%',
			'60/100': '60%',
			'61/100': '61%',
			'62/100': '62%',
			'63/100': '63%',
			'64/100': '64%',
			'65/100': '65%',
			'66/100': '66%',
			'67/100': '67%',
			'68/100': '68%',
			'69/100': '69%',
			'70/100': '70%',
			'71/100': '71%',
			'72/100': '72%',
			'73/100': '73%',
			'74/100': '74%',
			'75/100': '75%',
			'76/100': '76%',
			'77/100': '77%',
			'78/100': '78%',
			'79/100': '79%',
			'80/100': '80%',
			'81/100': '81%',
			'82/100': '82%',
			'83/100': '83%',
			'84/100': '84%',
			'85/100': '85%',
			'86/100': '86%',
			'87/100': '87%',
			'88/100': '88%',
			'89/100': '89%',
			'90/100': '90%',
			'91/100': '91%',
			'92/100': '92%',
			'93/100': '93%',
			'94/100': '94%',
			'95/100': '95%',
			'96/100': '96%',
			'97/100': '97%',
			'98/100': '98%',
			'99/100': '99%',
			'100/100': '100%',
		}),
		minHeight: {
			0: '0px',
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		},
		minWidth: {
			0: '0px',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			0: '0',
			5: '0.05',
			10: '0.1',
			20: '0.2',
			25: '0.25',
			30: '0.3',
			40: '0.4',
			50: '0.5',
			60: '0.6',
			70: '0.7',
			75: '0.75',
			80: '0.8',
			90: '0.9',
			95: '0.95',
			100: '1',
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		padding: ({ theme }) => theme('spacing'),
		placeholderColor: ({ theme }) => theme('colors'),
		placeholderOpacity: ({ theme }) => theme('opacity'),
		outlineColor: ({ theme }) => theme('colors'),
		outlineOffset: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		outlineWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		ringColor: ({ theme }) => ({
			DEFAULT: theme('colors.blue.500', '#3b82f6'),
			...theme('colors'),
		}),
		ringOffsetColor: ({ theme }) => theme('colors'),
		ringOffsetWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		ringOpacity: ({ theme }) => ({
			DEFAULT: '0.5',
			...theme('opacity'),
		}),
		ringWidth: {
			DEFAULT: '3px',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		rotate: {
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
			45: '45deg',
			90: '90deg',
			180: '180deg',
		},
		saturate: {
			0: '0',
			50: '.5',
			100: '1',
			150: '1.5',
			200: '2',
		},
		scale: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
		},
		scrollMargin: ({ theme }) => ({
			...theme('spacing'),
		}),
		scrollPadding: ({ theme }) => theme('spacing'),
		sepia: {
			0: '0',
			DEFAULT: '100%',
		},
		skew: {
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
		},
		space: ({ theme }) => ({
			...theme('spacing'),
		}),
		stroke: ({ theme }) => theme('colors'),
		strokeWidth: {
			0: '0',
			1: '1',
			2: '2',
		},
		textColor: ({ theme }) => theme('colors'),
		textDecorationColor: ({ theme }) => theme('colors'),
		textDecorationThickness: {
			auto: 'auto',
			'from-font': 'from-font',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		textUnderlineOffset: {
			auto: 'auto',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		textIndent: ({ theme }) => ({
			...theme('spacing'),
		}),
		textOpacity: ({ theme }) => theme('opacity'),
		transformOrigin: {
			center: 'center',
			top: 'top',
			'top-right': 'top right',
			right: 'right',
			'bottom-right': 'bottom right',
			bottom: 'bottom',
			'bottom-left': 'bottom left',
			left: 'left',
			'top-left': 'top left',
		},
		transitionDelay: {
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms',
		},
		transitionDuration: {
			DEFAULT: '150ms',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms',
		},
		transitionProperty: {
			none: 'none',
			all: 'all',
			DEFAULT:
				'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform',
		},
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			linear: 'linear',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},
		translate: ({ theme }) => ({
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
		}),
		width: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			'1/100': '1%',
			'2/100': '2%',
			'3/100': '3%',
			'4/100': '4%',
			'5/100': '5%',
			'6/100': '6%',
			'7/100': '7%',
			'8/100': '8%',
			'9/100': '9%',
			'10/100': '10%',
			'11/100': '11%',
			'12/100': '12%',
			'13/100': '13%',
			'14/100': '14%',
			'15/100': '15%',
			'16/100': '16%',
			'17/100': '17%',
			'18/100': '18%',
			'19/100': '19%',
			'20/100': '20%',
			'21/100': '21%',
			'22/100': '22%',
			'23/100': '23%',
			'24/100': '24%',
			'25/100': '25%',
			'26/100': '26%',
			'27/100': '27%',
			'28/100': '28%',
			'29/100': '29%',
			'30/100': '30%',
			'31/100': '31%',
			'32/100': '32%',
			'33/100': '33%',
			'34/100': '34%',
			'35/100': '35%',
			'36/100': '36%',
			'37/100': '37%',
			'38/100': '38%',
			'39/100': '39%',
			'40/100': '40%',
			'41/100': '41%',
			'42/100': '42%',
			'43/100': '43%',
			'44/100': '44%',
			'45/100': '45%',
			'46/100': '46%',
			'47/100': '47%',
			'48/100': '48%',
			'49/100': '49%',
			'50/100': '50%',
			'51/100': '51%',
			'52/100': '52%',
			'53/100': '53%',
			'54/100': '54%',
			'55/100': '55%',
			'56/100': '56%',
			'57/100': '57%',
			'58/100': '58%',
			'59/100': '59%',
			'60/100': '60%',
			'61/100': '61%',
			'62/100': '62%',
			'63/100': '63%',
			'64/100': '64%',
			'65/100': '65%',
			'66/100': '66%',
			'67/100': '67%',
			'68/100': '68%',
			'69/100': '69%',
			'70/100': '70%',
			'71/100': '71%',
			'72/100': '72%',
			'73/100': '73%',
			'74/100': '74%',
			'75/100': '75%',
			'76/100': '76%',
			'77/100': '77%',
			'78/100': '78%',
			'79/100': '79%',
			'80/100': '80%',
			'81/100': '81%',
			'82/100': '82%',
			'83/100': '83%',
			'84/100': '84%',
			'85/100': '85%',
			'86/100': '86%',
			'87/100': '87%',
			'88/100': '88%',
			'89/100': '89%',
			'90/100': '90%',
			'91/100': '91%',
			'92/100': '92%',
			'93/100': '93%',
			'94/100': '94%',
			'95/100': '95%',
			'96/100': '96%',
			'97/100': '97%',
			'98/100': '98%',
			'99/100': '99%',
		}),
		willChange: {
			auto: 'auto',
			scroll: 'scroll-position',
			contents: 'contents',
			transform: 'transform',
		},
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
		},
	},
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'empty',
		'read-only',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled',
	],
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents([buttons, links, height, width, cards]);
		}),
	],
};
