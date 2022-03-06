import Eu2 from "./Eu2.png"

const Sobre = () => {
    return(
        <div class="separador">
            <br />
            <br />
            <section className="about">
                <article className="imgAbout">
                    <img src={Eu2} alt="" height={"350px"} width={"330px"}/>
                </article>
                <p style={{marginLeft: "10px"}} ></p>
                <article className="bg-opaco">
                    <h1>Sobre mim</h1>
                    <h4>Um aficionado da tecnologia.</h4><p>Sou estudante de Informática para internet e programação full-stack na Recode PRO, desde cedo sempre tive interesse em todo tipo de tecnologia com a qual pudesse interagir. Antes de entrar em qualquer curso procurava aprender de forma autodidata a programar, chegando adquirir grande conhecimento em python, o que me permitiu ter noções sobre a lógica da programação, mais tarde também fiz trabalho voluntário de web design na Rede Multilateral.
                    </p>
                    <p>Ao terminar o ensino médio tive a oportunidade de ingressar na IFPE no curso técnico de Informática para internet e também a passar pelo processo seletivo da Recode PRO ciclo 2021/2022. Estou sempre aprendendo e me atualizando para estar ciente sobre as tecnologias atuais, sou comunicativo e trabalho bem em equipe.</p>
                </article>
            </section>
        </div>
    )
}

export default Sobre;