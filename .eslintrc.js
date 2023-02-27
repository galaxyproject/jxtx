module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:mdx/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {},
    settings: {
        "mdx/code-blocks": true,
        "mdx/language-mapper": {},
    },
    overrides: [
        {
            files: ["*.mdx"],
            rules: {
                "react/jsx-no-undef": "off",
                "no-undef": "warn"
            },
        }
    ],
};
