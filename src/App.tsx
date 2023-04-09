import { useModal } from '@ebay/nice-modal-react'
import './App.css'
import { ScaleDialog, TransformDialog } from './Dialog'

function App() {
    const scaleDialog = useModal(ScaleDialog)
    const transformDialog = useModal(TransformDialog)

    return (
        <div className="App">
            <button onClick={() => scaleDialog.show()}>Show Scale Dialog</button>
            <button onClick={() => transformDialog.show()}>Show Transform Dialog</button>
        </div>
    )
}

export default App
