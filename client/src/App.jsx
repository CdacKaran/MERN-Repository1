import {useEffect,useState} from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Item'
import CreateItem from './CreateItem'
import UpdateItem from './UpdateItem'

function App() {
    const [count, setCount] = useState(0)

    return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Item/>}></Route>
        <Route path= '/create' element={<CreateItem/>}></Route>
        <Route path= '/update' element={<UpdateItem/>}></Route>
        </Routes>  
    </BrowserRouter>
  
  </div>

    )
}

export default App