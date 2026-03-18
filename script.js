prompt = require('prompt-sync') ();

// 1. Definição das constantes do frete
const TAXA_FIXA = 20.00;
const VALOR_POR_KM = 1.50;
const TAXA_EXTRA = 15.00;
const LIMITE_DISTANCIA = 100;

// 2. Coleta de dados via prompt
let distancia = prompt("Digite a distância em km até o cliente:");
let entregaUrgente = prompt("A entrega é considerada de risco ou urgente? (sim/nao)");

// 3. Tratamento dos dados
// Converte a distância para número e normaliza a resposta
let km = parseFloat(distancia);
entregaUrgente = entregaUrgente.toLowerCase().trim();

// 4. Cálculo do valor base do frete
let valorBase = TAXA_FIXA + (km * VALOR_POR_KM);

// 5. Estrutura IF e ELSE com operadores lógicos
if (km > LIMITE_DISTANCIA || entregaUrgente === "sim") {
    // Adiciona taxa extra se distância > 100km OU entrega for urgente
    let valorFinal = valorBase + TAXA_EXTRA;
    
    // Exibe o custo total no console
    console.log(`Custo total do frete: R$ ${valorFinal.toFixed(2).replace('.', ',')}`);
} else {
    // Valor sem taxa extra
    let valorFinal = valorBase;
    
    // Exibe o custo total no console
    console.log(`Custo total do frete: R$ ${valorFinal.toFixed(2).replace('.', ',')}`);
}