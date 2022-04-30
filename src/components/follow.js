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
    <div id="buttonFollow">
        <button onClick={changeValue}> <i className='fas fa-user-plus'></i>{value}</button>
    </div>
  );
}
    
    
  
  export default Follow;