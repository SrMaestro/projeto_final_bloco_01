import { log } from "console";

export abstract class Produto {
    // Atributos da classe Produto
    private _id: number;
    private _nome: string;
    private _preco: number;



    // Construtor para buildar no objeto Produto
    constructor(id: number, nome: string, preco: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }



    // Getters e Setters

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get preco() {
        return this._preco;
    }


    public set preco(preco: number) {

        if (preco < 0) {
            throw new Error("Preço não pode ser negativo");
        }
        this._preco = preco;

    }


    public exibirDetalhes(): void {
        console.log(`Numero : ${this._id}`);
        console.log(`Produto: ${this._nome}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);

    }


}