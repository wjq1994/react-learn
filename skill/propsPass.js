import React from 'react'
import ReactDom from 'react-dom'

class Person extends React.Component {
    render() {
        let element1 = [];
        for (let item in this.props) {
            element1.push(<div key={item}>{this.props[item]}</div>)
        }
        return (
            <div>{element1}</div>
        )
    }
}


let personProps = {
    name: "laowang",
    age: 23,
    gender: "male"
}

//渲染元素 传递属性{...personProps} 快捷传递法
ReactDom.render(<Person {...personProps}/>, document.getElementById("root"))