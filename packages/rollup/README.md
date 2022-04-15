# Rollup

## Extending Rollup config
If you want to use this Rollup configuration in a React project, you can install it with the following steps.

First, install this package by running `npm i @frntnd/rollup -D` .
Then install Rollup as a peer dependency. Just copy this line and paste in your terminal.
```
npm install --save-dev rollup
```

Then create a file named rollup.config.js with following contents in the root folder of your project:
```javascript
// rollup.config.js
import createDefaultRollupConfig from '@frntnd/rollup'

import pkg from './package.json';

export default {
  ...createDefaultRollupConfig(pkg),
  // Your custom Rollup config here...
}
```

The default rollup config uses fields like source, main and module from your package.json
The package.json should therefore look something like this:
```json
{
  // ...other package.json props,
  "source": "src/index.ts",
  "types": "dist/types/index.d.ts",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
}
```