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

     if (imc < 18.5){
        alert('Abaixo do peso normal.');
    }
        else if (imc >= 18.5 && imc < 25){
            alert('Peso normal');
        }
            else if (imc >= 25 && imc < 30){
            alert('Excesso de peso');
            }
                else if (imc >= 30 && imc < 35){
            alert('Obesidade Classe I');
                }
                    else if (imc >= 35 && imc < 40){
            alert('Obesidade Classe II');
                    }
                        else if (imc >= 40){
            alert('Obesidade Classe III');
            }
    
    somaIMCs += imc
    alert('Seu IMC é: '+ imc.toFixed(2));


     if (imc > maiorIMC) {
            maiorIMC = imc;
        }

    var media_imc = (somaIMCs / totalPessoas).toFixed(2)

    var desejaTerminar = prompt('Deseja terminar? (S)im ou (N)ão')
    if(desejaTerminar == 'S' || desejaTerminar == 's'){
        terminou = true
        alert(`Programa finalizado.
        Usuário de maior IMC: ${maiorIMC.toFixed(2)}
        Quantidade de pessoas avaliadas: ${totalPessoas}
        Média dos IMCs: ${media_imc}
        `)
    }
   }
} analisarIMCs()
