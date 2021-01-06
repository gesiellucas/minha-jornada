# Trilha do meu aprendizado
Existem muiitas coisas que eu ainda tenho que aprender, confesso que só de pensar nisso sinto um leve arrepio, amo ser desafiado e sou apaixonado por descobrir coisas que são novas para mim. Aqui terei um rascunho das minhas habilidades que vou aprendendo com o tempo. É um repositório mais pessoal, mas sinta-se à vontade.

## Git & GitHub
Trabalho de diversos computadores diferentes então é comum eu precisar recorrer a algum projeto meu remoto que esteja alocado no github, mas sempre fico com uma leve dúvida, _push_ e _pull_, clone, watches, etc. Como base para escrever esse guia usarei a documentação do próprio GitHub. 
#### Escrevendo um README:
Para o uso de alguns shortcodes usarei o link [Basic Writing and Formating Sintax](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax). 
#### Como clonar um repositório?
Abra o repositório, clique no botão **code** e copie o caminho de _clone HTTPS_.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
[Clone a Repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
#### Removendo remote:
Use o comando `git remote -v` para ver qual o remote deseja remover, em seguida utilize:
```
git remote rm NOME-REMOTE
```
[Removing a Remote](https://docs.github.com/pt/free-pro-team@latest/github/using-git/removing-a-remote)

## CSS
Conheço o CSS desde 2015 e desde então venho utilizando ele frequentemente. Existem algumas funções que há muito tempo não uso, e outras que desconheço.

#### FlexBox
Material de apoio [FlexBox Origamid](https://origamid.com/projetos/flexbox-guia-completo/).

###### Display Flex
No display flex o conteúdo da TAG fica restrito somente ao seu tamanho.
```CSS
.flex{
	display:flex;
}
```

###### Flex Direction
Define a direção dos flex itens. Por padrão ele é row (linha), por isso quando o display: flex; é adicionado, os elementos ficam em linha, um do lado do outro.
- **flex-direction: row-reverse**
Muda a direção dos elementos, do último para o primeiro, inclusive a posição de _left_ para _right_.
```CSS
.flex{
	display:flex;
	flex-direction: row-reverse;
}
```
- **flex-direction: column**
Coloca os itens em posição de colunas.
```CSS
.flex{
	display:flex;
	flex-direction: column;
}
```
- **flex-direction: column-reverse**
Coloca os itens em posição de colunas, mas muda a direção do último para o primeiro.
```CSS
.flex{
	display:flex;
	flex-direction: column;
}
```
###### Flex Wrap
Define a quebra de linhas. Por padrão elas não quebram a linha, ou seja, continuam _inline_. 
```CSS
.flexwrap{
	display:flex;
	flex-wrap: wrap;
}
```
- **flex-wrap: wrap-reverse**
Quando acontece a quebra de linha a mesma é feita em direção contrária.
```CSS
.flexwrap{
	display:flex;
	flex-wrap: wrap-reverse;
}
```
###### Flex Justify Content
Alinha os itens flex no container de acordo com a direção. Existem 5 valores para a propriedade `justify-content`. São elas `flex-start, flex-end, center, space-between e space-around`.
Ressaltando o `justify-content:space-between` pela possibilidade de criar menus com ela.
```CSS
.flexjustify{
	display:flex;
	justify-content: space-between;
}

```
## HTML5 
Encontrei um Guia muito legal de HTML disponibilizado pela Hostinger, em pdf pelo link [HostingerBR HTML](https://github.com/hostinger/banners/blob/master/br/Guia-de-Refer%C3%AAncias-HTML-HostingerBR.pdf?raw=true)
