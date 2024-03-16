/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './container/Navbar/Navbar'
import Recipes from './container/Rectitle/Recipes'
import Banner from './container/Banner/Banner'
import Function from './container/Function/Function'




function App() {

  const [items,setItems]=useState([]);
  const [food,setFood]=useState([]);
  const [newFood,setNewFood]=useState([])
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);


  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((item) => {
        setItems(item);
      });
  }, []);
 
 function handleClick(click) {
  const isExists = food.find((set) => set.id == click.id);
  if (!isExists) {
    setFood([...food, click]);
    setCount(count+1);

  // eslint-disable-next-line no-empty
  } else {
    
  }
  }


  const handleRemove = (idd) => {
    const remove = food.filter((rem) => rem.id != idd);
    const negative =count-1;
    setCount(negative);
    const positive = newCount+1;
    setNewCount(positive);
    setFood(remove);
    
    
  };
  


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
            <div className='lg:w-[65%] grid lg:grid-cols-2 grid-cols-1 space-y-5'>
            {items.map((card) => (
              
              <Function  
              key={card.id}
                cardData={card}
                handleClick={handleClick}
              ></Function>
            ))}
            </div>

            <div className='justify-end lg:w-[33%] w-full md:w-[35%]'>
           <div className="grid rounded-2xl bg-gray-400  space-y-3 pb-5">
              <h2 className='ml-11 lg:text-center text-xl font-bold  mb-5 mt-5'>Want to cook: <span>{count}</span> </h2> <hr className='md:w-[78%] lg:w-full' />
              <div className=" opacity-65 ">
                <div className='grid grid-cols-5 pt-5 text-center items-center'>
                  <p ></p>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  <p></p>
                </div>
              </div>
              {
                food.map((foodAll,index)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div className=" opacity-65 ">
                   <div className='grid grid-cols-5 pt-5 text-center items-center'>
                  <p>{index+1}</p>
                  <p >{foodAll.name.slice(0, 10)}</p>
                  <p>{foodAll.time}</p>
                  <p>{foodAll.calories}</p>
                  <p onClick={()=>handleRemove(foodAll.id)} className='btn rounded-3xl btn-primary'>Preparing</p>
                </div>
              </div>
                ))
              }
            </div>

           <div className="grid rounded-2xl bg-gray-400  space-y-3 pb-5 mt-5">
              <h2 className='ml-11 lg:text-center text-xl font-bold  mb-5 mt-5'>Want to cook: <span>{newCount}</span></h2> <hr className='md:w-[78%] lg:w-full' />
              <div className=" opacity-65 ">
                <div className='grid grid-cols-4 pt-5 text-center items-center'>
                  <p ></p>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  
                </div>
              </div>   
              <div>
              <div className=" opacity-65 ">
                   <div className='grid grid-cols-5 pt-5 text-center items-center'>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                 
                  </div>
                </div>
              </div>
               
            </div>
          </div>
            
      </div>

      

  </div>

    </>
  )
}

export default App
