#!/usr/bin/env node
import {exit} from "node:process";
import chalk from "chalk";
import checkEngines from "check-engine";
import {readPackage} from "read-pkg";
import {errorBox, log} from "./helpers.js";

const pkg = await readPackage();

const checkEnginesResult = await checkEngines();
const {packages} = checkEnginesResult;

const errorPackages = packages.filter(
	(checkEnginePackage) => checkEnginePackage.type === "error",
);

const badEnginesMessage = `
${errorBox(`BadEngineError: Unsupported engine detected!`)}

${errorPackages
	.map((checkEnginePackage) => {
		const {name, expectedVersion, foundVersion} = checkEnginePackage;

		return `- ${chalk.blackBright(pkg.name)} requires ${chalk.bold(
			name,
		)} ${chalk.greenBright(expectedVersion)}, but ${chalk.redBright(
			foundVersion,
		)} was found.`;
	})
	.join("\n")}

It might be a good idea to run:
- nvm use
`;

if (errorPackages.length > 0) {
	log(badEnginesMessage);

	exit(1);
}
