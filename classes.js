var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }
    Object.defineProperty(Data.prototype, "dia", {
        get: function () {
            return this._dia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "mes", {
        get: function () {
            return this._mes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
var data = new Data(26, 12, 1997);
console.log("Data: " + data.dia + "/" + data.mes + "/" + data.ano);
var data2 = new Data();
console.log("Data: " + data2.dia + "/" + data2.mes + "/" + data2.ano);
// Evitando criar atributos e inicializar no construtor com this.isso e this.aquilo
var Data2 = /** @class */ (function () {
    function Data2(_dia, _mes, _ano) {
        this._dia = _dia;
        this._mes = _mes;
        this._ano = _ano;
    }
    Object.defineProperty(Data2.prototype, "dia", {
        get: function () {
            return this._dia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data2.prototype, "mes", {
        get: function () {
            return this._mes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data2.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    return Data2;
}());
var data3 = new Data2(29, 10, 1999);
console.log("Data: " + data3.dia + "/" + data3.mes + "/" + data3.ano);
// usando modificadores de acesso
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
            return;
        }
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro("Chevrolet", "Prisma", 250);
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro(marca, modelo, velocidadeMaxima) {
        var _this = _super.call(this, marca, modelo, velocidadeMaxima) || this;
        _this.marca = marca;
        _this.modelo = modelo;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        if (this.turbo) {
            return;
        }
        ;
        this.turbo = true;
    };
    return Camaro;
}(Carro));
var camaro = new Camaro("Camaro", "Amarelo", 300);
camaro.acelerar();
camaro.acelerar();
camaro.ligarTurbo();
camaro.frear();
