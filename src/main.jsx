import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResponsesProvider } from './contexts/Responses.jsx'
import { PageProvider } from './contexts/Page.jsx'

import Testing from './components/sections/testing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <ResponsesProvider>
        <App />
        {/* <Testing /> */}
      </ResponsesProvider>
    </PageProvider>
  </React.StrictMode>
)
