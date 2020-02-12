import React from 'react';
import ReactDOM from 'react-dom';

//调试源码
debugger

let element2 = React.createElement('h1', {}, 'hello')

console.log(element2.props.children)

let names = [
    1, 2, 3
], lis = [];

for (let i = 0; i < names.length; i++) {
    lis.push(<li key={i}>{names[i]}</li>);
}

ReactDOM.render(<ul>{lis}</ul>, document.getElementById('root'));
// ReactDOM.render(element2, document.getElementById('root'));