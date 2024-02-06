import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count1:1

        }
    }
    

    render(){
        const{name,city,contact}=this.props;
        const{count,count1}=this.state;
        return(
            <div className="user-card">
                <h2>count:{count}</h2>
                <button onClick={()=>{
                    this.setState({
                     count:this.state.count+1   
                    })
                }}>Increment</button>
                
               <h2>Name:{name}</h2>
      <h3>City:{city}</h3>
      <h4>Contact:{contact}</h4> 
            </div>
        )
    }
}
export default UserClass