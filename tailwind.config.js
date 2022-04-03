module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			width: {
				cs: "1080px",
			},
		},
	},
	plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
	daisyui: {
		themes: ["dark"],
	},
};
