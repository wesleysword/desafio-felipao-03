class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    invocacao() {
        console.log(`Novo heroi chamado ${this.nome}, de ${this.idade} anos e do tipo ${this.tipo} apareceu na cidade`);
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let novoHeroi = new heroi("Cloud", 23, "mago");

novoHeroi.invocacao();
novoHeroi.atacar();