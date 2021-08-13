import React from 'react'
import styled from 'styled-components';
import ListaDeServicos from './ListaDeServicos';

const CardServicoContainer = styled.div`

border: 1px solid black;
background-color: lightgray;
padding: 0 16px 16px 16px;
margin: 12px;
`


const CardServico = (props) => {
    
    return (
        <CardServicoContainer>

            
            <h3> Titulo: {props.title} </h3>
            <p> Preço: R${props.price} </p>
            <div> Prazo: {props.dueDate} </div>
                  
          
          <button onClick = {() => props.mudarTela("Ver detalhes")}> Ver detalhes</button>
          <button  onClick = {() => props.mudarTela("Adicionar ao Carrinho")}> Adicionar ao Carrinho</button>
        </CardServicoContainer>
      )
             
}

export default CardServico;
