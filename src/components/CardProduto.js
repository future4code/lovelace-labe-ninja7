import React from 'react'
import styled from 'styled-components';

const CardProdutoContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
`

const CardProduto = (props) => {
    
    return (
        <CardProdutoContainer>
          <p>Serviço</p> <br></br>
          <p>preço:</p>
          <p>prazo:</p>
          <button onClick = {() => props.mudarTela("Ver detalhes")}> Ver detalhes</button>
          <button  onClick = {() => props.mudarTela("Adicionar ao Carrinho")}> Adicionar ao Carrinho</button>
        </CardProdutoContainer>
      )
             
}

export default CardProduto;