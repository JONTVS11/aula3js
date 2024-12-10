/*var a = 2 //number
let b = "Claudio" //String
const ativo = true //boolean
r= a + b
if (ativo){
    console.log("O aluno com acesso liberado!")
} else{
    console.log("Aluno com acesso Bloqueado!")
}

/*fortemente tipada é quando vc já diz para variavel qual o tipo dela*/

/*console.log("A soma de a (",a, ")  + b (",b, ") =", r)*/

var nome = "Roberto" // Global
//let sobrenome = " "
function colocaSobrenome() {
    var sobrenome = "Carlos" //local
    console.log("Olá " + nome + " " + sobrenome)
}
function func1() {
    console.log("Ola")
}

