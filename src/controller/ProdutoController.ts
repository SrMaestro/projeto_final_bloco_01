import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    criar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\n Produto : " + produto.numero + " foi criada com sucesso");
    }

    listar(): void {

        if (this.listaProdutos.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }

        for (let produto of this.listaProdutos) {
            produto.exibirDetalhes();
        }
    }

    buscarPorNome(nome: string): void {
        let buscaConta = this.buscarArray(nome);

        if (buscaConta != null) {
            buscaConta.exibirDetalhes();
        } else {
            console.log("\n produto : " + nome + " nao foi encontrada!",);

        }
    }

    atualizar(produto: Produto): void {
        let buscaConta = this.buscarArray(produto.nome);

        if (buscaConta != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaConta)] = produto;
            console.log("\nA Conta numero: " + produto.nome +
                " foi atualizada com sucesso!");
        } else {
            console.log("\nA Conta numero: " + produto.nome +
                " não foi encontrada!");
        }
    }

    remover(nome: string): void {
        let buscaConta = this.buscarArray(nome);

        if (buscaConta != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaConta), 1);
            console.log("\nA Conta numero: " + nome +
                " foi apagada com sucesso!",);
        } else {
            console.log("\nA Conta numero: " + nome +
                " não foi encontrada!",);
        }
    }

    //checa se uma Conta existe
    public buscarArray(nome: string): Produto | null {
        for (let conta of this.listaProdutos) {
            if (conta.nome === nome)
                return conta;
        }
        return null
    }

    
      public buscarPorId(numero: number): Produto | null {
        for (let conta of this.listaProdutos) {
            if (conta.numero === numero)
                return conta;
        }
        return null
    }


    public gerarNumero(): number {
        return ++this.numero
    }



}