const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: "./build",
        path: path.resolve(__dirname, "./build"),
    },
};