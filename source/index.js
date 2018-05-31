import React from 'react'
import { render } from 'react-dom'
import App from './containers'
import { AppContainer } from 'react-hot-loader'

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)

if(module.hot) {
  module.hot.accept('./containers', () => {
    const New = require('./containers').default
    render(
      <AppContainer>
      <New/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}