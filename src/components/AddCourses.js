import React, { Component } from 'react'

export class AddCourses extends Component {


    state = {
        title: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });   //Since the state is in the same component here, we use set.state directly to change our state.

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCourses(this.state.title);
        this.setState({ title: '' })
    }



    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{display: 'flex' }}>

                <input 
                style = {{ flex: '10' , padding: '5px'}}
                type = 'text' 
                name = 'title' 
                placeholder = 'Add Course...'
                value={this.state.title}
                onChange ={this.onChange}
                />

                <input
                type= 'submit' 
                value= 'submit'
                className='btn'
                style={{ flex: '1' }}
                />
                
            </form>
        )
    }
}

export default AddCourses
