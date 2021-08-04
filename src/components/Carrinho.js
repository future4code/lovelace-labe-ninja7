import React from 'react'
import CardItemCarrinho from './CardItemCarrinho'

 class Carrinho extends React.Component {
  render() {
    return (
      <div>
         < CardItemCarrinho/>
        <p>CARRINHO VAZIO</p>
        <br></br>
        <p><b>Valor Total: </b>R$</p>
        <button onClick = {""} >Finalizar Compra</button>
        <button onClick = {""} >Voltar Para Lista</button>
      </div>
    )
  }
}


export default Carrinho;
