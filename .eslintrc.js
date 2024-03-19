module.exports = {
    plugins: ['@typescript-eslint', '@stylistic/ts'],
    parser: "@typescript-eslint/parser",
    rules: {
        "@stylistic/ts/comma-dangle": ["error", {
            arrays: "always-multiline"
        }],
        "@stylistic/ts/semi": ["error", "always"],
        "sort-imports": ["error"]
    }
};
