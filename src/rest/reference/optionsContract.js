"use strict";
// CF: https://polygon.io/docs/options/get_v3_reference_options_contracts__options_ticker
exports.__esModule = true;
exports.optionsContract = void 0;
var request_1 = require("../transport/request");
var optionsContract = function (apiKey, apiBase, optionsTicker, query, headers) {
    return (0, request_1.get)("/v3/reference/options/contracts/".concat(optionsTicker), apiKey, apiBase, query, headers);
};
exports.optionsContract = optionsContract;
