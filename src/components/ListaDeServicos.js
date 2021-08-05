import React from 'react'
import styled from "styled-components";
import CardServico from './CardServico';
import Carrinho from './Carrinho';
import DetalheServico from './DetalheServico';


const ListaDeServicosContainer = styled.div`
 
`


class ListaDeServicos extends React.Component {

    state = {

      telaAtual: "ListaDeServicos",
      
        jobs: [
          {
            "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
            "title": "Cortar a grama",
            "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
            "price": 40,
            "paymentMethods": [
              "PayPal",
              "boleto"
            ],
            "dueDate": "12/08/26",
            "taken": false
          },
          {
            "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
            "title": "Consertar o telhado",
            "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
            "price": 40,
            "paymentMethods": [
              "PayPal",
              "boleto"
            ],
            "dueDate": "20/05/21",
            "taken": true
          },
          ]
    }


    mudarTela = (tela) => {
      this.setState( {telaAtual: tela})
    }

	render(){

      const renderizaTelaAtual = () => {
        if(this.state.telaAtual === "Ver detalhes"){
          return <DetalheServico
          mudarTela = {this.mudarTela}
          />
        }else if( this.state.telaAtual === "Adicionar ao Carrinho"){
          return <Carrinho/>
        }
      }
   
      //renderizando a lista de servicos na tela e passando por props o que eu quero que apareça no card de serviços.
        const conjuntoJobs = this.state.jobs.map((job) => {
            return <CardServico
              key = {job.id}
              mudarTela = {this.props.mudarTela}
              title = {job.title}
              prazo = {job.dueDate}
              price = {job.price}
             
                       
              />        
              
                       
        })

      
		return (
			
			
			<ListaDeServicosContainer>
            <input type="text" value ="" placeholder="Valor Mínimo" />
            <input type="text" value ="" placeholder="Valor Máximo"/>
            <input type="text" value ="" placeholder="Buscar Título ou Descrição"/>
            <select name="info[]" size="1" >
            <option value="">Sem Ordenação</option>
            <option value="">Menor Valor</option>
            <option value="">Maior Valor</option>
            <option value="">Título</option>
            <option value="">Prazo</option>
            </select>
              <h2>Lista de serviços cadastrados</h2>
			          {conjuntoJobs}
                 {renderizaTelaAtual()}
            </ListaDeServicosContainer>
			
		)

	}


	
}

export default ListaDeServicos;
