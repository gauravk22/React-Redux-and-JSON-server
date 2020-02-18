module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
	"react/jsx-filename-extension":"off",
	"no-undef":"warn",
	"no-console": ["error", { allow: ["warn", "error"] }],
	"react/require-default-props":"off",
	"react/jsx-props-no-spreading":"off",
	"react/jsx-pascal-case":"warn"
  },
};
