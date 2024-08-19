// Importa o módulo 'url', que fornece funcionalidades para lidar com URLs
const url = require('url');

// Define uma URL de exemplo para análise
const address = 'https://www.mywebsite.com/catalog?products=chair'; 

// Usa o construtor URL para criar um objeto URL a partir da string de URL fornecida
const parsedUrl = new url.URL(address); 

// Exibe o host da URL, que é a parte do domínio da URL
console.log(parsedUrl.host); 
// Saída esperada: 'www.mywebsite.com'

// Exibe o caminho da URL, que é a parte após o domínio
console.log(parsedUrl.pathname); 
// Saída esperada: '/catalog'

// Exibe a string de consulta da URL, que inclui os parâmetros após o ponto de interrogação
console.log(parsedUrl.search); 
// Saída esperada: '?products=chair'

// Exibe o objeto `searchParams`, que é uma instância da interface `URLSearchParams`
// e fornece métodos para manipular os parâmetros de consulta
console.log(parsedUrl.searchParams); 
// Saída esperada: URLSearchParams { 'products' => 'chair' }

// Obtém o valor do parâmetro de consulta 'products' e exibe-o
console.log(parsedUrl.searchParams.get('products')); 
// Saída esperada: 'chair'
