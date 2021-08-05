import React from 'react'
import styled from 'styled-components';
import ListaDeServicos from './ListaDeServicos';

const CardServicoContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: fit-content;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
`

const CardServico = (props) => {
    
    return (
        <CardServicoContainer>

            
            <div> Titulo: {props.title} </div>
            <div> Preço: {props.price} </div>
            <div> Prazo: {props.prazo} </div>
                  
          
          <button onClick = {() => props.mudarTela("Ver detalhes", props.jobId)}> Ver detalhes</button>
          <button  onClick = {() => props.mudarTela("Adicionar ao Carrinho")}> Adicionar ao Carrinho</button>
        </CardServicoContainer>
      )
             
}

export default CardServico;