import React from 'react'
import styled from 'styled-components'
import '../css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default function Contact() {
  return (
    <Wrap>
      <div className='title'><h2>Get in <span>  touch</span> </h2></div>

      <div className='left-and-right-section-container'>
        <LeftSection>
          <Top>
            <div className='phone'><FontAwesomeIcon className='icon' icon={faPhone}/><p>+91 1234567890</p></div>
            <div className='email'> <FontAwesomeIcon className='icon' icon={faEnvelope}/><p> codewithoisik@gmail.com</p></div>
            <div className='address'><FontAwesomeIcon className='icon' icon={faPaperPlane}/><p> usa, new york , silicon valley , building 2, flat 2</p></div>
          </Top>

          <Bottom>
          <FontAwesomeIcon icon={faWhatsapp}   className='whatsapp social-icon'/>
          <FontAwesomeIcon icon={faInstagram} className='instagram social-icon'/>
          <FontAwesomeIcon icon={faFacebookF} className='facebook social-icon'/>
          <FontAwesomeIcon icon={faTwitter} className='twitter social-icon'/>
          </Bottom>
        </LeftSection>

        <RightSection>
          <form>
            <div className='name'>
              <input placeholder='first name'/>
              <input placeholder='last name'/>
            </div>     
            <input placeholder='email id'/>
            <input placeholder='subject'/>
            <textarea placeholder='enter your message' rows={7}/>
            <button > send </button>
          </form>
        </RightSection>
      </div>
    </Wrap>

  )
}

const Wrap = styled.div`
width:100%;
height:max-content;
background:var(--blackBlue-2);
padding:3rem;

  .left-and-right-section-container{
    display:flex;
    height:100%;
    width:100%;
  }


.title{
  display:flex;
  justify-content:center;
  margin:0 0 2rem 0;
}
h2{
  font-size:2rem;
  color:white;
  display:block;
  text-transform:uppercase;
}
h2 span{
  color:var(--color-trinary);
}

@media screen and (max-width:760px){
padding:3rem 1rem;
  .left-and-right-section-container{
    align-items:center;
    flex-direction:column-reverse;
  }
}
`

const LeftSection = styled.div`
width:40%;
height:30rem;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;

@media screen and (max-width:760px){
    width:100%;
    margin:1rem 0;
}
`

const Top = styled.div`
height:50%;
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
padding:2rem;
background:var(--bg-stylish-grey);
  div{
    display:flex;
    align-items:center;
    margin-bottom:1rem;
  }
  div p{
    color: rgba(230, 230, 230, 0.879);
    font-family:var(--font-family-primary);
  }
  .address p{
    width:70%;
  }

  .icon{
    padding:1rem;
    box-sizing:border-box;
    background:var(--blackBlue-1);
    color: rgba(230, 230, 230, 0.879);
    border-radius:5rem;
    margin:0 1rem 0 0;
  }

  @media screen and (max-width:760px){
    padding:.5rem;
    margin:1rem 0;
}

`


const Bottom = styled.div`
display:flex;
width:100%;
height:100%;
margin:1rem 0 0 0;
background:var(--blackBlue-1);
display:flex;
align-items:center;
justify-content:center;

.social-icon{
  margin:0 1rem;
  width:1.5rem;
  height:1.5rem;
  padding:.5rem;
  border-radius:5rem;
  color:white;
  cursor:pointer;
}
.whatsapp{
  background: rgb(61, 255, 3);
  border:2px solid rgb(61, 255, 3);
}
.twitter{
  background:rgb(0, 221, 255);
  border:2px solid rgb(0, 221, 255);
}
.facebook{
  background:rgb(0, 38, 255);
  border:2px solid rgb(0, 38, 255);
}
.instagram{
  background:linear-gradient(to bottom,rgb(254, 63, 0) ,20% ,rgb(224, 0, 37));
  border:2px solid rgb(224, 0, 37);
}
 

.whatsapp:hover{
  color: rgb(61, 255, 3);
  background:transparent;
}
.twitter:hover{
  color:rgb(0, 221, 255);
  background:transparent;
}

.facebook:hover{
  color:rgb(0, 38, 255);
  background:transparent;
}

.instagram:hover{
  color:rgb(224, 0, 37);
  background:transparent;
}
`

const RightSection = styled.div`
width:60%;
display:flex;
justify-content:flex-end;

  form{
    width:90%;
    height:30rem;
    background-color: rgba(225, 225, 225, 0.924);
    padding:2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

  }
  .name{
    display:flex;
    justify-content:space-between;
    width:100%;
  }
  
 

  input,textarea,button{
    font-size:1.05rem;
    border-radius:.1rem;
    height:3rem;
    padding:.2rem .3rem;
    width:100%;
    margin:.5rem 0;
    outline:none;
    border:none;
  }

  .name > input{
    width:45%;
    height:2rem;
  }

  textarea{
    height:100%;
  }
  button{
    height:4rem;
    background:var(--color-trinary);
    color:white;
    text-transform:uppercase;
    cursor:pointer;
  }

  @media screen and (max-width:760px){
    width:100%;
    justify-content:center;

    form{
      width:100%
    }
  }



`

