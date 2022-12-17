let idade, nome, idade2
nome = prompt ('qual o seu nome?')
idade= prompt ('em que ano você nasceu?')
function caucular(ano, idade){
    return ano - idade
}
idade2= caucular(ano, idade)
ano= 2022;
final=`Ola seu nome é ${nome} e você tem ${idade2}` 
alert(final)