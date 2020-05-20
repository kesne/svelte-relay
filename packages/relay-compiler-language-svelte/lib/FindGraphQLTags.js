"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.createFinder = void 0;
var svelte = __importStar(require("svelte/compiler"));
// TODO: This should also support .ts files, just for the sake of it:
function createFinder(finder) {
    return function (text, filePath) {
        // NOTE: This is a hack, but it's the only way I can get the raw script tag content from Svelte:
        var jsSource;
        svelte.preprocess(text, {
            script: function (_a) {
                var content = _a.content, attributes = _a.attributes, filename = _a.filename;
                jsSource = content;
                return { code: content };
            }
        });
        return finder(jsSource, filePath);
    };
}
exports.createFinder = createFinder;
