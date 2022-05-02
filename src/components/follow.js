import React, { useState } from "react";


function Follow() {
    const [value,setValue] = useState('Follow')
    const  changeValue = () =>{
        if(value === 'Follow'){
            setValue('Following')
        }else{
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