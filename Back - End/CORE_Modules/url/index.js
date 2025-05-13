const url = require('url')

const address = 'http://www.meusite.com.br/catalog?produtos=cadeira'
const parseUrl = new url.URL(address)

console.log(parsedURL.host)