<!-- svelte-ignore a11y_invalid_attribute -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<a href="#" id="return" class="hidden bg-secondary h-10 w-10 fixed right-md bottom-md right-cut after:border-4 hover:opacity-80 items-center justify-center text-dark text-xl" title="Voltar ao começo" bind:this={top}>
    <i class="fa-solid fa-angle-up"></i>
</a>

<style>
    a{
        transition: 200ms ease-in-out;
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";

    let top: HTMLAnchorElement;
    
    onMount(() => {
        if (window.scrollY > 400) {
            top.style.display = 'flex';
        } 

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                top.style.display = 'flex';
            } else {
                top.style.display = 'none';
            }
        });
    })
</script>
