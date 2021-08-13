import React from 'react'
import styled from "styled-components";
import CardServico from './CardServico';
import Carrinho from './Carrinho';
import DetalheServico from './DetalheServico';
import axios from 'axios'
import { baseUrl, headers } from "../constantes/index";
const ListaDeServicosContainer = styled.div`
`
class ListaDeServicos extends React.Component {
    state = {
      telaAtual: "ListaDeServicos",
        jobs: [],
        jobsId: ""
    }
    componentDidMount =() => {
      this.pegarTodosServicos()
    }
    pegarTodosServicos = () => {
      axios.get(`${baseUrl}/jobs`, headers)
      .then((res)=> {
        console.log(res)
       this.setState({jobs: res.data.jobs} )
    }).catch((err)=> {
      console.log(err.response)
    })
    }
    mudarTela = (tela, jobsId) => {
      this.setState( {
        telaAtual: tela,
        jobsId: jobsId
      })
    }
  render(){
      //renderizando a lista de servicos na tela e passando por props o que eu quero que apareça no card de serviços.
        const conjuntoJobs = this.state.jobs.map((job) => {
            return <CardServico
              key = {job.id}
              mudarTela = {this.props.mudarTela}
              title = {job.title}
              prazo = {job.dueDate}
              price = {job.price}
              />        
        })
    return (
      <ListaDeServicosContainer>
            <input type="text" value ="" placeholder="Valor Mínimo" />
            <input type="text" value ="" placeholder="Valor Máximo"/>
            <input type="text" value ="" placeholder="Buscar Título ou Descrição"/>
            <select name="info[]" size="1" >
            <option value="">Sem Ordenação</option>
            <option value="">Menor Valor</option>
            <option value="">Maior Valor</option>
            <option value="">Título</option>
            <option value="">Prazo</option>
            </select>
              <h2>Lista de serviços cadastrados</h2>
                {conjuntoJobs}
            </ListaDeServicosContainer>
    )
  }
}
export default ListaDeServicos;