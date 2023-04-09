import NiceModal from '@ebay/nice-modal-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <NiceModal.Provider>
            <App />
        </NiceModal.Provider>
    </React.StrictMode>,
)
