import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './container/Navbar/Navbar'
import Recipes from './container/Rectitle/Recipes'
import Banner from './container/Banner/Banner'
import Function from './container/Function/Function'
import Side from './container/Side/Side'



function App() {

  const [items,setItems]=useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((item) => {
        setItems(item);
      });
  }, []);
 


  return (



    <>
  <div  className='container mx-auto mt-4'>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Banner></Banner>
      </div>

      <div className='mt-10 text-center'>
        <Recipes></Recipes>
      </div>

      
      <div className='flex mt-24 flex-col lg:flex-row md:flex-row'>
            <div className='w-[65%] grid lg:grid-cols-2 grid-cols-1 space-y-5'>
            {items.map((card) => (
              
              <Function  
              key={card.id}
                cardData={card}
              ></Function>
            ))}
            </div>

            <div className='justify-end w-[30%]'>
              <Side></Side>
            </div>
            
      </div>

      

  </div>

    </>
  )
}

export default App
