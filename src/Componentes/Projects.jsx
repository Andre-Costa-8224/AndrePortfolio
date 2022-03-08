import refugio from "./refugio.png"
import gbtravels from "./gbtravels.png"
import gbtravelsdotnet from "./gbtravelsdotnet.png"

const Projetos = () => {

  return (
    <div>
    <div className="App-projetos" >
      <section className="container pjsec" style={{marginBottom: "50px"}}>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{textAlign: "center", marginTop:"50px"}}>
      <img src={refugio} className="d-block w-porcent" alt="..."/>
      <p style={{color: "white", fontSize: "large", marginTop: "10px"}}> <a href="https://github.com/Squad21Github/ProjetoSquad21" target="_blank" rel="noopener noreferrer" className="btn-primary">Projeto feito em ASP.NET Core MVC </a> com meus colegas de squad</p>
    </div>
    
    <div class="carousel-item" style={{textAlign: "center", marginTop:"50px"}}>
      <img src={gbtravels} className="d-block w-porcent" alt="..."/>
      <p style={{color: "white", fontSize: "large", marginTop: "10px"}}><a href="https://github.com/Andre-Costa-8224/AgenciadeViagensReact-JDBC" target="_blank" rel="noopener noreferrer" className="btn-primary">Projeto feito em java e React</a> com JDBC (backend) e React.js (frontend)</p>
    </div>
    <div class="carousel-item" style={{textAlign: "center", marginTop:"50px"}}>
      <img src={gbtravelsdotnet} className="d-block w-porcent" alt="..."/>
      <p style={{color: "white", fontSize: "large", marginTop: "10px"}}><a href="https://github.com/Andre-Costa-8224/Sistemas1RecodePRO" target="_blank" rel="noopener noreferrer" className="btn-primary">Projeto feito em ASP.NET Core MVC</a></p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </section>
    </div>
    
    </div>
  /*<div className="App-projetos" style={{fontSize: "x-large", fontWeight: "bold", color: "white"}}>Em andamento...</div>*/);
};

export default Projetos;
