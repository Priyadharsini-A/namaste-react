import React from 'react'
import User from './User'
import UserClass from './UserClass'
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
      </div>
    )
  }
}
export default About;




