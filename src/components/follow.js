import React, { useState } from "react";


function Follow(props) {
    const [value,setValue] = useState('Follow')
    
    const  changeValue = () =>{
        var count = document.getElementById('count_p')
        if(value === 'Follow'){
          count.innerHTML = parseInt(count.innerHTML)+1
            setValue('Following')
        }else{
          count.innerHTML = parseInt(count.innerHTML)-1
          console.log(localStorage.getItem('count'))
            setValue('Follow')
        }
    }
  return (
    <>
    
      {
        value === "Follow" ?
        <div onClick={changeValue} id="buttonFollow">
        <button > <i className='fas fa-user-plus' ></i>Follow</button>
        </div>
        :
        <div onClick={changeValue} id="buttonFollowing">
        <button > <i className='fas fa-user-plus'></i>Following</button>
        </div>
      }
          </>
  );
}
    
    
  
  export default Follow;