let produtosExtra = new Array(5);
// declarando um array vazio de 5 posições

// let produtosExtra = [];
// declarando um Array vazio sem posições fixas

let mensagem


// alert(produtosExtra.length);
// serve para exibir a quantidade de espaços do meu array
// alert(produtosExtra);

for (let index = 0; index < produtosExtra.length; index++) {    
    produtosExtra[index] = prompt(`Digite o ${index + 1} nome do produto`);
    // index é o contador
    
}

mensagem="Seguem os produtos digitados"

for (let index = 0; index < produtosExtra.length; index++) {
    mensagem = `${mensagem} ${produtosExtra[index]} \n`;
    
}

alert(mensagem);



