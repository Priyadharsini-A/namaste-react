import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';
class About extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("PEarent DM")
  }
  render(){
    return (
      <div>
        About Us
          <UserClass name={"Priya(class)"}
        city={"chennai"}
        contact={"8687687676"}
        />
        <div>
          LoggedIn User:
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className='text-lg'>{loggedInUser}</h1>}
        </UserContext.Consumer>
        </div>
        
      </div>
    )
  }
}
export default About;




