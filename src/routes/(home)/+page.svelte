<svelte:head>
    <title>Wiz | Programação, simplificada</title>
</svelte:head>

<main>
    <section class="flex gap-32 mt-24 flex-wrap items-center">
        <div class="flex-1">
            <h1 class="text-7xl font-bold mb-md ">
                <span class="text-secondary">Programação</span>, <br>
                <span class="text-primary">simplificada</span>
            </h1>
            <p class="mb-lg">A linguagem feita para aprender programação,
                disponível no idioma <br>que quiser. Programe em sua própria língua nativa, de forma natural.</p>
            <a href="/downloads/WizInstaller.exe" download="Install Wiz v0.0.1.exe" class="button-yellow right-cut mb-xs inline-block">DOWNLOAD</a><br>
            <span class="text-secondary">v0.0.1</span>
        </div>
        <div>
            <!-- <CodeBlock code={
`variable message = "Hello world!"
write(message)

variable number = 0
while number less than 10 begin
    write(number)
    number = number plus 1
end

function sum(a, b) begin
    return a + b
end

if sum(10, 5) greater than number begin
    # Result: 15
    write(sum(10, 5))
end`} showHeader={false}/> -->

    <CodeBlock code={
`variavel mensagem = "Olá mundo!"
escreva(mensagem)

variavel numero = 0
enquanto numero menor que 10 inicio
    escreva(numero)
    numero = numero mais 1
fim

funcao soma(a, b) inicio
    retorne a mais b
fim

se soma(10, 5) maior que numero inicio
# Resultado: 15
    escreva(soma(10, 5))
fim`} showHeader={false}/>
    
            <!-- <div class="bg-contrast-dark p-md border border-primary "> -->
                <!-- <p>
                    variavel frase = "Olá, Mundo!"<br>
                    escreva(frase)<br>
                    <br>
                    variavel x = 0<br>
                    enquanto x &lt; 10 faça<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    escreva(x)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    x = x + 1<br>
                    fim<br>
                    <br>
                    funcao soma(a, b) inicio<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    retorne a + b<br>
                    fim<br>
                    <br>
                    escreva(soma(10, 20))<br>
                    # Resultado: 30
                </p> -->
            <!-- </div> -->
        </div>
    </section>
    <section>
        <div class="flex justify-between flex-wrap gap-xl w-full mb-xl">
            <div class="flex-1 flex items-center justify-center">
                <img src="{logotype}" alt="Logotype" class="h-1/2 max-h-32 w-auto">
            </div>
            <h1 class="flex-1 text-6xl">A linguagem de <span class="text-secondary">
                programação</span><br> <span class="text-primary">simplificada</span></h1>
        </div>
        <div class="flex gap-md">
            <div class="w-1/3">
                <!-- <CodeBlock code={
`variable condition = true

if not condition begin
    write("Condition is false")
end else begin
    write("Condition is true")
end

variable number = 0

while number less than 10 begin
    write(number)
    number = number + 1
end`} styles={'h-full'}/> -->
                <CodeBlock code={
`variavel condicao = verdadeiro

se nao condicao inicio
    escreva("Condição é falso")
fim senao inicio
    escreva("Condicao é verdadeiro")
fim

variavel numero = 0

enquanto numero menor que 10 inicio
    escreva(numero)
    numero = numero mais 1
fim`} styles={'h-full'}/>
            </div>
            <div class="w-1/3">
                <!-- <CodeBlock code={
`class Car begin
    init(color, year) begin
        me.color = color
        me.year = year
        me.km = 0
    end

    drive(distance) begin
        return me.km = me.km + distance
    end
end

variable car = Car('black', 2007)
write(car.drive(10))`} styles={'h-full'}/> -->
                <CodeBlock code={
`classe Carro inicio
    init(cor, ano) inicio
        esse.cor = cor
        esse.ano = ano
        esse.km = 0
    end

    drive(distancia) inicio
        retorne esse.km = esse.km 
            mais distancia
    end
end

variavel carro = Carro('preto', 2007)
escreva(carro.dirigir(10))`} styles={'h-full'}/>
            </div>
            <div class="w-1/3">
                <!-- <CodeBlock code={
`function fib(n) begin
    if n less than 2 begin
        return n
    end

    return fib(n - 1) + fib(n - 2)
end

write(fib(20))`} styles={'h-full'}/> -->
                <CodeBlock code={
`funcao fib(numero) inicio
    se numero menor que 2 inicio
        retorne numero
    fim

    retorne fib(numero menos 1) 
        mais fib(numero menos 2)
fim

escreva(fib(20))`} styles={'h-full'}/>
            </div>
        </div>
    </section>
    <!-- <section class="flex gap-32 flex-wrap-reverse">
        <img src="" alt="Playground" class="flex-1">
        <div class="flex-1">
            <h1 class="text-7xl mb-md">Experimente agora</h1>
            <p class="mb-lg text-justify">Teste Wiz agora neste editor de texto web com o interpretador integrado para executar seu código</p>
            <a href="/playground" class="button-yellow right-cut float-right">ENTRAR</a>
        </div>
    </section> -->
    <!-- <section class="text-center">
        <h1>Aprenda programação</h1>
        <p class="mb-lg mt-xl">Aprenda programação com nossos tutoriais e cursos gratuitos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis mollitia quia fugiat hic temporibus fuga ipsa sint quibusdam quos, error atque exercitationem, cum excepturi, quam blanditiis totam fugit voluptates quo.</p>
        <button class="button-yellow right-cut">ACESSAR</button>
    </section> -->
    <section>
        <h1 class="text-center mb-xl text-7xl">Por que <span class="text-primary">Wiz</span>?</h1>
        <div class="flex gap-md flex-wrap text-light-gray text-justify">
            <div class="card right-border-cut">
                <h2>Simples</h2>
                <p>Wiz contém uma sintaxe simples e objetiva para ser fácil de entender.
                    Termos técnicos e mensagens de erros complicados são evitados para facilitar o aprendizado.</p>
            </div>
            <div class="card right-border-cut">
                <h2>Intuitivo</h2>
                <p>Wiz funciona como nossa língua comum do cotidiano com uma gramática natural, de 
                    forma intuitiva - é como ler e escrever em sua língua nativa!</p>
            </div>
            <div class="card right-border-cut">
                <h2>Minimalista</h2>
                <p>Wiz é uma linguagem minimalista que busca reduzir a quantidade de conteúdo para aprender ao 
                    que realmente é necessário para facilitar a migração para linguagens e conceitos mais complexos.</p>
            </div>
           <div class="card right-border-cut">
                <h2>Acessível</h2>
                <p>Tudo de Wiz é disponível em diversos idiomas humanos - desde o site e a documentação e até a 
                    própria sintaxe e mensagens de erros. Programe usando a língua que quiser, a escolha é sua!</p>
            </div>
        </div>
    </section>
    <!-- <section>
        <h1 class="text-center text-7xl mb-md">The <span class="text-primary">Wiz Foundation</span></h1>
        <p class="text-xl text-center mb-xl">Wiz is a free and open-source project maintained by the 
            Wiz Foundation and it's community through the <a href="/community#license" 
            class="text-secondary hover:underline">GNU General Public License</a></p>
        <div class="flex gap-md flex-wrap"> 
            <div class="card right-border-cut">
                <h2>Get involved</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
                    est nobis ex explicabo, pariatur sit ab autem doloremque porro 
                    asperiores eum veniam natus atque exercitationem.</p>
                <button class="button-yellow right-cut">Contribute</button>
            </div>
            <div class="card right-border-cut">
                <h2>Sponsors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
                    est nobis ex explicabo, pariatur sit ab autem doloremque porro 
                    asperiores eum veniam natus atque exercitationem.</p>
                <button class="button-yellow right-cut">Donate</button>
            </div>
            <div class="card right-border-cut">
                <h2>Members</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
                    est nobis ex explicabo, pariatur sit ab autem doloremque porro 
                    asperiores eum veniam natus atque exercitationem.</p>
                <button class="button-yellow right-cut">Join</button>
            </div>
        </div>
    </section> -->
</main>

<style>
    section{
        @apply px-[10vw] mb-48;
    }

    .card{
        @apply p-6 space-y-sm flex-1 min-w-64;
    }
    .card h2{
        @apply text-2xl text-secondary;
    }
    .card button{
        @apply w-full;
    }
</style>

<script>
    // import wizInstaller from "$lib/assets/WizInstaller.exe";
    // import wizInstaller from "../../../static/WizInstaller.exe";
    import CodeBlock from "$lib/components/CodeBlock.svelte";
    import logotype from "$lib/img/WizLogotype.png";
</script>
