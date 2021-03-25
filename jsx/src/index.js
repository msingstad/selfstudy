/* Import the React and ReactDOM libraries */
import React from 'react';
import ReactDOM from 'react-dom';

/* Create a React component */
const App = () => {
    const buttonText = "Klikk meg!";
    const labelText = "Fyll i navn: ";
    
    return (
        <div>
            <label htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={ {backgroundColor: 'blue', color: 'white'} }>{buttonText}</button>
        </div>
    )
}

/* Takethe React component and show it on the screen */
ReactDOM.render(
    <App />,
    document.getElementById('root')
)