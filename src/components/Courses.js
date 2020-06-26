import React, { Component } from 'react';

import CourseItems from './CourseItems'

//import PropTypes from 'prop-types';




class Courses extends Component {




  render () {

    return this.props.courses.map((courses) => (

    <CourseItems key={courses.id}  course={courses} markCompleted = 
    {this.props.markCompleted}
    delCourse ={this.props.delCourse} />

      

    ));

  }

}


/*PropTypes
Courses.propTypes = {
    courses: PropTypes.array.isRequired
}
*/



export default Courses;