"use strict";
// CF: https://polygon.io/docs/options/get_v3_reference_options_contracts
exports.__esModule = true;
exports.optionsContracts = void 0;
var request_1 = require("../transport/request");
var optionsContracts = function (apiKey, apiBase, query, headers) {
    return (0, request_1.get)("/v3/reference/options/contracts", apiKey, apiBase, query, headers);
};
exports.optionsContracts = optionsContracts;
