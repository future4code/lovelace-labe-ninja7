import React from 'react'
import styled from 'styled-components'
import { headers, baseUrl } from "../constantes/index"
import axios from 'axios'


const CentralizarCadastro = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`
const BordaFinal = styled.div`
    border: 5px solid blue;
    margin-top: 20px
`


export default class Cadastro extends React.Component{

    state = {
       inputTituloValue: "",
        inputDescricaoValue: "",
        inputPrecoValue: 0,
        inputDataValue: "",
        inputMetodoPagamentoValue: ["PayPal", "boleto"]
    }

    changeInputTituloValue = (e) => {
        this.setState({inputTituloValue: e.target.value})
    }

    changeInputDescricaoValue = (e) => {
        this.setState({inputDescricaoValue: e.target.value})
    }

    changeInputPrecoValue = (e) => {
        this.setState({inputPrecoValue: e.target.value})
    }

    changeInputDataValue = (e) => {
        this.setState({inputDataValue: e.target.value})
    }

    changeInputMetodoPagamentoValue = (e) =>{
        this.setState({inputMetodoPagamentoValue: e.target.value})
    }

    criarServico = () =>{
        const body = {
            title: this.state.inputTituloValue,
            description: this.state.inputDescricaoValue,
            price: this.state.inputPrecoValue,
            paymentMethods: this.state.inputMetodoPagamentoValue,
            dueDate: this.state.inputDataValue
        }

        axios.post(`${baseUrl}/jobs`, body, headers)

        .then((res) => {
            //console.log(res)
            alert("Serviço adicionado com sucesso")
          
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    
    render(){
        return(
            
            <CentralizarCadastro>    
            <div>
                <BordaFinal>
                <h1>Cadastre o seu serviço</h1>
            
            <input value={this.state.inputTituloValue} onChange={this.changeInputTituloValue} type="text" placeholder="Titulo" />
            <br/><br/>
            <input value={this.state.inputDescricaoValue} onChange={this.changeInputDescricaoValue} type="text" placeholder="Descrição"/>
            <br/><br/>
            <input value={this.state.inputPrecoValue} onChange={this.changeInputPrecoValue} type="number" placeholder="Preço"/>
            <br/><br/>
           
            
            <select value multiple  >
            <option>PayPal</option>
            <option>boleto</option>
            
            </select>
            <br/><br/>

            <input value={this.state.inputDataValue} onChange={this.changeInputDataValue} type="date"/>
            <br/><br/>
            <button onClick={this.criarServico}>Cadastrar serviço</button>
            </BordaFinal>
            
            </div>
            </CentralizarCadastro>
          
        )
    }
}