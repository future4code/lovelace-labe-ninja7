import React from 'react'
import styled from "styled-components";


const DetalheServicoContainer = styled.div`

`

//esse componente não mudará, portanto pode ter a sintaxe de função

const DetalheServico = (props) => {
    
    return(
        <DetalheServicoContainer> 
        <h2>titulo do serviço</h2>
        <p>servico detalhado</p>
        <p>Preço: </p>
        <p>Prazo:</p>
             <p>Tipo: Criação de Site</p>

        <p>forma de pagamento</p>

            <p>Cartão de Débito</p>
        
        <button onClick = {() => props.mudarTela("InfoPlaylist")} >Voltar para a lista</button>

        </DetalheServicoContainer>
    ) 
             
}



export default DetalheServico;