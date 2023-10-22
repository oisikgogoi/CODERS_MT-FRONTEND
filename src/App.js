import React, { useEffect , useState} from 'react'
import Contact from './COMPONENTS/Contact'
import Home from './COMPONENTS/Home.jsx'
import Services from './COMPONENTS/Services'
import Navbar from './COMPONENTS/Navbar'
import LoadingScreen from './COMPONENTS/LoadingScreen'

function App() {

  const [loading, setLoading] = useState(true)
    window.onload= () =>{
      setLoading(false)
    }
  return (
    <>
      {
        loading? <LoadingScreen />
        :
        <>
          <Navbar />
          <Home />
          <Services />
          <Contact />
        </>
      }
    </>
     
   
  )
}

export default App