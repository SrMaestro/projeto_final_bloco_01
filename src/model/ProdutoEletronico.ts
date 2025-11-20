import { Produto } from "./Produto";


export class ProdutoEletronico extends Produto{

    private _marca : string;

    
    constructor(id : number, nome : string, preco : number, marca : string){
        super(id, nome, preco);
        this._marca = marca;
    }

    public exibirDetalhes(): void {
        console.log(` Id : ${this.id}` );
        console.log(` Nome : ${this.nome}` );
        console.log(` Preco : ${this.preco}` );
        console.log(` Marca : ${this._marca}` );

        
    }






}