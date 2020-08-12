import React from 'react';
import '../customstyle.css';
// import Contact from './Contact';
// import ContactList from './ContactList';



class AddNewContactComponent extends React.Component{
    constructor(props){
        super(props)
        this.states={
            name:"",
            phone:"",
            category:"",
            contact: []
        }
        this.handlesNameChange=this.handlesNameChange.bind(this);
        this.handlesPhoneChange=this.handlesPhoneChange.bind(this);
        this.handlesCategoryChange=this.handlesCategoryChange.bind(this);
        this.handlesSubmit=this.handlesSubmit.bind(this)

    }

   

    handlesNameChange(e){
        // this.setState({name:e.target.value})
        this.props.nameChangeHandler(e.target.value);
    }

    handlesPhoneChange(e){
        // this.setState({phone:e.target.value})
        this.props.phoneChangeHandler(e.target.value);
    }

    handlesCategoryChange(e){
        // this.setState({category:e.target.value})
        this.props.categoryChangeHandler(e.target.value);
    }

    handlesSubmit(e){
        e.preventDefault();
        // let newContact={name:this.states.name,phone:this.states.phone, category:this.states.category}
        // this.setState({ContactDatabase:[...this.states.ContactDatabase,newContact]})
        this.props.submitHandler();

    }

    
    render(){
        // const name = this.props.name
        // const phone= this.props.phone
        // const category= this.props.category
        return(
            <div>
                <div className="componentBox">
                    <h2 className="componentTitle">
                        Add Contact Form
                    </h2>
                    <form onSubmit={this.handlesSubmit}>
                        <div><label>Name:</label><input type="text" onChange={this.handlesNameChange} /></div>
                        <div><label>Phone:</label><input type="text"onChange={this.handlesPhoneChange}/></div>
                        <div>
                            <select name="group" onChange={this.handlesCategoryChange}>
                                <option value="friend">friend</option>
                                <option value="family">family</option>
                                <option value="customer">customer</option>
                            </select>

                            <div><input type="submit" value="Add contact"/></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}export default AddNewContactComponent;
