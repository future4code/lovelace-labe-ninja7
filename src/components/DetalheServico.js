import React from 'react'
import styled from "styled-components";
import ListaDeServicos from './ListaDeServicos';
import axios from "axios"
import { baseUrl, headers } from "../constantes/index";
import CardServico from './CardServico';
const DetalheServicoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
// nesse componente já está imprimindo os ids, mas sempre os mesmos.
class DetalheServico extends React.Component{
    state = {
       job: [ 
        {}
    ] 
    }
    componentDidMount = () => {
        this.pegarServicoId()
    }
    pegarServicoId = (jobsId) => {
        axios.get(`${baseUrl}/jobs/${jobsId}`, headers)
        .then((res)=> {
            console.log(res.data.id)
        }).catch((err) => {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        })
    }
    render(){
        const job = this.state.job.map((job) => {
            return <ul key = {job.id}> 
            {job.title} 
            {job.description} 
            {job.price} {job.dueDate} {job.paymentMethods} </ul>
        })
        return( 
            <DetalheServicoContainer> 
           {job}
        <button onClick = {() => this.props.mudarTela("ListaDeServicos", " ")} >Voltar para a lista</button>
        </DetalheServicoContainer>
        )
       }
    }
export default DetalheServico;