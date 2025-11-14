import readlinesync = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Livro } from "./src/model/Livro";

export function main() {

    let opcao: number; // variavel iniciada


    // Objeto Produto (teste)

    const livro1 = new Livro(
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
                keyPress()

                break;
            case 2:
                console.log("\n\nLista Produtos\n\n");
                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto\n\n");
                keyPress()
                break;
            case 4:
                console.log("\n\nEditar produto\n\n");
                keyPress()
                break;
            case 5:
                console.log("\n\nExcluir Produto\n\n");
                keyPress()
                break;
            case 6:
                console.log("\n\nSair\n\n");
                keyPress()
                break;
                keyPress()
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