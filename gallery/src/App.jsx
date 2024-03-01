import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './page/Gallery'
function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
