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
        inputPrecoValue: "",
        inputDataValue: "",
        inputMetodoPagamentoValue: []
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
        // achei na internet um modelo pra colocar o array no option
        let value = Array.from(e.target.selectedOptions, option => option.value) 
        this.setState({inputMetodoPagamentoValue: value})
    }

    criarServico = () =>{
        const body = {
            title: this.state.inputTituloValue,
            description: this.state.inputDescricaoValue,
            price: Number(this.state.inputPrecoValue), // adicionei o local da onde colocar o number HAHHAA
            paymentMethods: this.state.inputMetodoPagamentoValue,
            dueDate: this.state.inputDataValue
        }

        axios.post(`${baseUrl}/jobs`, body, headers)

        .then((res) => {
            console.log(res)
            alert(`O serviço ${this.state.inputTituloValue} foi criado com sucesso!`)
            this.setState({
                inputTituloValue: "",
                inputDescricaoValue: "",
                inputPrecoValue: "",
                inputDataValue: "",
                inputMetodoPagamentoValue: []
            })
          
        })
        .catch((err) => {
            console.log(err.response)
            alert("ERROR")

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
           
            
            <select value={this.state.inputMetodoPagamentoValue} onChange={this.changeInputMetodoPagamentoValue} multiple name="select" >
            <option>PayPal</option>
            <option>boleto</option>
            <option>Cartão Débito</option>
            <option>Cartão Crédito</option>
            
            
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