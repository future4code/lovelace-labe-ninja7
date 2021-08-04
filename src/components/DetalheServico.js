import React from 'react'
import styled from "styled-components";
import ListaDeServicos from './ListaDeServicos';


const DetalheServicoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`



class DetalheServico extends React.Component{
    
       



    render(){

        return( 
            <DetalheServicoContainer> 
            
            
            <h2>titulo do serviço </h2>
            <p>servico detalhado  </p>
            <p>Preço: </p>
            <p>Prazo:</p>
             

            <p>forma de pagamento  </p>

            <p>Cartão de Débito</p>


        <button onClick = {() => this.props.mudarTela("ListaDeServicos")} >Voltar para a lista</button>
                
        </DetalheServicoContainer>
        )
            
       }
       
    }

    
    
             

export default DetalheServico;
