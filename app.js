import React from "react";
import ReactDOM from "react-dom";


//  let heading=React.createElement('h1',{id:'heading'},'Hello React');
// let root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// let htag=React.createElement('h2',{},'This is second root of div');
// let root1=ReactDOM.createRoot(document.querySelector('#root1'));
// root1.render(htag);

let parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'I am heading tag with h1'),
            React.createElement('h2', { id: 'siblingsh1' }, 'I am siblings f h2')
        ]
    )
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)