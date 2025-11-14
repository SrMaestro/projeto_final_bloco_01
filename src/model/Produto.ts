import { log } from "console";

export abstract class Produto {
    // Atributos da classe Produto
    private _numero: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;


    // Construtor para buildar no objeto

    constructor(numero: number, nome: string, preco: number, quantidade: number) {
        this._numero = numero;
        this._nome = nome;
        this._preco = this.validarValor(preco);
        this._quantidade = this.validarValor(quantidade);
    }



    // Getters e Setters

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome
    }

    public get preco() {
        return this._preco;
    }


    public set preco(preco: number) {
        this._preco = this.validarValor(preco);
    }

    public get quantidade() {
        return this._quantidade
    }

    public set quantidade(quantidade: number) {
        this._quantidade = this.validarValor(quantidade);

    }


    public exibirDetalhes(): void {
        console.log(`Numero : ${this._numero}`);
        console.log(`Produto: ${this._nome}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`Quantidade: ${this._quantidade}`);
    }


    public validarValor(valor: number): number {

        if (valor < 0) {
            throw new Error("Valor não pode ser negativo");
        }

        return valor;
    }



}