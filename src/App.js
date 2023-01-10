import './styles/global.css'
import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'; 
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';
import Cart from './components/Cart'

function App() {

  const [ products, setProducts ] = useState([])
  const [total, setTotal] = useState(0);

  function addQuantity(id, action){
    setProducts(products.map(function(product){
    if (product.id === id && action === 'increment'){
        return {
            ...product, 
            quantity: product.quantity + 1,
            totalPrice: product.price * (product.quantity + 1)
        }
    } else if(product.id === id && action === 'decrement') {
        return {
            ...product, 
            quantity: product.quantity - 1, 
            totalPrice: product.price * (product.quantity - 1)
        }
    } else {
        return {...product }
    }}
    ))
  }

  function deleteProduct(id){
    setProducts(products.filter(product => product.id !== id))
  }

  function addProduct(product){
    setProducts([...products, product])
  }

  function checkProductStatus(productID){
    return products.find(product => product.id === productID)
  }

  useEffect(() => {
    const sumTotal = products.reduce((acc, product) => {
      return  acc + product['totalPrice'] 
    }, 0);

    setTotal(sumTotal)
  }, [products])


 return (
 <div className="bg-gradient-to-bl from-blue-accent via-lightblue-accent to-lightest-blue-accent">
    <Header />
    <div className=' top-5 flex justify-center w-full sticky'>
    <NavBar />
    <Cart products={products} deleteProduct={deleteProduct} addQuantity={addQuantity} total={total}/>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop addProduct={addProduct} checkProductStatus={checkProductStatus}/>} />
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