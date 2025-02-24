import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layout
import DefaultLayout from './layouts/DefaultLayout'

import HomePage from './pages/HomePage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ListaPostsPage from './pages/ListaPostsPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/chisiamo' element={<ChiSiamoPage />}></Route>
            <Route path='/listaposts' element={<ListaPostsPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
