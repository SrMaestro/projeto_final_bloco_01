import readlinesync = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Livro } from "./src/model/Livro";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, numero, preco, quantidade, paginas: number;
    let nome, autor: string;



    // Objeto Produto (teste)

    const livro1 = new Livro(
        1,                 // numero
        "Clean Code",      // nome
        120.00,            // preco
        10,                // quantidade
        "Robert C. Martin",// autor
        464                // numeroPaginas
    );


    // Exibir detalhes do livro
    livro1.exibirDetalhes();

    // Alterar atributos
    livro1.quantidade = 15;
    livro1.numeroPaginas = 500;

    // Mostrar novamente
    console.log("\nApós alterações:");
    livro1.exibirDetalhes();





    // o while serve para continuar mostrando o menu quando um condicao for verdadeira, porem estamos usando `process.exit(0)` para encerrar a execucao
    while (true) {
        // aparicao do menu
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Loja de Produtos                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Buscar Produto                       ");
        console.log("            4 - Editar Produto                       ");
        console.log("            5 - Excluir Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        //Capturando a entra do usuario e armazenando na variavel `opcao`
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        //caso a opcao for igual a 6 o terminal sera encerrado
        if (opcao == 6) {
            console.log("\nMensagem de saida");
            process.exit(0);
        }

        //Uso do switch-case para chamar as funcoes com base nas opcoes do usuario
        switch (opcao) {
            case 1:
                console.log("\n\nAdiciona Produto\n\n");

                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("");

                console.log("Digite o preco do produto: ");
                preco = readlinesync.questionFloat("");

                console.log("\nDigite a quantidade: ");
                quantidade = readlinesync.questionInt("");

                console.log("Digite o autor do livro: ");
                autor = readlinesync.question("");

                console.log("Digite o número de páginas: ");
                paginas = readlinesync.questionInt("");


                // Cria o produto usando os valores digitados
                produtos.criar(new Livro(produtos.gerarNumero(), nome, preco, quantidade, autor, paginas));


                keyPress()

                break;
            case 2:
                console.log("\n\nLista Produtos\n\n");
                produtos.listar();
                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto\n\n");
                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("")
                produtos.buscarPorNome(nome);
                keyPress()
                break;
            case 4:
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = produtos.buscarPorId(numero);

                if (conta != null) {
                    console.log("\n\nAdiciona Produto\n\n");

                    console.log("Digite o nome do produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o preco do produto: ");
                    preco = readlinesync.questionFloat("");

                    console.log("\nDigite a quantidade: ");
                    quantidade = readlinesync.questionInt("");

                    console.log("Digite o autor do livro: ");
                    autor = readlinesync.question("");

                    console.log("Digite o número de páginas: ");
                    paginas = readlinesync.questionInt("");


                    // Cria o produto usando os valores digitados
                    produtos.criar(new Livro(produtos.gerarNumero(), nome, preco, quantidade, autor, paginas));

                } else {
                    console.log("\nA Conta numero: " + numero + " não foi encontrada!",);
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nExcluir Produto\n\n");

                console.log("Digite o número do Produto");
                const id = readlinesync.question("");
                produtos.remover(id);

                keyPress()
                break;
            case 6:
                console.log("\n\nSair\n\n");
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();