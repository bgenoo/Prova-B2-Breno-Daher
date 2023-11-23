function analisarIMCs(listaIMCs){
    var terminou = false
    var totalPessoas = 0
    var somaIMCs = 0
    var maiorIMC = 0
    
while(terminou == false){
    totalPessoas++;
    var peso = parseFloat(prompt('Digite o seu peso.'))
    var altura = parseFloat(prompt('Digite a sua altura.'))
    var imc = peso / altura ** 2;
    somaIMCs += imc
    alert('Seu IMC é: '+ imc);

     if (imc > maiorIMC) {
            maiorIMC = imc;
        }

    var media_imc = (somaIMCs / totalPessoas).toFixed(2)

    var desejaTerminar = prompt('Deseja terminar? (S)im ou (N)ão')
    if(desejaTerminar == 'S' || desejaTerminar == 's'){
        terminou = true
        alert(`Programa finalizado.
        Usuário de maior IMC: ${maiorIMC}
        Quantidade de pessoas avaliadas: ${totalPessoas}
        Média dos IMCs: ${media_imc}
        `)
    }
   }
} analisarIMCs()
