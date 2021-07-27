/* Variaveis de cada personagem */
var vidas = 3
var portal = "Rick"
var idade = 13
var maeDomorty = "Beth"
var squanchy = "Gato"
var goldenfold = "Matemática"
var bundaCagada = 4

/* Alerta / Info de restrição de conteiudo (CONTEUDO) */
alert('Este jogo é para maiores de 18 anos')

/* Laço de repetição (WHILE) */
while (vidas > 0) {
    var selectR = prompt("Qual personagem tem uma arma de portal ? ")

    if (portal == selectR) {
        alert('Acertou, Rick usa uma arma de portal para entrar em outras dimensões')
        break
    } else if (selectR != portal) {
        alert('[ERROU], Dica: O personagem é um cientista. ')
        vidas = vidas - 1
    } else if (selectR != portal) {
        alert('[ERROU], Dica: O personagem usa um bordão chamado wuabba lubba dub dub. ')
        vidas = vidas - 1
    }
} while (vidas > 0) {
    var selectM = Number(prompt("Quantos anos tem o Morty"))
    
    if (idade == selectM) {
        alert('Acertou, Morty tem 13 anos')
        break
    } else if (selectM > idade) {
        alert('[ERROU], a idade é menor')
        vidas = vidas - 1
    } else if (selectM < idade) {
        alert('[ERROU], idade maior')
        vidas = vidas - 1
    }
} while (vidas > 0) {
    var selectB = prompt("Qual o nome da mãe do Morty ?")

    if (selectB == maeDomorty) {
        alert('Acertou, Beth Smith é a mãe do Morty e uma cirugiã de cavalos')
        break
    } else if (maeDomorty != selectB) {
        alert('[ERROU], Dica: Bebe vinho quando tem problemas ou está triste ')
        vidas = vidas - 1
    } else if (maeDomorty != selectB) {
        alert('[ERROU], Dica: Ela tem o cabelo loiro')
        vidas = vidas - 1
    }
} while (vidas > 0) {
    var selectS = prompt("Que tipo de animal é o Squanchy ?")

    if (selectS == squanchy) {
        alert("Acertou, o Squanchy é ")
        break
    } else if (squanchy != selectS) {
        alert("[ERROU], Dica: ele é laranja e segura um objeto")
        vidas = vidas - 1
    } else if (squanchy != selectS) {
        alert("[ERROU] sua squanchy dica é: Ele só aparece em festas para squanchyar")
        vidas = vidas - 1
    }
} while (vidas > 0) {
    var selectG = prompt("O personagem Goldenfold é professor de qual materia ? ")

    if (selectG == goldenfold) {
        alert("Acertou, o Sr Goldenfold é professor de " + goldenfold + "do Morty")
        break
    } else if (goldenfold != selectG) {
        alert("[ERROU], Dica: Ele usa bigode")
        vidas = vidas - 1
    } else if (goldenfold = !selectG) {
        alert("Ele usa números em sua aula")
        vidas = vidas - 1
    }
} while (vidas > 0) {
    var selectBun = prompt("Em qual episódio da segunda temporada o Sr. Bunda Cagada aparece ?")

    if (selectBun == 4) {
        alert("Acertou, Sr. Bunda Cagada aparece no 4ª episódio")
        break
    } else if (selectBun > 4) {
        alert("[ERROU], o número é menor")
        vidas = vidas - 1
    } else if (selectBun < 4) {
        alert("[ERROU], o número é maior ")
        vidas = vidas - 1 
    }
}
