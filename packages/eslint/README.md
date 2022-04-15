# ESLint

## Extending ESLint
If you want to use this ESLint configuration in a React project, you can install it with the following steps.

First, install this package by running `npm i @frntnd/eslint -D` .
Then install ESLint and the necessary plugins. Just copy this line and paste in your terminal.
```
npm install --save-dev eslint
```
Then create a file named .eslintrc.js with following contents in the root folder of your project:
```javascript
module.exports = {
  extends: ['@frntnd/eslint'], 
}
```

## Ejecting from ESLint
You can add or overwrite the ESLint rules if you want to.
But if you totally wish to eject from `@frntnd/eslint` run `npx frntnd-eslint eject`

## Autoformatting on save in VSCode
To turn on autoformatting on save in VSCode follow the following guidelines:

- Download the [VSCode ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and following the instructions.

- Make sure to change your settings.json in VSCode and add the following lines in the json:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

- Make sure Prettier is turned off and eslint is set as formatter!
