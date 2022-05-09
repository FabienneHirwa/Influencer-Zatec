import React, {Component} from 'react';
import Follow from './follow';


class UseApi extends Component{
    state = {
        user: [],
        count:0,
    }
    async componentDidMount(){
        const response = await fetch('https://fabiennehirwa.github.io/followers-api/db.json');
        const data = await response.json();
        this.setState({user: data})
        console.log(data);
        localStorage.setItem('count', 0);
    }
    async addUserFunction(){
        const response = await fetch('https://fabiennehirwa.github.io/followers-api/db.json');
        const newUserData =  await response.json();
        let newUser = newUserData[Math.floor(Math.random() * 20)]
        this.state.user.push(newUser)
        this.setState({user:this.state.user})
        console.log(this.state.user)
    }
    render(){
        return(
            <>
            <div className='searchAdd'>
                <div>
                    <input className="form-control mr-sm-4"  type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div>
                    <button id="add_user_bu" onClick={(()=>this.addUserFunction())}>Add user</button>
                </div>
                    
                    
                
            </div>
            
            <div>
            
                <div id="container">
                    
        {
            
          this.state.user.map((value)=>{
            
            return (
                
              <div className="row " id="user_card" >
              <div className="col-2" >
                <img  src={value.profilePicture} alt="image"/>
              </div>
              
              <div className="col">
              <h2>@{value.username}</h2>
              <p id="biography">{value.biography}</p>
              </div>
              <div className="col-3">
              <Follow  count={this}/>
              </div>
            </div>
            )
          })
        }
        </div>
        
            </div>
            
      
            </>
        )
    }
}
export default UseApi;