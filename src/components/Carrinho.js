import React from 'react'
import styled from 'styled-components';
import CardItemCarrinho from './CardItemCarrinho'

const CarrinhoContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const CarrinhoListaContainer = styled.div`
  display: grid;
  gap: 4px;
  padding: 16px;
`

 class Carrinho extends React.Component {
  render() {
    return (
      <div>
         
        <p>CARRINHO VAZIO</p>
        <CarrinhoListaContainer>
        < CardItemCarrinho/>
        < CardItemCarrinho/>
        < CardItemCarrinho/>

        <p><b>Valor Total: </b>R$</p>

        </CarrinhoListaContainer>
        <br></br>
        
        <button onClick = {() => this.props.mudarTela("Home")} >Finalizar Compra</button>
        <button onClick = {() => this.props.mudarTela("ListaDeServicos")} >Voltar Para Lista</button>
      </div>
    )
  }
}


export default Carrinho;
