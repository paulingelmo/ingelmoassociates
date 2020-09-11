import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './shell/AppRouter'

console.log('index.tsx')

const render = () => {
  ReactDOM.render(<AppRouter />, document.getElementById('app'))
}

render()
