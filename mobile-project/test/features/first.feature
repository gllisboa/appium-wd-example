Feature: First Tests

    Esse é uma poc para validar o BDD para testar a compatibilidade de um novo chat
     aplicavel para qualquer app com a diversidade de sistemas e suas versões

Scenario: Abrir APP
Given Esteja na tela inicial com o "<device>" com o "<system>" na "<version>"
When abro o chat
Then O sistema carrega a pagina inicial corretamente

Examples:
    | device | system | version |
    | iPhone XS  | IOS | 12  |
    | Android | Nexus 2 | 7 |