import React, { Component } from 'react';

import { BrowserRouter as router, Route } from 'react-router-dom'

import Courses from './components/Courses'

import Header from './components/layouts/Header'

import AddCourses from './components/AddCourses'

import About from './components/pages/About';

//import uuid from 'uuid';


class App extends Component {

  state = {
    courses: []
  }


  markCompleted = (id) => {  //This will help change the set of a course to complete to not complete

    this.setState({ courses: this.state.courses.map( course => {
      if (course.id === id) {
        course.completed = !course.completed
      }
      return course;

    }) });

  }



  //Deleting Courses using the filter method because it will delete the ids of the courses that don't match with what is being returned
  delCourse = (id) => {

    this.setState({ courses: [...this.state.courses.filter( courses => courses.id !== id)] });

  }


  //Creating Add Classes Method

  AddCourses = (title) => {

    const newCourse = {
      id: Math.random(),
      title,
      completed: 'false'

    }

    this.setState({ courses: [...this.state.courses, newCourse] });

  }



  render () {

    return (

      <router>

        <div className="App">

            <div className = 'container'>
              
              <Header/>

              <Route exact path='/' render={props =>(

                  <React.Fragment>

                          <AddCourses AddCourses ={this.AddCourses}/>

                          <Courses courses={this.state.courses} 
                          markCompleted = {this.markCompleted}
                          delCourse = {this.delCourse}
                          />

                  </React.Fragment>

              )} />

              <Route path = '/about' component={About} />

            </div>

        </div>

      </router>

    );
  }

}


export default App;
