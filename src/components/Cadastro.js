import React from 'react'
import styled from 'styled-components'

const CentralizarCadastro = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    text-align: center
`


export default class Cadastro extends React.Component{
    render(){
        return(
            <CentralizarCadastro>
            <div>

                <h1>Cadastre o seu serviço</h1>

            
            <input  type="text" placeholder="Título" />
            <br/><br/>
            <input type="text" placeholder="Descrição"/>
            <br/><br/>
            <input type="text" placeholder="Preço"/>
            <br/><br/>
           
            
            <select name="info[]" size="5" multiple>
            <option value="">Cartão de Débito</option>
            <option value="">Cartão de Crédito</option>
            <option value="">PayPal</option>
            <option value="">Boleto</option>
            <option value="">Pix</option>
            </select>
            <br/><br/>
            
            
            <input type="date"/>
            <br/><br/>
            <button>Cadastrar Serviço</button>
            
            </div>
            </CentralizarCadastro>
          
        )
    }
}