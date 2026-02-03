import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/layout'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
