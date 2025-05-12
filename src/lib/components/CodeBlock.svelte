<div class:!flex={showHeader} class="hidden justify-between items-center bg-contrast-dark px-2 py-1 border-primary border border-b-0 text-sm">
    <span>{language}-{idiom}</span>
    <span class="hover:text-secondary cursor-pointer">
        <span class="mr-1">copiar código</span>
        <i class="fa-regular fa-copy hover:text-secondary cursor-pointer" title="Copy code"></i>
    </span>
</div>
<pre bind:this={codeBlock} class="language-{language} {styles} bg-contrast-dark p-md border-primary border">
<!-- <code>{code}</code> -->
</pre>

<script lang="ts">
    import { onMount } from 'svelte';
    import hljs from 'highlight.js/lib/core';
    import wiz from './wiz-highlight';
    import './wiz-highlight.css';
    hljs.registerLanguage('wiz', wiz);

    interface Props {
        language?: string;
        idiom?: string;
        code?: string;
        showHeader?: boolean;
        styles?: string;
    }

    let {
        language = 'wiz',
        idiom = 'en',
        code = '',
        showHeader = false,
        styles = ''
    }: Props = $props();

    let codeBlock: HTMLElement;

    onMount(() => {
        if (codeBlock) {
            codeBlock.innerHTML = code;
            hljs.highlightElement(codeBlock);
        }
        // // const codeBlock = document.querySelectorAll('pre code') as NodeListOf<HTMLElement>;
        // for (let index = 0; index < codeBlock.length; index++) {
        //     codeBlock[index].innerHTML = code;
        //     hljs.highlightElement(codeBlock[index]);
        // }
    });
</script>
