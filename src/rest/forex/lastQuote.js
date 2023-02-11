"use strict";
// CF: https://polygon.io/docs/forex/get_v1_last_quote_currencies__from___to
exports.__esModule = true;
exports.lastQuote = void 0;
var request_1 = require("../transport/request");
var lastQuote = function (apiKey, apiBase, from, to) {
    return (0, request_1.get)("/v1/last_quote/currencies/".concat(from, "/").concat(to), apiKey, apiBase);
};
exports.lastQuote = lastQuote;
