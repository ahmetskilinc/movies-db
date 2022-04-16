module.exports = {
	content: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			width: {
				cs: "1280px",
				full_width_margin: "100vh - 16px",
			},
			maxWidth: {
				cs: "1280px",
			},
			margin: {
				cs: "16px",
			},
			padding: {
				cs: "16px",
			},
		},
	},
	plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
	daisyui: {
		themes: ["business"],
	},
};
