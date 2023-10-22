import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../css/index.css'
export default function Navbar() {
  return (
    <Wrap>
        <LeftSection>
            <img src='/tempLogo.png' alt='logo'></img>
            <a className='coders-mt'> Coders <span>MT</span></a>
        </LeftSection>

        <RightSection>
            <Link to='#'><span>Team</span></Link>
            <Link to='#'><span>services</span></Link>
            <Link to='#'><span>pricing</span></Link>
        </RightSection>
    </Wrap>
  )
}

const Wrap = styled.div`
width:100%;
height:4rem;
background: linear-gradient(#04091ecc,#04091ecc), #000;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 3rem; 

@media screen and (max-width:760px){
  padding:0 1rem; 
 }

`

const LeftSection = styled.div`
display:flex;
align-items:center;
justify-content:center;
    
   img{
    height:3rem;
    padding:0;
   }
   a{
    font-size:1.5rem;
    color:white;
    font-family:var(--font-family-primary);
   }
   a>span{
    color:rgb(38, 255, 0);
   }

   @media screen and (max-width:1000px){
    img{
      height:2rem;
     }
     a{
      font-size:1.2rem;
     }
   }

   @media screen and (max-width:400px){
    a{font-size:1rem;}
   }

`

const RightSection = styled.div`
display:flex;
align-items:center;
  span{
    padding:0 1rem;
    color:white;
    text-transform: uppercase;
  }

  
  @media screen and (max-width:560px){
    span{
      padding:0 .3rem;
      font-size:.8rem;
    }
   }
`
