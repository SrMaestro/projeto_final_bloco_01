import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    //Crud Do Produto
    criar(produto: Produto): void;
    listar(): void;
    buscarPorNome(nome: string): void;
    atualizar(produto: Produto): void;
    remover(nome: string): void;


}