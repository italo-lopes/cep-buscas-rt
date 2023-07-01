import './TelaNome.css'

const TelaNome = (props)=>{
    
    console.log(props)

    return(
        <div className="tela__nome">
            <h1>{props.nome}</h1>
            <button onClick={()=>props.mudarNome()}>Hackear Nome Real</button>
        </div>    
    )
}

export default TelaNome