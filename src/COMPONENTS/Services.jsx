import React from 'react'
import styled from 'styled-components'
import '../css/index.css'
import Tilt from 'react-vanilla-tilt'

export default function Services() {
  return (
    <Wrap>
        <TopSection>
          <h2>services</h2>
          <p>What do we provide ? </p>
        </TopSection>

        <MiddleSection>

          <div className='card-basic card'>
          <a><h2 className='plan-name'>basic</h2></a>
          <h2 className='price'>₹ 349</h2>
            <ul className='items'>
              <li>how does web works </li>
              <li>master html</li>
              <li>css + animations</li>
              <li>basic javascript</li>
            </ul>
          </div>

          <div className='card-premium card'>
            <a><h2 className='plan-name'>premium</h2></a>
            <img src='./images/crown.png'></img>
            <h2 className='price'>₹ 749</h2>
            <ul className='items'>
              <li>how does web works </li>
              <li>master html</li>
              <li>advance css</li>
              <li>advance javascript</li>
              <li>introduction to react js</li>
            </ul>
          </div>
        </MiddleSection>
        <BottomSection>
          <button>enroll for a free trial now</button>
        </BottomSection>
    </Wrap>
  )
}

const Wrap = styled.div`
width:100%;
box-sizing:border-box;
height:100%;
padding:5rem 3rem 3rem 3rem;
display:flex;
align-items:flex-start;
flex-direction:column;
background:var(--blackBlue-3);
overflow:hidden;
@media screen and (max-width:630px){  
  padding:5rem 1rem 3rem 1rem;
 }
`
const TopSection = styled.div`
display:inline-block;
text-align:center;
width:100%;
h2{
  text-transform:uppercase;
  font-family:var(--font-family-primary);
  font-size:2rem;
  color:white;
}
p{
  font-family:var(--font-family-paragraph);
  color: rgb(189, 189, 189);
  font-size:1.1em;
  width:100%;
}
`

const MiddleSection = styled.div`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:2rem 0;

 .card{
  margin:0 3rem;
  height:21rem;
  width:18rem;
  background: var( --blackBlue-1);
  display:flex;
  align-items:center;
  flex-direction:column;
  border-radius:1rem;
  position:relative;
  cursor:pointer;
 }

 .card img{
  width:70px;
  position:absolute;
  top:-2rem;
  right:-2rem;
  transform:rotate(45deg);
 }

 .card a{
  height:20%;
  width:100%;
  display:grid;
  place-items:center;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
 }

 .card a h2{
  color:white;
  text-transform:uppercase;
 }
 
 .price{
  font-size:2rem;
  margin:1rem;
  color:white;

 }
 ul li{
  margin:.5rem 0;
  color: rgb(189, 189, 189);
 }




 @media screen and (max-width:760px){
  .card{
    width:100%;
    margin:0 1rem;
  }
  .price{
    font-size:1.5rem;
  }
 }

 @media screen and (max-width:560px){
  flex-direction:column;
  .card{
    width:70%;
    margin:.5rem 0;
  }
 }

 @media screen and (max-width:400px){

  .card{
    width:80%;
  }
 }

 @media screen and (max-width:350px){

  .card{
    width:90%;
  }
 }
 


`
const BottomSection = styled.div`
display:block;
margin:auto;
 button{
  padding:1rem 1rem;
  font-size:1rem;
  text-transform:uppercase;
  cursor:pointer;
  background:var(--color-primary);
  border-radius:100rem;
  border:2px solid var(--color-primary);
 }
 button:hover{
  background:transparent;
  color:var(--color-primary)
 }

 
 @media screen and (max-width:760px){
  button{
    padding:1rem .5rem;
   }
 }
`