import { StrictMode } from 'react'
// StrictMode is a tool for highlighting potential 
// problems in an application. 
// It activates additional checks and warnings
//  for its descendants. It does not render any 
// visible UI. StrictMode checks are run in development
//  mode only; they do not impact the production build.
import ReactDOM from 'react-dom/client'
// createRoot is a method from ReactDOM 
// that creates a root
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
