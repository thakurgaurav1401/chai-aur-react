// function customRender(reactElement, container){

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.Children
//     domElement.setAttribute('href', reactElement.props.href)

// }
const domElement = document.createElement(reactElement.type)


const { Children } = require("react")

const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement)
