import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps (props, state) {
  //   console.log('persons.js getDerivedState...')
  //   return state;
  // }

  componentWillReceiveProps(props) {  
      console.log('persons.js compWillReceive,', props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('persons.js shouldComponent...')
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('persons.js getSnapshotBefore...')
    return { message: 'snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons.js componentDidUpdate...');
    console.log(snapshot)
  }
  
  render () {
    console.log('Person.js rendering')
    return this.props.persons.map((person, index) => {
      return (
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.props.changed(event, person.id)}
          />
      );
    });
  }
} 


export default Persons;



