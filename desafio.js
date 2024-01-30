// Variáveis iniciais
let name = "Mickey Mouse"
let exp = 7005

// Estrutura de decisão
let ranking = ""

if(exp<= 1000){
    ranking = "ferro"
}else if(exp>= 1001 && exp<=2000)
{ranking = "bronze"
}else if(exp>= 2001 && exp<=5000)
{ranking = "prata"
}else if(exp>= 5001 && exp<=6000)
{ranking = "ouro"
}else if(exp>= 6001 && exp<=7000)
{ranking = "platina"
}else if(exp>= 7001 && exp<=8000)
{ranking = "diamante"
}else if(exp>= 8001 && exp<=9000)
{ranking = "ascendente"
}else if(exp>= 9001 && exp<=10000)
{ranking = "imortal"
}else{ranking = "radiante"}

// Resultado(Saída)
     console.log("O herói de nome " + name + ", tem a exp de " + exp + " e se enquadra no ranking " + ranking + ".")