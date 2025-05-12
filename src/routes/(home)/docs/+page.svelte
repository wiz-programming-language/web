<svelte:head>
    <title>Wiz | Introdução - Documentação</title>
</svelte:head>

<!-- <a slot="nav" href="/docs">O que é Wiz</a> -->

<style>
    a{
        @apply hover:text-secondary;
    }
</style>

<nav class="mb-12 flex justify-between">
    <div class="space-x-1">
        <a href="/docs">Introdução </a><span>&gt;</span>
        <a href="/docs/introduction">O que é Wiz? </a>
    </div>

    <a href="/docs/usage">Como usar <i class="fa-solid fa-arrow-right-long text-sm"></i></a>
</nav>

<h1 id="what-is-wiz">O que é Wiz?<br><hr></h1>
<p>Wiz é uma linguagem de programação criada para facilitar o aprendizado da programação e sua lógica, por isso possui
    uma sintaxe simples e intuitiva. A seguir está um exemplo de um programa em Wiz.</p>

<div class="codeblock">
    <CodeBlock code={
`@ Português
variavel mensagem = "Olá mundo!"
escreva(mensagem)`
} showHeader={true} idiom={'pt'}/>
</div>

<p>No exemplo acima, podemos ver um código simples que define o idioma de Wiz, cria uma variável chamada mensagem e escreve no terminal o valor da variável. 
    Uma variável nada mais é do que uma forma de guardar um valor em um nome, que enfim pode ser reusado novamente ao longo do programa.</p>

<h2 id="language-definition">Definição de idioma</h2>
<p>Ao observar o exemplo dado acima novamente, note que o idioma de Wiz foi definido começando com @ seguido pelo nome do idioma. 
    Essa definição é obrigatória em todo arquivo Wiz para que a sintaxe seja analizado corretamente no idioma certo.</p>

<h3 id="supported-languages">Idiomas suportados</h3>
<p>Atualmente, apenas inglês e português são aceitos em Wiz, porém mais idiomas serão adicionadas futuramente.</p>
<div>
    <CodeBlock code={
`@ Português
# Ou
@ English
# Linguagens aceitas por Wiz atualmente`
    } showHeader={true} idiom={'pt | en'} />
</div>

<h2 id="learn-wiz">Aprender Wiz</h2>
<p>Há diversos recursos gratuitos online para aprender Wiz. Neste site mesmo você pode encontrar o 
    <a href="/learn" class="text-secondary hover:underline">tutorial oficial de Wiz</a> com um método voltado a iniciantes de maneira intuitiva, 
    ou aprender por essa documentação mesmo.</p>
<p>Para começar aprendendo pela documentação, começe pelos <a href="/docs/basics" class="text-secondary hover:underline">básicos</a>.</p>

<h2 id="usage">Como usar</h2>
<p>Há muitas maneiras de usar Wiz. Você pode optar por instalar Wiz como um programa no seu computador ou 
    usar pelo navegador mesmo aqui no editor de código integrado neste site. Wiz também está disponível como
    uma extensão no editor de texto Visual Studio Code.</p>
<p>
    Para obter mais informações na usagem de Wiz, acesse a documentação <a href="/docs/usage" class="text-secondary hover:underline">aqui mesmo</a>.
</p>

<h2 id="installation">Instalação</h2>
<p>Para instalar e usar Wiz você pode baixar o <a href="/install" class="text-secondary hover:underline">instalador</a> oficial aqui mesmo ou consultar as todas versões de Wiz, 
    ou consultar a <a href="/docs/installation" class="text-secondary hover:underline">documentação para instalação</a> para saber mais sobre como instalar e configurar Wiz.</p>
<!-- 
<h2>Heading 2</h2>
<p>Paragraph</p>

<h3>Heading 3</h3>
<p>Paragraph</p>

<h4>Heading 4</h4>
<p>Paragraph</p>

<h2>Heading 2</h2>
<p>Paragraph</p>

<h3>Heading 3</h3>
<p>Paragraph</p> -->

<nav class="mt-xl flex justify-between">
    <div class="space-x-1">
        <a href="/docs">Introdução </a><span>&gt;</span>
        <a href="/docs/introduction">O que é Wiz? </a>
    </div>

    <a href="/docs/usage">Como usar <i class="fa-solid fa-arrow-right-long text-sm"></i></a>
</nav>

<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>