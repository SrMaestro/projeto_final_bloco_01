import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    //Crud Do Produto
    criar(produto: Produto): void;
    listar(): Produto[];
    buscarPorNome(nome: string): Produto | undefined;
    atualizar(nome: string, dados: Partial<Produto>): void;
    remover(nome: string): void;


}