// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = "Matheus Enrique";
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// Tuple
var jogadores;
jogadores = ["Vítor", 3, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao);
var StatusAprovacao2;
(function (StatusAprovacao2) {
    StatusAprovacao2["Aprovado"] = "001";
    StatusAprovacao2["Pendente"] = "002";
    StatusAprovacao2["Rejeitado"] = "003";
})(StatusAprovacao2 || (StatusAprovacao2 = {}));
var statusDaAprovacao2 = StatusAprovacao2.Aprovado;
console.log(statusDaAprovacao2);
