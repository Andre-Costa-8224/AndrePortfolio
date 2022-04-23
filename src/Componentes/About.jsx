import Eu2 from "./Eu2.png"

const Sobre = () => {
    return(
        <main class="separador">
            <br />
            <section className="about">
                <article className="imgAbout">
                    <img className="Eu2" src={Eu2} alt="André"/>
                </article>
                <p style={{marginLeft: "10px"}} ></p>
                <article className="bg-opaco">
                    <h1>Sobre mim</h1>
                    <h4>Um aficionado da tecnologia.</h4><p>Sou estudante de Informática Para Internet no IFPE e formado em programação full-stack pela Recode PRO, desde cedo sempre tive interesse em todo tipo de tecnologia com a qual pudesse interagir. Antes de entrar em qualquer curso procurava aprender de forma autodidata a programar, chegando adquirir grande conhecimento em python, o que me permitiu ter noções sobre o mundo da programação, mais tarde também fiz trabalho voluntário de web design na Rede Multilateral contribuindo no design do site.
                    </p>
                    <p>Fiz projetos utilizando spring boot, react.js e Asp.Net MVC tanto individualmente quanto em grupo, um deles com intuito de impacto social em prol dos <a href="http://squad21-front-react-js.vercel.app" target="_blank" rel="noopener noreferrer" className="linkblue">refugiados</a>. Estou sempre aprendendo e me atualizando para estar ciente sobre as tecnologias atuais, sou comunicativo e trabalho bem em equipe.</p>
                </article>
            </section>
            </main>
        
    )
}

export default Sobre;
