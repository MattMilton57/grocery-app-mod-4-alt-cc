import React, { Component } from 'react'

class AddItemForm extends Component {

    state= {
        name: '',
        description: '',
        image: '',
        price: null
    }

    updateDatabase(e) {
        e.preventDefault()
        const nameState = this.state.name
        const newItem = {
            name: nameState,

        }
        console.log(newItem)
    }

    render() {
        return (
            <div>
                <h2>New Grocery Item Form</h2>
                <form onSubmit={(e)=>this.updateDatabase(e)}>
                    <input 
                        placeholder='name' 
                        name='name' 
                        value={this.state.name} 
                        onChange={(event)=>this.setState({name:event.target.value})}>    
                    </input>
                    <input 
                        placeholder='description' 
                        name='description'
                        value={this.state.description} 
                        onChange={(event)=>this.setState({description:event.target.value})}> 
                    </input>
                    <input 
                        placeholder='image URL' 
                        name='image' 
                        value={this.state.image} 
                        onChange={(event)=>this.setState({image:event.target.value})}> 
                    </input>
                    <input 
                        type='number' 
                        placeholder='price' 
                        name='price' 
                        value={this.state.price} 
                        onChange={(event)=>this.setState({number:event.target.value})}> 
                    </input>
                    <button type='submit'>Add Grocery Item</button>
                </form>
            </div>
        )
    }
}

export default AddItemForm
