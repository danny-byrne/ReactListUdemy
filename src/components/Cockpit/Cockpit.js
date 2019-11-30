import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit.js in useEffect')
        const timer = setTimeout(()=> {
            // alert('saved data to cloud')
        }, 1000);
        //function to be ran after the cycle.  
        return () => {
            clearTimeout(timer);
            console.log('cockpit.js cleanup work in useEffect')
        }
        //pass in empty array as second argument to have function run when component is removed
    }, []);
    //or pass in array with certain data to watch, and only run when that data is updated

    useEffect(()=> {
        console.log('cockpit.js cleanup work in useEffect')
        return () => {
            console.log('Cockpit.js cleanup work in useEfect2')
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;