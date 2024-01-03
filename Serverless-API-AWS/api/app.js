"use strict";
const ApiBuilder = require("claudia-api-builder");
const api = new ApiBuilder();
api.get('/', () => 'Hello world');
api.get('/greet', (request) => {
    return `Hello ${request.queryString.name}`;
});
module.exports = api;
