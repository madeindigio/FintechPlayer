import * as ApiBuilder from 'claudia-api-builder';
const api = new ApiBuilder();
api.get('/', () => 'Hello world');
api.get('/greet', (request : any) => {
    return `Hello ${request.queryString.name}`;
});
export = api;