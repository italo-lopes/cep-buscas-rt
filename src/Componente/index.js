import './Componente.css'

const Componente=({type ='text', valor, placeholder='nome', label ='Buscar',aoAlterarNome})=>{
    
    const aoAlterar = (e)=>{
            console.log('n muda o estado no DOM VIRTUAL')
            console.log(e.target.value)

            // logica de negocio
            aoAlterarNome(e.target.value)
    }



    return(
        <div className= 'campo'>
            <div className= 'campo__tipo'>
                <h3>API DE Teste 
                    <a href ='https://viacep.com.br/ws/65020260/json/'>Acesse a api do cep:650202-60</a>
                </h3>
                <label className= 'campo__label'>{`${label} ex : 650202-60`}</label>
                <input  
                    required
                    type={type} 
                    // value={valor.cep} regra de negocio
                    onChange={aoAlterar}
                    placeholder={` Digitar o ${placeholder}`}
                />
                <ul>
                    <li> CEP: {valor.cep}</li>
                    {valor.cep //VERIFICA A BUSCA
                        ? <div>
                           <li>Rua: {valor.rua}</li>
                           <li>Bairro: {valor.bairro}</li>
                           <li>UF: {valor.uf}</li>
                            </div>
                        : ''}
                </ul>
            </div>
        </div>
    )
}

export default Componente