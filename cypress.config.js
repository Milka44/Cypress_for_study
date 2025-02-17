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
	responseTimeout: 20000,
	e2e: {
			supportFile: false,
			retries: {
			runMode: 1,
			openMode: 1,
			// implement node event listeners here
		}},
	env: {
		baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
		email: 'neofortest22@gm.com',
    	password: 'Neofortest221'
	},
	
  	reporter: "cypress-multi-reporters",
  	reporterOptions: {
    reporterEnabled: "mochawesome,cypress-html-reporter",
    mochawesomeReporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    quiet: true},
}
});
