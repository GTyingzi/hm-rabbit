module.exports = {
    root: true,
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
    },
    "rules": {
        "vue/multi-word-component-names": 0, // 不强制组件命名
    }
}