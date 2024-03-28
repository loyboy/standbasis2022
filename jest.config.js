module.exports = {
    transform: {
        // process `*.vue` files with `vue-jest` this is the most important thing to transform your VUE code!
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "babel-jest",
    },
}