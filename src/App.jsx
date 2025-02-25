import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layout
import DefaultLayout from './layouts/DefaultLayout'

import HomePage from './pages/HomePage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ListaPostsPage from './pages/ListaPostsPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/chisiamo' element={<ChiSiamoPage />}></Route>
            <Route path='/listaposts'>
              <Route index element={<ListaPostsPage />} />
              <Route path=':id' element={<PostDetailPage />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
