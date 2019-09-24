import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles.css'
import '@babel/polyfill'

ReactDom.render(<App/>, document.getElementById('app'))