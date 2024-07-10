const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "vhmazt",
	watchForFileChanges: false,
	defaultCommandTimeout: 20000,
	viewportWidth: 1920,
	viewportHeight: 1080,
	numTestsKeptInMemory: 10,
	blockHosts: ["*.yandex.ru"],
	chromeWebSecurity: false,
	//screnshotsFolder: 'screens',
	//videosFolder: 'video',
	responseTimeout: 60000,
	e2e: {
		supportFile: false,
			retries: {
			runMode: 1,
			openMode: 1,
			// implement node event listeners here
		},

		//baseUrl: ''
	},
});
