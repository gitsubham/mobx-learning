module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        React: true,
        expect: true,
        __DEV__: true,
        sinon: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'arrow-spacing': 'warn',
        'block-spacing': 'warn',
        'comma-dangle': 'off',
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'curly': 'warn',
        'dot-notation': 'warn',
        'eqeqeq': 'warn',
        'eol-last': 'warn',
        'indent': ['warn', 4, {SwitchCase: 1}],
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'no-console': 'off',
        'no-mixed-spaces-and-tabs':'warn',
        'no-param-reassign': 'warn',
        'no-tabs': 'warn',
        'no-trailing-spaces': 'warn',
        'no-underscore-dangle': 'warn',
        'no-whitespace-before-property': 'warn',
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'semi-spacing': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': 'warn',
        'no-unused-vars': 'warn',
        'react/display-name': 'off',
        'react/prop-types': 'off'
    }
};
