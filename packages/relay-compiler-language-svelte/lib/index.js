"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var relay_compiler_language_typescript_1 = __importDefault(require("relay-compiler-language-typescript"));
var FindGraphQLTags_1 = require("./FindGraphQLTags");
function plugin() {
    var tsPlugin = relay_compiler_language_typescript_1["default"]();
    return {
        inputExtensions: ['svelte'],
        outputExtension: 'ts',
        findGraphQLTags: FindGraphQLTags_1.createFinder(tsPlugin.findGraphQLTags),
        formatModule: tsPlugin.formatModule,
        typeGenerator: tsPlugin.typeGenerator
    };
}
exports["default"] = plugin;
