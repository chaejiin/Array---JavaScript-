// criando array de 21 posições
let nomes = new Array(21);
let idades = new Array(21);
let cpfs = new Array(21);

nomes[0] = "Juquinha";
idades[0] = 40;
cpfs[0] = "77788899988";


const pessoa = { nome: "Juquinha", idade: 40, cpf: "77788899988" } // criando um objeto
const pessoas = new Array(21); //criado array para guardar pessoas


const arrayPessoas = [
    {
        nome: "Juquinha",
        idade: 40,
        cpf: "77788899988"
    },
    {
        nome: "Mariazinha",
        idade: 28,
        cpf: "77788899900"
    }
];

for (let index = 0; index < arrayPessoas.length; index++) {
    alert(`
Nome: ${arrayPessoas[index].nome}
Idade: ${arrayPessoas[index].idade}
CPF: ${arrayPessoas[index].cpf}`);
}

// exibindo informações do objeto
// pessoas.nome = prompt("Digite o nome da pessoa:");
// pessoas.idade = prompt("Digite a idade da pessoa:");
// pessoas.cpf = prompt("Digite o cpf da pessoa:");

// alert(`Nome: ${pessoas.nome}
// Idade: ${pessoas.idade}
// CPF: ${pessoas.cpf} `);
