const { Launcher } = require('@wdio/cli');

const PATH_TO_CONFIG = './wdio.conf.js';

(async () => {
	try {
		const wdio = new Launcher(PATH_TO_CONFIG, {
			capabilities: [{ browserName: 'chrome' }],
		});
		exitCode = (await wdio.run()) || 1;
	} catch (error) {
		console.log(
			'Launcher failed to start the test\n' +
				(error instanceof Error ? error.stack : error),
		);
		process.exit(1);
	}
})();
