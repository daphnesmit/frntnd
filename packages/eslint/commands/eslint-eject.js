const { Confirm } = require('enquirer');
const fs = require('fs');
const execa = require('execa');
const path = require('path');

async function eslintEject() {
  const confirm = new Confirm({
    name: 'confirm',
    message: 'Are you sure you want to eject? This can\'t be undone',
  });

  if (!(await confirm.run())) {
    return;
  }

  const contents = fs.readFileSync(
    path.join(__dirname, '../src/index.js'),
  );
  const eslintPath = path.join(process.cwd(), '.eslintrc.js');
  fs.writeFileSync(eslintPath, contents);

  execa('npm', [
    'i',
    'eslint',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-standard',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-standard',
    'eslint-plugin-testing-library',
    '-D',
    // @ts-ignore
  ]).stdout.pipe(process.stdout);

  console.log('ESLint ejected');
}

module.exports = {
  eslintEject,
};
