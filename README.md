# 🔏 Codificador e Decodificador de texto
## 📥 - HTML, CSS e JavaScript
Este é o ***challenge*** desenvolvido durante o programa **ONE - Oracle Next Education & Alura**, para praticar os conteúdos abordados. O desafio consiste em criar um ***codificador/decodificador*** de textos utilizando técnicas de **HTML**, **CSS** e **JavaScript**.
Através da *template* e de *cards* colocados no *Trello* para gerenciar o projeto e nos habilitar a criar um ***workflow*** consistente e organizado conforme os parâmetros de mercado, também tivemos acesso a um modelo proposto no *Figma* para que tivessemos uma orientação do projeto.
### <img Alt="Logo do Projeto" src="https://github.com/edvannps/text-decoder/blob/main/assets/images/projeto.ico" width="60px"> Meu projeto
Neste projeto segui a estrutura abaixo, para ter uma melhor compreensão como um todo, primeiro implementei toda parte de ***HTML***, para posteriormente fazer toda a parte de estilização da página com o ***CSS***, e por fim, implementei a interatividade do projeto para os botões e campos para textos com o ***JavaScript***.

#### <img Alt="Logo HTML5" src="https://github.com/edvannps/text-decoder/blob/main/assets/images/icons8-html-5.ico" width="60px"> **Estrutura HTML**
- Ícone, o título e a descrição da página;
- ***Header***, com *link* das minhas redes sociais e o logo da *Alura*. Assim, ao clicar nos logos dos links, as páginas são carregadas;
- Alerta: "apenas letras minúsculas e sem acento", para evitar que o usuário digite letras maiúsculas ou acentuadas;
- ***Textarea*** de entrada para o texto a ser *codificação/decodificação* e de saída, com botões de *criptografar* e *descriptografar* para o campo de **entrada**, também foram implementados botões de *copiar* e *limpar* para o campo de **saída**;
- ***Footer***, onde adicionei meu nome com o autor do projeto.

#### <img Alt="Logo CSS3" src="https://github.com/edvannps/text-decoder/blob/main/assets/images/icons8-css3.ico" width="60px"> **Estrutura CSS**
- As fontes utilizadas foram *"Squada One e Bakbak One"*, com tamanho e peso 400;
- As cores do fundo (com estilo vintage) e sombras colocadas como variáveis dentro da tag **:root**;
- Nas animações dos botões (***transition***) de 0,5s;
- *Estilização* dos campos de textos, botões, e textos;
- *Layout **responsivo*** da página para dispositivos móveis;

#### <img Alt="Logo Javascript" src="https://github.com/edvannps/text-decoder/blob/main/assets/images/icons8-javascript.ico" width="70px"> **Estrutura JavaScript**
- Implementação da função para codificar separando os caracteres do texto em um *array* (***Matriz***), substituindo com *método **replaceAll***;
- Implementação da função decodificar seguindo basicamente a estrutura inversa da função anterior com *array* e utilização do *método **replaceAll***;
- Implementação da função *copiar*, que faz exatamente o que diz na função, copia o resultado da *criptografia* para que o usuário possa reutilizá-lo;
- Implementação da função *Limpar*, que limpa o campo *resultado* deixando livre para a saída de um novo resultado.
