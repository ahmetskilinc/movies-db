module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			width: {
				cs: "1280px",
				full_width_margin: "100vh - 16px",
			},
		},
	},
	plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
	daisyui: {
		themes: ["dark"],
	},
};
