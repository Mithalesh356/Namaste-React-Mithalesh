//  let heading=React.createElement('h1',{id:'heading'},'Hello React');
// let root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// let htag=React.createElement('h2',{},'This is second root of div');
// let root1=ReactDOM.createRoot(document.querySelector('#root1'));
// root1.render(htag);

let parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, 'I am heading tag'),
            React.createElement('h2', { id: 'siblingsh1' }, 'I am siblings of h1')
        ]
    )
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)