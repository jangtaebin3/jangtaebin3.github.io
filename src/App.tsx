import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '@/styles/GlobalStyle'
import Layout from '@/layout'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import NotFound from '@/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
