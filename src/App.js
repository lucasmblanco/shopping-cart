import './styles/global.css'
import React, { useState } from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'; 
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';
//import Products from './components/Products';
//import Cart from './components/Cart'; 
//import { useState } from 'react'


function App() {

  const [ products, setProducts ] = useState([])

  // ACTUALIZAR COMPONENTE CUANDO NO SE ENCUENTRA EN EL CARRITO 


  function deleteItem(id){

    setProducts(products.filter(product => product.id !== id))
}

  function addProduct(product){
/*
    const duplicateProduct = products.find(element => element.id === product.id); 
    if(duplicateProduct){
      setProducts(products.map(products => {
       return products.id === product.id && {...products, quantity: products.quantity + product['quantity'], price: products.price * product['quantity']}
      }
      ))
    } else {*/
      setProducts([...products, product])
    
  }

     

/*
    if(product['quantity'] < 2) {
      setCart([...cart, product, cart[productDuplicate]['quantity']: product['quantity']])
      
    } else {
      setCart([...cart, product.id])
    }
    */

  

 
  


 return (
 <div className="bg-gradient-to-bl from-blue-accent via-lightblue-accent to-lightest-blue-accent">
    <Header />
    <NavBar products={products} deleteItem={deleteItem}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop addProduct={addProduct} />} />
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