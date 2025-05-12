<header class="px-md py-sm justify-between items-center flex gap-16 h-[14vh]">
    <div class="flex gap-sm h-full">
        <a href="/">
            <img src="{logoMark}" alt="Logo" class="h-full w-auto">
        </a>
        <div class="relative w-72 flex items-center">
            <input type="text" name="search" placeholder="Pesquisar" class="px-3 py-2 w-full h-min bg-transparent text-sm border-light border-solid border text-light placeholder-light hover:border-primary focus:outline outline-primary focus:border-primary">
            <svg class="absolute right-3 stroke-light hover:stroke-primary cursor-pointer bg-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="self-center relative" id="selectLanguage">
            <select name="language" class="bg-dark px-3 py-2 pr-12 h-min text-sm appearance-none !border !border-light hover:!border-primary focus:outline outline-primary focus:!border-primary">
                <option value="portugues">Português</option>
                <option value="english">English</option>
            </select>
        </div>
    </div>
    <nav class="space-x-md text-right">
        <a href="/install" class="nav-link {$page.url.pathname.startsWith('/install') ? 'active' : ''}">INSTALAR</a>
        <a href="/learn" class="nav-link {$page.url.pathname.startsWith('/learn') ? 'active' : ''}">APRENDER</a>
        <a href="/docs" class="nav-link {$page.url.pathname.startsWith('/docs') ? 'active' : ''}">DOCUMENTAÇÃO</a>
        <div class="relative inline-block group">
            <a href="/community" class="nav-link {$page.url.pathname.startsWith('/about') ? 'active' : ''} group-hover:border-b-2">COMUNIDADE <i class="fa-solid fa-angle-down"></i></a>
            <nav class="hidden absolute z-10 -left-sm translate-y-[2px] group-hover:flex flex-col gap-sm p-sm min-w-[calc(100%+32px)] text-left bg-dark border-2 border-secondary">
                <a href="/forum" class="hover:text-secondary">Forum</a>
                <a href="/sponsors" class="hover:text-secondary">Patrocinadores</a>
                <a href="/members" class="hover:text-secondary">Membros</a>
                <a href="/contributeorgithublink" class="hover:text-secondary">Contribuir</a>
                <a href="/donate" class="hover:text-secondary">Doar</a>
            </nav>
        </div>
        <a href="/" class="nav-link {$page.url.pathname.startsWith('/about') ? 'active' : ''}">PROGRAMAR</a>
        <!-- <a href="/" class="button-yellow right-cut !px-md {$page.url.pathname.startsWith('/about') ? 'active' : ''}">PROGRAMAR</a> -->
    </nav>
</header>

<style>
    .nav-link{
        @apply font-medium pb-1 hover:border-b-2 border-secondary;
    }
    .active{
        @apply text-secondary;
        /* @apply border-b-2 border-secondary; */
    }
    #selectLanguage::after{
        content: '\f078'; 
        font: var(--fa-font-solid);
        position: absolute;
        font-size: 14px;
        right: 0;
        @apply absolute right-3 top-1/2 -translate-y-1/2;
    }
</style>

<script>
    import logoMark from "$lib/img/WizIcon.png";
    import { page } from "$app/stores";
</script>
