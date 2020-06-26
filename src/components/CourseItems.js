import React, { Component } from 'react'

//import PropTypes from 'prop-types';






export class CourseItems extends Component {


    getStyle = () => {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.course.completed ?
            'line-through' : 'none'

        }
    }






    render() {

        const { id, title} = this.props.course;

        return (

            <div style={this.getStyle()}>

                <p>
                    <input type = "checkbox" onChange = {this.props.markCompleted.bind
                    (this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delCourse.bind(this, id)} style={btnStyle}>x</button>
                
                </p>

            </div>
        )
    }
}







/*PropTypes
CourseItems.propTypes = {
    course: PropTypes.object.isRequired
}
*/


    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        //border: 'none',
        padding: '3px 6px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right',
        //boxShadow: '0px 0px 0px transparent',
        border: '0px solid transparent',
    }




export default CourseItems
