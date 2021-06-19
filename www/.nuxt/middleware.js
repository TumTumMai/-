const middleware = {}

middleware['get-auth'] = require('..\\middleware\\get-auth.js')
middleware['get-auth'] = middleware['get-auth'].default || middleware['get-auth']

export default middleware
