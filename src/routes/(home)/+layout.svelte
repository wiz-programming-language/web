<script>
    import "../../app.css";
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
	import Return from "./return.svelte";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<Header/>

{@render children?.()}

<Footer/>

<Return/>
