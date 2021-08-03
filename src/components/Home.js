import React from 'react'
import styled from 'styled-components'

const CentralizarHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`   

export default class Home extends React.Component{
    render(){
        return(
            <CentralizarHome>
            <div>
         
              <h1>LabNinjas</h1>
              <br/>
              <h3>O talento certo no momento certo</h3>
            <button>Quero ser um ninja</button>
            <button>Contratar um ninja</button>

            </div>
            </CentralizarHome>
        )
    }
}