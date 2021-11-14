module.exports = {
	pipeline: {
		build: ["^build"],
		test: ["build"],
		lint: ["build"],
		"static-check": ["build"],
		start: ["build"],
		deploy: ["build"],
	},
	npmClient: "pnpm",
};
