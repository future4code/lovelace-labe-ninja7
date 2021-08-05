import React from 'react'
import styled from "styled-components";
import ListaDeServicos from './ListaDeServicos';
import axios from "axios"
import { baseUrl, headers } from "../constantes/index";
import CardServico from './CardServico';


const DetalheServicoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
// nesse componente já está imprimindo os ids, mas sempre os mesmos.


class DetalheServico extends React.Component{
    
    state = {
        

    }
       
    componentDidMount = () => {
        this.pegarServicoId()
    }

    pegarServicoId = () => {
        axios.get(`${baseUrl}/jobs/${this.props.jobsId}`, headers).then((res)=> {
            //console.log(res.data.id)
            this.setState({jobs: res.data.id})
        }).catch((err) => {
            console.log(err.response)
        })
    }

    render(){
        
        return( 
            <DetalheServicoContainer> 
            
            
            <h2>titulo do serviço </h2>
            <p>servico detalhado  </p>
            <p>Preço: </p>
            <p>Prazo:</p>
             

            <p>forma de pagamento  </p>

            <p>Cartão de Débito</p>
           

        <button onClick = {() => this.props.mudarTela("ListaDeServicos", " ")} >Voltar para a lista</button>
                
        </DetalheServicoContainer>
        )
            
       }
       
    }

    
    
             

export default DetalheServico;
