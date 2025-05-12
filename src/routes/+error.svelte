<svelte:head>
    <title>Wiz | {$page.status}</title> 
</svelte:head>

<Header/>
<main class="grid place-content-center py-36 text-center">
    <h1 class="text-9xl mb-md">{$page.status}</h1>
    {#if $page.error}
        <h2 class="text-5xl">{$page.error.message}</h2>
    {/if}
</main>
<Footer/>
<Return/>

<script>
    import { page } from '$app/stores';
    import "../app.css";
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import Header from "./(home)/header.svelte";
    import Footer from "./(home)/footer.svelte";
	import Return from "./(home)/return.svelte";
</script>
