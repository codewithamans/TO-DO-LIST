import React, { useState } from 'react';
import "./index.css"


function App() {
  
  let [list,setList] = useState("")
  let [listitem,setListitem] = useState([])

  const inputevent = (e)=>{
  //  console.log(e.target.value);
   list = e.target.value
   setList(list)
  }
  const clickme = ()=>{
    setListitem((preval)=>{
     return [...preval,list]
    })
    // console.log(listitem);
     setList("")
    //  console.log(listitem);

  }
 
  const dltbtn = (e) => {
    let id = e.target.id
    // console.log(id);
 
    setListitem(() => {
      return (listitem.filter(( cuval,index)  => {
          return index!=id
      }))
    
    })

   
    }
    
  
  return(
    <>
    <div className='container'>
     <div className='box'>
       <h1>TO-DO-LIST</h1>
    <input type="text" placeholder='add a list of item' onChange={inputevent} value= {list}></input>
    <button  className='btn' onClick={clickme}>+</button>
    <ul>
     
      {listitem.map((val,index)=>{
        return ( <> <div className='listeditem'><button id={index} className='btn2' onClick={dltbtn}>&#215;</button><li key ={index+1} id={index}>{val}</li></div> </>)
      })}
    </ul> 
     </div>
    </div>
    </>
  )

}

export default App;
