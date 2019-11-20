module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        "airbnb-base",
        "plugin:vue/recommended",
        "eslint:recommended",
        "prettier/vue",
        "plugin:prettier/recommended"
    ],
    plugins: [
        'babel',
        'import',
        'prettier',
    ],
    rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        'linebreak-style': 'off', // Неправильно работает в Windows.

        'arrow-parens': 'off', // Несовместимо с prettier
        'object-curly-newline': 'off', // Несовместимо с prettier
        'no-mixed-operators': 'off', // Несовместимо с prettier
        'arrow-body-style': 'off', // Это - не наш стиль?
        'function-paren-newline': 'off', // Несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Несовместимо с prettier

        'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb позволяет некоторые пограничные случаи
        'no-console': 'error', // airbnb использует предупреждение
        'no-alert': 'error', // airbnb использует предупреждение

        'no-param-reassign': 'off', // Это - не наш стиль?
        "radix": "off", // parseInt, parseFloat и radix выключены. Мне это не нравится.

        'prefer-destructuring': 'off',

        'prettier/prettier': ['error'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js','.jsx','.vue']
            }
        },
    },
    globals: {
        $nuxt: true
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};