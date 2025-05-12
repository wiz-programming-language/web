<footer class="mt-xl text-sm px-[10vw]">
    <section class="mb-md flex justify-between flex-wrap gap-xl">
        <div>
            <img src="{logo}" alt="Logo" class="h-32 w-auto mb-md">
            <h3 class="text-xl uppercase">Programação, simplificada</h3>
            <!-- <span class="text-center">Programação, simplificada</span><br> -->
            <!-- <span>&copy; Wiz Foundation, 2024 | Termos de serviço | Política de privacidade</span> -->
        </div>
        <nav>
            <h4>Aprender</h4>
            <ul class="space-y-sm">
                <li><a href="/tutorial">Tutorial</a></li>
                <li><a href="/docs">Documentação</a></li>
                <li><a href="/">Supote</a></li>
                <li><a href="/">Material</a></li>
            </ul>
        </nav>
        <nav>
            <h4>Comunidade</h4>
            <ul class="space-y-sm">
                <li><a href="/">Forum</a></li>
                <li><a href="/">Wiz Foundation</a></li>
                <li><a href="/">Patrocinadores</a></li>
                <li><a href="/">Membros</a></li>
                <li><a href="/">Doar</a></li>
                <li><a href="/">Contribuir</a></li>
            </ul>
        </nav>
        <nav>
            <h4>Social</h4>
            <ul class="space-y-sm">
                <li><a href="/">GitHub</a></li>
                <li><a href="/">Discord</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">YouTube</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
        </nav>
    </section>
    <section class="py-md flex justify-between flex-wrap gap-sm text-light-gray">
        <div class="space-x-sm text-xs">
            <span>&copy; Wiz Foundation, 2024</span>
            <a href="/terms" class="hover:text-light">Termos de serviço</a>
            <a href="/privacy" class="hover:text-light">Política de privacidade</a>
            <!-- &copy; Wiz Foundation, 2024 | Termos de serviço | Política de privacidade -->
        </div>
        <div class="space-x-xs text-2xl">
            <a href="www.github.com/wiz-programming-language" aria-label="Github"><i class="fa-brands fa-github"></i></a>
            <a href="/" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>
            <a href="/" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="/" aria-label="Youtube"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </section>
</footer>

<style>
    a{
        @apply text-light-gray hover:text-secondary;
    }

    h4{
        @apply text-base font-sans font-bold uppercase mb-sm;
    }
</style>

<script>
    import logo from "$lib/img/WizLogo.png";
</script>
