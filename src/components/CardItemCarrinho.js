import React from 'react'
import styled from 'styled-components'



const CardItemCarrinhoContainer = styled.div`
  border: 2px solid black ;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
    
`

 class CardItemCarrinho extends React.Component {
  render() {
    return (
      <CardItemCarrinhoContainer>
        <label>Nome servico</label>
        <label>Preco servico</label>
      <button>Deletar item</button>
      </CardItemCarrinhoContainer>
    )
  }
}

export default CardItemCarrinho;