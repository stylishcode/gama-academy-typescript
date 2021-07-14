// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = "Matheus Enrique";

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

// Tuple (pouco utilizado)
let jogadores: [string, number, boolean];
jogadores = ["Vítor", 3, true];

// Enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao); //0

enum StatusAprovacao2 {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}
const statusDaAprovacao2: StatusAprovacao2 = StatusAprovacao2.Aprovado;
console.log(statusDaAprovacao2); //001

// Any (use com cautela, somente quando não se sabe o retorno exato)
const retornoDaAPI: any[] = [123, "Matheus", false];
const retornoDaAPI2: any = {
    //...
}

// Void (pouco utilizado)
function printaNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
});

// Never (O typescript pode inferir never em alguns dos casos abaixo)
// Quando o typescript infere o tipo, não precisa declarar explicito, é somente para didática, igual o tipo void
function loopInfinito(): never {
    while(true) {
        // Nunca termina (never)
    }
}

function erro(mensagem: string): never {
    // lança exceção, ou seja, quebra o código e nunca termina (never)
    throw new Error(mensagem); 
}

function falha(): never {
    // Como a função no retorno é never, automaticamente essa que chama também é never
    return erro("Algo falhou");
}

// Union Types
const nota: number | string = 5;
function exibirNota(nota: number | string | boolean) { //aceita number ou string ou boolean
    console.log(`A nota é ${nota}`);
}

exibirNota(10);
exibirNota("10");
exibirNota(false);
exibirNota(true);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    datanascimento: Date;
}

//type Funcionarios = Funcionario[];
const funcionarios: Funcionario[] = [{
    nome: "Matheus",
    sobrenome: "Enrique",
    datanascimento: new Date()
}, {
    nome: "Fulano",
    sobrenome: "Farias",
    datanascimento: new Date()
}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    funcionarios.forEach(func => console.log(func));
}

//Valores nulos ou opcionais
let altura = 1.6;
// altura = null; // desativar regra strict null check para funcionar

//alternativa
let altura2: number | null = 1.6;

//alternativa 2: usar ? no final do nome do atributo
type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string //campo opcional
}

const contato: Contato = {
    nome: "Matheus",
    telefone1: "(91) 98491-0900",
    // campo opcional, pode e não pode ter
} 

//Type Assertion (parecido com o casting em outras linguagens, mas sem tratamento do tipo de dado)
const minhaIdade: any = 23;
//minhaIdade.toString(); number tem o método toString, mas o js nessa linha não sabe o tipo da variavel
(minhaIdade as number).toString(); // Type Assertion: Agora o autocomplete funciona porque foi especificado via Type Assertion o valor da variável

// Exemplo real do uso do type assertion (pegando o value de um input)
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value); // agora tenho autocomplete para a propriedade value do input

 // Outra forma de declarar Type Assertion
 const input2 = <HTMLInputElement>document.getElementById("numero1");
 console.log(input2.value);