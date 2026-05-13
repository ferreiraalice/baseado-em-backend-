//Cadastro de Aluno

const nomeCompleto = "João Silva Sauro";
const numeroMatricula = 2024001
const emailContato = "joao.silva@escola.com"
const dataNascimento = "2010-05-15"
const statusMatricula = "Ativa"

let notaMatematica = 8
let notaPortuguês = 7
let notahistoria = 5
let notaquimica = 6

let somaDasnotas = notaMatematica + notaPortuguês + notahistoria + notaquimica 
let mediaFinal = somaDasnotas / 2

console.log (`a nota dele em matematica e ${notaMatematica} e a nota em português e ${notaPortuguês} e a nota ${notahistoria} e a nota ${notaquimica} a media dessas notas é ${mediaFinal}`)

console.log ( `
    o nome completo dele é ${nomeCompleto}, ele nasceu em ${dataNascimento}, o email de contato é ${emailContato},
     o número de matrícula é ${numeroMatricula} e a matrícula dele ainda tá ${statusMatricula}`)