const eslintConfig = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort', 'testing-library'],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-dynamic-delete': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'with', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_|req|res|next|err|ctx|args|context|info',
        ignoreRestSiblings: true,
      },
    ],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    camelcase: 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'array-callback-return': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { code: 120 }],
    indent: 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',

    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'react/prop-types': 'off',
    'react/display-name': 'off',
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': [2, 'always'],
    'react/button-has-type': [2],
    'react/no-array-index-key': [2],
    'react/no-invalid-html-attribute': [2],
    'react/no-this-in-sfc': [2],
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/void-dom-elements-no-children': [2],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
    'react/jsx-curly-newline': [2, 'consistent'],
    'react/jsx-curly-spacing': [2, { when: 'never', allowMultiline: false, children: true }],
    'react/boolean-prop-naming': [2, {
      validateNested: true,
      rule: '^(is|has|should|can|did|will)[A-Z]([A-Za-z0-9]?)+',
    }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-constructed-context-values': [2],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-pascal-case': [2],
    'react/jsx-sort-props': [2, {
      callbacksLast: true,
      shorthandFirst: true,
      ignoreCase: true,
      reservedFirst: true,
    }],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-wrap-multilines': [2, { declaration: 'parens-new-line' }],
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
        'testing-library/no-unnecessary-act': 'off',
      },
    },
  ],

  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

module.exports = eslintConfig;
