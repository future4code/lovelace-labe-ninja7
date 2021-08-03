import React from 'react'
import styled from "styled-components";


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
            return <li> {job.title} {job.description} {job.price} {job.paymentMethods} 
            
                
            </li>
        })
		return (
			
			
			<ListaDeServicosContainer>
                <h2>Lista de serviços cadastrados</h2>
			{conjuntoJobs}

            

            </ListaDeServicosContainer>
			
		)

	}


	
}

export default ListaDeServicos;
