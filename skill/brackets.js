import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    //return 后面的() 作用只是为了美观，将返回组件括起来
    return (
        <h1>hello {props.name}<span>world</span></h1>
    )
}

ReactDOM.render(<Welcome name="666"/>, document.getElementById('root'));