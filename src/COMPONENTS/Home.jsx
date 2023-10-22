import React from 'react'
import styled from 'styled-components'
import '../css/index.css'


export default function Home(){


  return (
    <Wrap>
        <LeftSection>
            <h1 className='home-primary-text'>
                Wanna learn how to build a website out of scratch?
            </h1>
            <p className='home-secondary-text'>
                We teach you how to code using html , css and js and take you from
                making your first website to learning advance web development.
            </p>
            <p>Enroll now for a free trial now !</p>
            <button className='home-enrollnow-btn'>enroll now</button>
        </LeftSection>
        
        <RightSection>
            <img  src='/images/coding workshop-bro.svg'></img>
        </RightSection>
    </Wrap>
  )
}

const Wrap = styled.div`
width:100%;
height:100%;
background:linear-gradient(#04091ecc,#04091e66), #000;
padding:5rem 3rem;
display:flex;
align-items:center;
justify-content:space-between;

@media screen and (max-width:630px){
 flex-direction:column;   
 padding:5rem 1rem;
}
`

const LeftSection = styled.div`
height:80%;
width:40vw;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;

 h1{
    font-size:2.2rem;
    text-transform:uppercase;
    color:white;
 }
 p{
    color: rgb(189, 189, 189);
    font-size:1.1rem;
 }
 .home-secondary-text{
    margin:2rem 0 1rem 0;
    color: rgb(189, 189, 189);

 }
    button{
        margin-top:2rem;
        padding:.8rem 1.5rem;
        font-size:1.1rem;
        cursor:pointer;
        background:var(--color-primary);
        border:2px solid var(--color-primary);
        border-radius:100px;
        position:relative;
        overflow:hidden;
        text-transform:capitalize;
    }
    button::after{
        content:'';
        top:-1rem;
        transform:translateX(100%);
        width:100%;
        height:220px;
        position: absolute;
        z-index:1;
        background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255, 255, 255, 0.555)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255, 255, 255, 0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 );
        animation: slide 1.4s infinite;
    }
    button:hover{
        background:transparent;
        color:var(--color-primary);
    }


    @media screen and (max-width:1000px){
        h1{
            font-size:1.4rem;

         }
         p{
            font-size:1rem;
         }

         button{
            padding:.6rem 1rem;
            font-size:1rem;
        }
    }

    @media screen and (max-width:630px){
        width:80%;

        .home-secondary-text{
            margin:1rem 0;
        }
    }

    @media screen and (max-width:560px){
        width:90%;
       }



`

const RightSection = styled.div`
width:40vw;
 
 img{
    width:100%;
 }

 @media screen and (max-width:630px){
    width:100%;
    display:grid;
    place-items:center;
    margin-top:2rem;


    img{
        width:80%;
     }
}

`
