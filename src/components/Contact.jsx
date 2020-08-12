import React from 'react';
import 'bootstrap';

import contactImage from '../images/contactImage.jpg';

class Contact extends React.Component{
   
    render(){
    return(
        <div style={{display:'flex', flexDirection:'row',borderRadius:"5px",borderStyle:'solid',borderColor:'red', width:'fit-content',padding:'4px' }} className="row">
            <div >
            <img style={{width:'70px', height:'70px'}}src={contactImage} alt="contactImage"/>
            </div>
            <div style={{marginLeft:'10px'}}>
                <div>{this.props.name}</div>
                <div>{this.props.number}</div> 
                <div>{this.props.category}</div>                
            </div>
        </div>
    )
    } 
} export default Contact;