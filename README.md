# Automação Multiplataforma (IOS e Android Nativos) com appium.io  e vanilla JS

 

## Objetivo
Este projeto tem como foco fornecer um template para desenvolver uma suíte de testes de regressão de qualquer sistema que possua aplicativos nativos para Android e IOS nas diferentes versões de sistema e aparelhos que são comuns a aplicações mobile

## Requisítos

 - Uma conta no https://www.browserstack.com/live
 - Baixar e Instalar [Appium Desktop](https://github.com/appium/appium-desktop/releases/latest)
 - Baixar e Instalar [Node.js](https://nodejs.org/pt-br/download/)
 - Baixar os Aplicativos exemplos para [Android(.apk)](https://nodejs.org/pt-br/download/) e [IOS(.ipa)](https://drive.google.com/file/d/1JL8WszHrovaZWBWBv02pjjErbotJ9DWp/view?usp=sharing)
 - Java >= 8.0 ** 
 - Android SDK **

_ **  É necessário apenas para verificar os elementos dos aplicativos com o Appium Desktop , não é necessária a instalação para rodar os testes, pois os testes são executados no servidor do BrowserStack que já possui essa ferramenta instalada e configurada_
 

# Primeiros Passos
**Legenda**:  
** Os passos que possuírem o sufixo " ** " são considerados opcionais. São necessários apenas para verificar os elementos de um aplicativo, pois os testes são executados no servidor do BrowserStack que já possui essa ferramenta instalada e configurada

## 1 - Instalar o Node.js

Instale o node.js em seu computador

[Documentação Auxiliar](https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux#:~:text=js%20em%20Windows%2C%20Mac%20e,por%C3%A9m%2C%20costuma%20ser%20mais%20antiga.)

## 2 -  Instalar o Java >= 8 **
Instalar o Java e definir a JAVA_HOME no computador

[Documentação Auxiliar](https://techexpert.tips/pt-br/windows-pt-br/instalar-java-jdk-no-windows/)

## 3 -  Instalar Android SDK **
Instalar o Android SDK e definir a ANDROID_HOME no computador


## Subir os aplicativos de exemplo no Browser Stack

**Subir .apk**
Rodar o comando a baixo via linha de comando ex: (CMD) ,  substituindo <font color='DarkViolet'>{usuario.browsserstack}</font>  e <font color='DarkViolet'>{senha.browsserstack}</font> por seu usuário e senha respectivamente do browserstack
![Usuário e Senha Browser Stack](https://i.imgur.com/QghwokP.png)
 Substituir <font color='DarkViolet'>{caminho.apk}</font>  pelo caminho do aplicativo em seu computador ex: *C:\Users\guilherme.lisboa\Documents\Apk\calc.apk*

```bash
    curl -u "{usario.browsserstack}:{senha.browserstack}" \
    -X POST "https://api-cloud.browserstack.com/app-automate/upload"" \
    -F "file=@{caminho.apk}" \
    -F "custom_id=calc-android"
```
**Verificar se o aplicativo Android subiu no Browser Stack**

Rodar o comando a baixo via linha de comando substituindo <font color='DarkViolet'>{usuario.browsserstack}</font>  e <font color='DarkViolet'>{senha.browsserstack}</font> _ pelo seu usuário e senha do BrowserStack e verificar se o app com o *custom_id=calc-android* aparece na listagem
```bash
curl -u "{usuario.browsserstack}:{senha.browsserstack}" \
-X GET "https://api-cloud.browserstack.com/app-automate/recent_apps"

```

**Subir .ipa**
Repetir os mesmos passos do .apk subistituindo o <font color='DarkViolet'>{custom_id=calc-android}</font> por <font color='DarkViolet'>{custom_id=calc-ios}</font> 



## Abrir o Appium Desktop validar sessão do Browser Stack

Abrir o aplicativo do Appium Desktop
<font color='DarkViolet'>{usuario.browsserstack}</font> 






 



