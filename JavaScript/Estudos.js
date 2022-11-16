const cliente = {
    nome:"jeferson",
    idade:21,
    cpf:"12345",
    email:"kjeehcs@gmail.com"
}
/*
//Exibindo manualmente
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. Meu e-mail é ${cliente.email}. Do CPF ${cliente.cpf.substring(0,3)} `)
console.log("----------- // -----------");

//Exibindo por indice
const chaves =  ["nome", "idade", "cpf", "email"];
console.log(cliente[chaves[3]]);
console.log("----------- // -----------");

//Exibindo dados utilizando forEach
chaves.forEach(info=>console.log(cliente[info]));*/


console.log(cliente);   
// Adicionando novo objeto na classe
cliente.fone = "98332454";

console.log(cliente);






