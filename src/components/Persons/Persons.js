import React, { PureComponent } from 'react';
import Person from './Person/Person';



class Persons extends PureComponent {
  // static getDerivedStateFromProps (props, state) {
  //   console.log('persons.js getDerivedState...')
  //   return state;
  // }

  // componentWillReceiveProps(props) {  
  //     console.log('persons.js compWillReceive,', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('persons.js shouldComponent...')
  //   if(nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
} 


export default Persons;



