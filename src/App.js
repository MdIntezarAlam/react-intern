import React from 'react'
import Appbar from './components/Appbar/Appbar'
import Homepage from './components/Homepage/Homepage'

const App = () => {
    return (
        <div className='app_container'>
            <Appbar />
            <Homepage />
        </div>
    )
}

export default App