import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TonConnectUIProvider>
)
