import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const cucumberCli = resolve(
  projectRoot,
  'node_modules',
  '@cucumber',
  'cucumber',
  'bin',
  'cucumber.js',
);

const cucumberArguments = [
  '--import',
  'tsx',
  cucumberCli,
  '--import',
  'tests/fixtures/**/*.ts',
  '--import',
  'tests/step-definitions/**/*.ts',
  'features/home-shopping-navigation.feature',
  '--format',
  'progress',
  '--format',
  'json:reports/home-shopping-navigation.json',
  '--format',
  'html:reports/home-shopping-navigation.html',
];

const testRun = spawnSync(process.execPath, cucumberArguments, {
  cwd: projectRoot,
  stdio: 'inherit',
});

if (testRun.error) {
  throw testRun.error;
}

process.exitCode = testRun.status ?? 1;
