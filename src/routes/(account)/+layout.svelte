<script>
    import '../../app.css'
</script>

<main class="flex w-full h-svh">
    <div class="wiz flex-1 flex justify-center items-center flex-col gap-lg">
        <img src="" alt="Logo">
        <h1 class="text-7xl font-bold">WIZ</h1>
        <p>Programação, simplificada</p>
    </div>
    <div class="flex-1 flex justify-center items-center flex-col gap-sm p-xl">
        <h2 class="text-5xl mb-md font-semibold leading-snug">Login</h2>
        <input type="text" placeholder="Usuário ou e-mail" class="px-xs py-1 w-full max-w-80">
        <input type="password" placeholder="Senha" minlength="8" class="px-xs py-1 w-full max-w-80 mb-sm">
        <button class="button-yellow w-full max-w-80">Entrar</button>
    </div>
</main>

<style>
    .wiz{
        background-image: linear-gradient(135deg, #3399FF, #FFD500);
    }
    /* h2{
        background-image: var(--gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    } */
</style>