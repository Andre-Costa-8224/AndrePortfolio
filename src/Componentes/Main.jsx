import Eu from "./Eu.png";

const Principal = () => {
  return (
    <div>
        <main className="App-header">
        <section className="mainArts">
            <article className="transicao">
              <h1>Eu sou André</h1>
              <p>Desenvolvedor full-stack</p>
              <p>Habilidades com foco em | C# | Java | Javascript | React.JS | HTML e CSS |</p>
              <button className="btn btn-primary">Sobre mim</button>
            </article>
            <article>
              <img src={Eu} alt="" height={"400px"} className="AppImg"/>
            </article>
        </section>
        </main>
    </div>
  );
};

export default Principal;
