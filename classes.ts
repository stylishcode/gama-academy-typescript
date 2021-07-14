class Data {
    private _dia: number;
    private _mes: number;
    private _ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }

    public get dia() {
        return this._dia;
    }

    public get mes() {
        return this._mes;
    }

    public get ano() {
        return this._ano;
    }
}

const data = new Data(26, 12, 1997);
console.log(`Data: ${data.dia}/${data.mes}/${data.ano}`);

const data2 = new Data();
console.log(`Data: ${data2.dia}/${data2.mes}/${data2.ano}`);


// Evitando criar atributos e inicializar no construtor com this.isso e this.aquilo
class Data2 {
    constructor(
        private _dia: number, 
        private _mes: number, 
        private _ano: number
    ) {}

    public get dia(): number {
        return this._dia;
    }

    public get mes(): number {
        return this._mes;
    }

    public get ano(): number {
        return this._ano;
    }
}

const data3 = new Data2(29, 10, 1999);
console.log(`Data: ${data3.dia}/${data3.mes}/${data3.ano}`);

// usando modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number
    ){}

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
            return;
        }
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    public acelerar() {
        this.alterarVelocidade(5);
    }

    public frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro("Chevrolet", "Prisma", 250);

class Camaro extends Carro {
    private turbo = false;
    constructor(
        public marca: string, 
        public modelo: string, 
        velocidadeMaxima: number) {
        super(marca, modelo, velocidadeMaxima);
    }

    public ligarTurbo() {
        if (this.turbo) { 
            return 
        };
        this.turbo = true;
    }
}

const camaro = new Camaro("Camaro", "Amarelo", 300);
camaro.acelerar();
camaro.acelerar();
camaro.ligarTurbo();
camaro.frear();