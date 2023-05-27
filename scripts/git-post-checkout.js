#!/usr/bin/env node
import {execSync} from "node:child_process";
import {basename} from "node:path";
import {argv, exit} from "node:process";
import {parseArgs} from "node:util";
import isCI from "is-ci";
import {errorBox, heading, log} from "./helpers.js";

if (isCI) {
	exit(0);
}

const {positionals} = parseArgs({allowPositionals: true});
const numberOfArguments = positionals.length;

const scriptBasename = basename(argv[1]);
const scriptArity = 3;

const badScriptArityMessage = `
${errorBox(
	`ArityError: ${scriptBasename} requires at least ${scriptArity} arguments, but only ${numberOfArguments} were passed.`,
)}

Did you run this script manually?
`;

if (numberOfArguments !== scriptArity) {
	log(badScriptArityMessage);

	exit(0);
}

const branchCheckoutMessage = `
${heading("Branch checkout detected")}

It might be a good idea to run:
- npm install
`;

const checkout = parseGitPostCheckoutParams(positionals);

if (checkout.wasBranchCheckout) {
	const branchName = execSync("git branch --show-current").toString().trim();

	if (branchName === "main" || branchName === "master") {
		exit(0);
	}

	log(branchCheckoutMessage);
}

function parseGitPostCheckoutParams(gitPostCheckoutParams) {
	const [oldHEAD, newHEAD, wasBranchCheckout] = gitPostCheckoutParams;

	return {
		oldHEAD,
		newHEAD,
		wasBranchCheckout: Boolean(Number(wasBranchCheckout)),
	};
}
