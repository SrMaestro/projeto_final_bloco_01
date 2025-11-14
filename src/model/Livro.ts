import { Produto } from "./Produto";

export class Livro extends Produto {


    private _autor: string;
    private _numeroPaginas: number


    constructor(numero: number,nome: string, preco: number, quantidade: number, autor: string, numeroPaginas: number) {
        super(numero ,nome, preco, quantidade); // chama o construtor da classe Produto
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }

    public get autor(): string {
        return this._autor;
    }

    public set autor(autor: string) {
        this._autor = autor;
    }

    public get numeroPaginas(): number {
        return this._numeroPaginas;
    }

    public set numeroPaginas(numeroPaginas: number) {
        this._numeroPaginas = this.validarValor(numeroPaginas)
    }



}

