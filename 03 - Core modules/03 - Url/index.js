const url = require('url'); // English: Import the 'url' module to work with URLs in Node.js.
// Português: Importe o módulo 'url' para trabalhar com URLs no Node.js.

const address = 'https://www.mywebsite.com/catalog?products=chair'; 
// English: Define a constant 'address' with the URL to be parsed.
// Português: Defina uma constante 'address' com a URL a ser analisada.

const parsedUrl = new url.URL(address); 
// English: Create a new URL object by parsing the 'address' string.
// Português: Crie um novo objeto URL analisando a string 'address'.

console.log(parsedUrl.host); 
// English: Print the host of the parsed URL (e.g., 'www.mywebsite.com').
// Português: Exiba o host da URL analisada (por exemplo, 'www.mywebsite.com').

console.log(parsedUrl.pathname); 
// English: Print the pathname of the parsed URL (e.g., '/catalog').
// Português: Exiba o pathname da URL analisada (por exemplo, '/catalog').

console.log(parsedUrl.search); 
// English: Print the query string of the parsed URL (e.g., '?products=chair').
// Português: Exiba a string de consulta da URL analisada (por exemplo, '?products=chair').

console.log(parsedUrl.searchParams); 
// English: Print the URLSearchParams object containing the query parameters.
// Português: Exiba o objeto URLSearchParams contendo os parâmetros da consulta.

console.log(parsedUrl.searchParams.get('products')); 
// English: Print the value of the 'products' query parameter (e.g., 'chair').
// Português: Exiba o valor do parâmetro de consulta 'products' (por exemplo, 'chair').
