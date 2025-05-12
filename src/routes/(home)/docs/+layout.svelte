<div class="flex mb-32">
    <aside>
        <details>
            <summary>Introdução</summary>
            <a href="/docs/overview">O que é Wiz</a>
            <a href="/docs/usage">Como usar</a>
            <a href="/docs/installation">Instalação</a>
            <a href="/docs/learn">Aprender</a>
            <a href="/">Básicos</a>
        </details>
        <details>
            <summary>Variáveis</summary>
            <a href="/">Declaração</a>
            <a href="/">Estrutura de dados</a>
            <a href="/">Escopo</a>
        </details>
        <details>
            <summary>Tipos de dados</summary>
            <a href="/">Texto</a>
            <a href="/">Número</a>
            <a href="/">Verdadeiro e falso</a>
            <a href="/">Nada</a>
        </details>
        <details>
            <summary>Operadores</summary>
            <a href="/">Cálculos</a>
            <a href="/">Comparação</a>
            <a href="/">Lógica</a>
        </details>
        <details>
            <summary>Fluxo de controle</summary>
            <a href="/">Estruturas de seleção</a>
            <a href="/">Laços de repetição</a>
            <a href="/">Tratemento de erros</a>
        </details>
        <details>
            <summary>Funções</summary>
            <a href="/">Declaração</a>
            <a href="/">Parâmetros</a>
            <a href="/">Retorno</a>
            <a href="/">Programação funcional</a>
        </details>
        <details>
            <summary>Biblioteca padrão</summary>
            <a href="/docs/stdlib/write">Visão geral</a>
            <a href="/docs/stdlib/write">write()</a>
            <a href="/docs/stdlib/read">read()</a>
            <a href="/docs/stdlib/text">text()</a>
            <a href="/docs/stdlib/clock">clock()</a>
        </details>
        <details>
            <summary>Classes</summary>
            <a href="/">Declaração</a>
            <a href="/">Construtores</a>
            <a href="/">Herança</a>
            <a href="/">Super</a>
        </details>
    </aside>
    
    <main class="docs w-full px-xl pt-md mb-xl">
        <!-- <nav class="mb-md">
            <a href="/docs">Docs </a>&gt;
            <a href="/previous">Link </a>
            {@render nav?.()}
        </nav> -->
        {@render children?.()}
    </main>
    
    <aside>
        <h2 class="text-3xl mb-xs">Conteúdo</h2>
        {#if contents}{@render contents()}{:else}
            <a href="#what-is-wiz" class="hover:text-secondary">O que é Wiz?</a>
            <a href="#language-definition" class="pl-sm hover:text-secondary">  Definição de idioma</a>
            <a href="#supported-languages" class="pl-md hover:text-secondary">     Idiomas suportados</a>
            <a href="#learn-wiz" class="pl-sm hover:text-secondary">  Aprender Wiz</a>
            <a href="#usage" class="pl-sm hover:text-secondary">  Como usar</a>
            <a href="#installation" class="pl-sm hover:text-secondary">  Instalação</a>
        {/if}
    </aside>
</div>

<style>
    aside{
        @apply flex flex-col p-md gap-sm min-w-72 max-w-72 h-[100svh] overflow-y-scroll sticky top-0;
    }

    summary {
        @apply text-xl list-none cursor-pointer flex items-center relative pl-6 mb-sm hover:text-secondary;
    }
    summary::before {
        content: '\f054';
        font: var(--fa-font-solid);
        font-size: 16px;
        position: absolute;
        left: 0;
    }
    details[open] summary::before {
        content: '\f078';
    }

    details a{
        @apply pl-6 mb-xs inline-block w-full hover:text-secondary;
    }

    :global(.docs h1){ @apply text-5xl mb-md font-normal pt-3; }
    :global(.docs h2){ @apply text-4xl mb-md pt-3; }
    :global(.docs h3){ @apply text-3xl mb-sm pt-2; }
    :global(.docs h4){ @apply text-2xl mb-sm pt-2; }
    :global(.docs h5){ @apply text-xl mb-xs pt-1; }
    :global(.docs h6){ @apply text-lg mb-xs pt-1; }

    :global(.docs pre){ @apply mb-md; }
    :global(.docs p){ @apply mb-md; }
</style>

<script lang="ts">
    import { page } from "$app/stores";

    interface Props {
        nav?: import('svelte').Snippet;
        children?: import('svelte').Snippet;
        contents?: import('svelte').Snippet;
    }

    let { nav, children, contents }: Props = $props();
</script>
