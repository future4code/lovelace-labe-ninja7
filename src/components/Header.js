import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
    background-color:blue;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    
    

`

const ButtonsContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

//pode ser function pq n precisa ter estado nesse componente

const Header = (props) => {
    
        return(
            <HeaderContainer> 
            <h2>LABNINJA</h2>
            <button onClick = {() => props.mudarTela("Home")} >Home</button>
            <button onClick = {() => props.mudarTela("Carrinho")} >Carrinho</button>

            </HeaderContainer>
        ) 
                 
    }



    export default Header;
