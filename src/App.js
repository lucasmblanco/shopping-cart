import './styles/global.css'
import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'; 
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';

function App() {
 return (
 <div className="bg-gradient-to-bl from-blue-accent via-lightblue-accent to-lightest-blue-accent">
    <Header />
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
    </Routes>

  </div >

 )
}

export default App;


/*
 const [loading, setLoading] = useState(false)
  const [images, setImages] = useState(''); 
  const [action, setAction] = useState(() => false); 

useEffect( () => {
  async function test(){
    try{
      setLoading(true); 
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      const  data  = await response.json(); 
      console.log(data); 
    } catch(err){
      console.log(err); 
    }
  }

  test();
 
}, [action]); 

  return (
    <ChakraProvider  resetCSS={true}>
      <h1>HOLA PROBANDO CHAKRA</h1>
      <button onClick={() => setAction(prevAction => !prevAction)}>Activate</button>
      <CSSReset />
     {
      action ? loading ? <div>LOADING...</div> : <img src={images} alt="testing" /> : null
     }
   
    </ChakraProvider>
  );
  */