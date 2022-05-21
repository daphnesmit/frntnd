# ESLint

## Extending ESLint
If you want to use this ESLint configuration in a React project, you can install it with the following steps.

Install the package and ESLint. Just copy this line and paste in your terminal:

```
npm i @frntnd/eslint eslint -D
```

or 

```
yarn add @frntnd/eslint eslint -D
```

Then create a file named .eslintrc.js with following contents in the root folder of your project:
```javascript
module.exports = {
  extends: ['./node_modules/@frntnd/eslint'], 
}
```

You can add linting scripts to your package.json scripts like this:

```json
"scripts": {
  "lint": "eslint src --ext .ts,.tsx,.js,.jsx",
  "lint-fix": "eslint --fix src --ext .ts,.tsx,.js,.jsx"
}
``` 

and then run:
```
npm run lint or npm run lint-fix
```
or
```
yarn lint or yarn lint-fix
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
