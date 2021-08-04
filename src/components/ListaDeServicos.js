import React from 'react'
import styled from "styled-components";
import CardProduto from './CardProduto';


const ListaDeServicosContainer = styled.div`
 
`


class ListaDeServicos extends React.Component {

    state = {
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
              "dueDate": "2021-12-30T00:00:00.000Z",
              "taken": false
            },
            {
                "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
                "title": "Cortar a grama",
                "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
                "price": 40,
                "paymentMethods": [
                  "PayPal",
                  "boleto"
                ],
                "dueDate": "2021-12-30T00:00:00.000Z",
                "taken": false
              }
          ]
    }


	render(){

        const conjuntoJobs = this.state.jobs.map((job) => {
            return <div>
              <CardProduto/>
              {/* <b>Serviço:</b> {job.title} 
            <br></br>
            <b>Descrição: </b>{job.description}
            <br></br> 
            <b>R$: </b>{job.price}
            <br></br>
            <b>Tipo de Pagamento: </b>{job.paymentMethods}    */}
            </div>
            
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

            </ListaDeServicosContainer>
			
		)

	}


	
}

export default ListaDeServicos;
