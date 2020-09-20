import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './shell/AppRouter'

const render = () => {
  ReactDOM.render(<AppRouter />, document.getElementById('app'))
}

render()
