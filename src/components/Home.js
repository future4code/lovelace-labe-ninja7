import React from 'react'
import styled from 'styled-components'
import ListaDeServicos from './ListaDeServicos'
import Cadastro from './Cadastro'

const CentralizarHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`   

 class Home extends React.Component{


    render(){
        
        return(
            <CentralizarHome>
            <div>
         
              <h1>LabeNinjas</h1>
              <br/>
              <h3>O talento certo no momento certo</h3>
            <button onClick = {() => this.props.mudarTela("Quero ser um ninja")}>Quero ser um ninja</button>
            <button onClick = {() => this.props.mudarTela("Contratar um ninja")}>Contratar um ninja</button>

            </div>

            
            </CentralizarHome>
        
         
        )

    }
}

export default Home;