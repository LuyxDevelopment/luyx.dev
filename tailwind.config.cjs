/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'deep-carmine-pink': '#f23041',
			'bean-red': '#f25c69',
			'egg-sour': '#fff3dc',
			'reddish-orange': '#f25922',
			'basket-ball-orange': '#f28963',
		},
		extend: {
			keyframes: {
				translate_top: {
					'0%': {
						translate: '0px -20px',
					},
					'100%': {
						transform: '0px',
					},
				},
			},
			animation: {
				translate_top: 'translate_top 1s ease-in-out',
				pulse_fast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite', 'stop': 'none',
			},
		},
	},
};
