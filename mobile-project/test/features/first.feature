Feature: First Tests

    Esse é uma poc para validar o BDD para testar a compatibilidade de um novo chat
     aplicavel para qualquer app com a diversidade de sistemas e suas versões

Scenario: Abrir APP
Given Esteja na tela inicial com o "<device>" com o "<system>" na "<version>"
When abro o chat
Then O sistema carrega a pagina inicial corretamente

Examples:
    | device | system | version |
    | Samsung Galaxy S8 Plus | Android | 7.0 |
    | iPhone 12 Pro Max | IOS | 14 |



    # | iPhone 7 | IOS | 10 |
    # | iPhone8 | IOS | 11 |
