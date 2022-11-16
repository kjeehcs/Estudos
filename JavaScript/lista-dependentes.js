const cliente = {
    nome:"jeferson",
    idade:21,
    cpf:"12345",
    email:"kjeehcs@gmail.com",
    dependentes: [{
        nome: "Paulina",
        parentesco: "Cônjuge",
        dataNasc: "18/05/2002"
    }]

}

//cliente.dependentes.nome = "Paulina Santos";

cliente.dependentes.push({
    nome: "Laura Santos",
    parentesco: "Filha",
    dataNasc: "28/07/2031"
})

//console.log(cliente);


// Array Dependentes

const filhaMaisNova = cliente.dependentes.filter(
    dependente => dependente.dataNasc === "28/07/2031");

console.log(filhaMaisNova[1].nome);
