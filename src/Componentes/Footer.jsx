import "../App.css"

const Rodape = () => {
    return(
        <div className="App-pag fundoSobre">
            <footer>
                <span>&copy; André F S Costa</span> |
                <span> {Date().toLocaleUpperCase().slice(3,15)}</span>
            </footer>
        </div>
    )
}

export default Rodape;