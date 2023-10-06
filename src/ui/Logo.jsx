import { styled } from "styled-components";


const Img = styled.img`
    height: 60px;
    width: 65px;
`

export default function Logo(){
    
    return(
        <Img src="logo.png" alt="logo"/>
    )
}