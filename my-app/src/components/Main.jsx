import Cards from "./Cards/Cards"

export default function Main (){
    return (
        <main className="Main" id="ABOUT">
            <h1 id="About">SOBRE</h1>

            <div class="ABOUT">
                <p id="Text-About">
                Olá 👋🏼 seja bem-vindo! Meu nome é maycon, Entrei no mercado de
                tecnologia a 2 anos 9 meses, atualmente trabalho como freelancer você
                pode ver alguns desses meus projetos Minha paixão pela programação e
                minha busca contínua por aprender e crescer me impulsionam a criar
                soluções que fazem a diferença. Dê uma olhada em meu portfólio e
                descubra como posso contribuir para seus projetos." <br />
                Minha jornada no mundo da programação é marcada por um compromisso
                constante com a aprendizagem e o crescimento. Sempre em busca de
                aprimorar minhas habilidades, estou determinado a elevar o padrão e
                entregar resultados que façam a diferença.
                </p>

            </div>

            <section class="Tecnologias">

                <div id="Skills"><p>👨‍💻Skills-Experiencia</p></div>
                
                <div id="Skills-Icones">
                    <i id="html" class="fa-brands fa-html5"></i>
                    <i id="css" class="fa-brands fa-css3-alt"></i>
                    <i id="JavaScript" class="fa-brands fa-js"></i>
                    <i id="Python" class="fa-brands fa-python"></i>
                    <i id="react" class="fa-brands fa-react"></i>
                    <i id="node" class="fa-brands fa-node"></i>
                    <i id="git" class="fa-brands fa-git-alt"></i>
                    <i id="github" class="fa-brands fa-github"></i>
                </div>

            </section>

            <Cards></Cards>

    </main>
    )
}



