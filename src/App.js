import Componente from "./Componente";
import TelaNome from "./TelaNome";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("scorpion");
  const [endereco, setCEP] = useState({});

  const mudarNome = () => {
    console.log("muda nome");
    let novoNome = "italo lopes";
    setNome(novoNome);
  };

  //const pegarCep = async (cep)=>{
  const pegarCep = (cep) => {
    setCEP({
      cep: cep,
      rua: "Não encontrado",
      bairro: "Não encontrado",
      uf: "Não encontrado",
    });

    if (cep.length === 8) {
      try {
        console.log("1");
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            if(response.erro) throw new Error('Não exisate')
            setCEP(estadoAnterior =>{
              return{
              ...estadoAnterior, // pega os valores anteirior do estado
              rua: response.logradouro,
              bairro: response.bairro,
              uf: response.uf
              }
            });
          })
          .catch((error) => {
            console.error("Erro na solicitação:", error);
          }).finally(()=>{
            console.log('Funcionando ou nao acabou a promiesa')
          });
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    }

    console.log(endereco);
  };

  return (
    <div className="App">
      <TelaNome nome={nome} mudarNome={mudarNome} />
      <Componente
        type="number"
        valor={endereco}
        placeholder={" Cep:"}
        label={" Buscar Cep"}
        aoAlterarNome={pegarCep}
      />
    </div>
  );
}

export default App;

// sobre api fetch

          //.finally(); Ele permite que você execute
          // um bloco de código após a conclusão da promessa, 
          //independentemente de a promessa ter sido resolvida ou rejeitada.

        // precisa da url no minimio
        //  fetch('url',
        //  {method: 'POST',
        //  headers:{'Content-Type':'application/json'},
        //   body: JSON.stringify({obj}))
        // (.then().catch()


              //obter api
      //let res = await fetch()
      //  res =   await res.json()
      // como fazer sem padrao

       //throw new Error('Divisão por zero não é permitida.'); erro explicido de condição

            // setCEP({
            //   cep: response.cep,
            //   rua: response.logradouro,
            //   bairro: response.bairro,
            //   uf: response.uf
            // });