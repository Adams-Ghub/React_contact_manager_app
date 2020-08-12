import React from 'react';

import './App.css';
import Contact from './components/Contact.jsx';
import AddNewContactComponent from './components/AddNewContactComponent';
import EditContactComponent from './components/EditContactComponent';



class App extends React.Component{
    constructor(props){
        super(props)
        this.states={
            name:"",
            phone:0,
            category:"",
            contact: []
        }
        this.nameChangeHandler=this.nameChangeHandler.bind(this);
        this.phoneChangeHandler=this.phoneChangeHandler.bind(this);
        this.categoryChangeHandler=this.categoryChangeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this)

    }
    
        nameChangeHandler(name){
            this.setState({name:this.states.name})
            console.log(this.states.name)
        }

        phoneChangeHandler(phone){
            this.setState({phone:this.states.phone})
            console.log(this.states.phone)
        }

        categoryChangeHandler(category){
            this.setState({category:this.states.category});
            console.log(this.states.category)
        }

        submitHandler(contact){
            let newContact={name:this.states.name, phone:this.states.phone, category:this.states.category}
            this.setState({contact:[...this.states.contact, newContact]})
        }

    render(){

        // const name=this.states.name
        // const phone=this.states.phone
        // const category=this.states.category
        // const contact=this.states.contact
        return(
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"50vw"}}>
                    {/* {this.states.ContactDatabase.map((contacts,index)=>(<Contact name={contacts.name} phone={contacts.phone} category={contacts.category} key={index}/>))} */}
                    {this.states.contact.map((icontact,index)=>(<Contact name={icontact.name} phone={icontact.phone} category={icontact.category} key={index}/>))}
                </div>
                <div style={{borderLeftStyle:"solid",borderLeftColor:"#eeeeee",paddingLeft:"20px"}}>
                    <br/>
                    <div>
                        <AddNewContactComponent 
                            nameChangeHandler={this.nameChangeHandler}
                            phoneChangeHandler={this.phoneChangeHandler}
                            categoryChangeHandler={this.categoryChangeHandler}
                            submitHandler={this.submitHandler}

                            />
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <EditContactComponent/>
                    </div>   

                </div>
               
            </div>
            
        )
    }
}


export default App;
