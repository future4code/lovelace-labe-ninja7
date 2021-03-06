import React from 'react'
import { AppContainer } from './components/AppContainer'
import DetalheServico from './components/DetalheServico'
import ListaDeServicos from './components/ListaDeServicos'
import  Home from './components/Home'
import Carrinho from './components/Carrinho'
import Header from './components/Header'
import Cadastro from './components/Cadastro'




class App extends React.Component {
	state = {
		telaAtual : "Home"
		
	  }

	  mudarTela = (tela) => {
	this.setState( {telaAtual: tela})
}
	
	
	
	render(){

		const renderizaTelaAtual = () => {
			if(this.state.telaAtual === "Home"){
				return <Home 
				mudarTela = {this.mudarTela}
				/>
			} else if(this.state.telaAtual === "Carrinho"){
				return <Carrinho
				mudarTela = {this.mudarTela}
				/>
			}
		}

		const renderizaTela = () => {
            if(this.state.telaAtual === "Quero ser um ninja"){
                return <Cadastro/>
            }else if(this.state.telaAtual === "Contratar um ninja"){
                return <ListaDeServicos
				mudarTela = {this.mudarTela}
				/>
            }else if(this.state.telaAtual === "Ver detalhes"){
				return <DetalheServico
				mudarTela = {this.mudarTela}
				/>
			}else if (this.state.telaAtual === "ListaDeServicos"){
					return <ListaDeServicos/>
				}
        }

		

		

		return (
			
			<div>

				
			<Header
			mudarTela = {this.mudarTela}
			/>
		
			
            {renderizaTelaAtual()}
			{renderizaTela()}
            
            </div>
			
			
		)

	}


	
}
 
	export default App;
