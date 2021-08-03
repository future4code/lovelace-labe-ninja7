import React from 'react'
import { AppContainer } from './components/AppContainer'
import DetalheServico from './components/DetalheServico'
import ListaDeServicos from './components/ListaDeServicos'
import { Home } from './components/Home'
import Carrinho from './components/Carrinho'
import Header from './components/Header'


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
				return <Home/>
			} else if(this.state.telaAtual === "Carrinho"){
				return <Carrinho/>
			}
		}

		
		return (
			
			<div>
			<Header
			mudarTela = {this.mudarTela}
			/>
			
			
			
            {renderizaTelaAtual()}
            
            </div>
			
			
		)

	}


	
}

export default App;
