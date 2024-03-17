/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './container/Navbar/Navbar'
import Recipes from './container/Rectitle/Recipes'
import Banner from './container/Banner/Banner'
import Function from './container/Function/Function'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [items,setItems]=useState([]);
  const [food,setFood]=useState([]);
  const [newFood,setNewFood]=useState([])
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [mint,setMint]=useState(0);


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
    toast(' already exists !');
  }
  }

  const handleRemove = (idd) => {
    const one = [...newFood,idd]
    setNewFood(one)
    const remove = food.filter((rem) => rem.id != idd.id);
    const negative =count-1;
    setCount(negative);
    const positive = newCount+1;
    setNewCount(positive);
    setFood(remove);
    let mint =0;
    one.forEach(set=>{
      mint+=set.time;
    })
    setMint(mint);
    
  };
  


  return (



    <>
  <div  className='container mx-auto mt-4'>
      <div>
        <Navbar></Navbar>
      </div>

      <div className='m-5'>
        <Banner></Banner>
      </div>

      <div className='mt-10 text-center m-10'>
        <Recipes></Recipes>
      </div>

      
      <div className='flex mt-24 flex-col lg:flex-row md:flex-row'>
            <div className='lg:w-[65%] grid lg:grid-cols-2 grid-cols-1 space-y-5 m-5'>
            {items.map((card) => (
              
              <Function  
              key={card.id}
                cardData={card}
                handleClick={handleClick}
              ></Function>
            ))}
            </div>

            <div className='justify-end lg:w-[33%] w-full md:w-[35%] p-5'>
           <div className="grid rounded-2xl bg-gray-400  space-y-3 pb-5">
              <h2 className='  text-center text-xl font-bold  mb-5 mt-5'>Want to cook: <span>{count}</span> </h2> <hr className='md:w-[100%] lg:w-full' />
              <div className=" ">
                <div className='grid grid-cols-5 pt-5 text-center items-center text-lg font-bold pr-5'>
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
                   <div className='grid grid-cols-5 pt-5 text-center items-center gap-2 pr-5'>
                  <p>{index+1}</p>
                  <p >{foodAll.name}</p>
                  <p>{foodAll.time}</p>
                  <p>{foodAll.calories}</p>
                  <p onClick={()=>handleRemove(foodAll)} className='btn rounded-3xl btn-primary'>Preparing</p>
                  <ToastContainer />
                </div>
              </div>
                ))
              }
            </div>

           <div className="grid rounded-2xl bg-gray-400  space-y-3 pb-5 mt-5">
              <h2 className='text-center text-xl font-bold  mb-5 mt-5'>Want to cook: <span>{newCount}</span></h2> <hr className='md:w-[100%] lg:w-full'/>
              <div className=" mr-10">
                <div className='grid grid-cols-4 pt-5 text-center items-center text-lg font-bold'>
                  <p ></p>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  
                </div>
              </div>   
              <div>
               {
                newFood.map((foodAll,index)=>(
                  
                  <div key={index} className=" opacity-65 mr-10">
                  <div className='grid grid-cols-4 pt-5 text-center items-center'>
                   <p>{index+1}</p>
                   <p>{foodAll.name}</p>
                   <p>{foodAll.time}</p>
                   <p>{foodAll.calories}</p>
                
                 </div>
                </div>
                ))
               }
              </div>
               
            </div>
            <div className='grid grid-cols-2 mt-5 md:grid-cols-1 space-y-5  text-center'>
              <div className='text-xl space-y-2'>
                <h5>Total Time=</h5>
                <p><spam>{mint}</spam> minutes</p>
              </div>
              <div className='text-xl space-y-2'>
                <h5>Total calories=</h5>
                <p><spam></spam> calories</p>
              </div>
            </div>
          </div>
            
      </div>

      

  </div>

    </>
  )
}

export default App
