
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Demo from './Pages/Demo'


function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route index element={< Demo/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
