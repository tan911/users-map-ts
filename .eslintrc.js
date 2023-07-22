module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint-config-airbnb-base', // or `airbnb-base`, you can omit `eslint-config
        'plugin:prettier/recommended',
    ]
}