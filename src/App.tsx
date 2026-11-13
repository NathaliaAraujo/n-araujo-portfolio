import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SelectedWorks } from './pages/SelectedWorks'
import { About } from './pages/About'
import { OpenLab } from './pages/OpenLab'
import { ProjectWebsuite } from './pages/ProjectWebsuite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="selected-works" element={<SelectedWorks />} />
          <Route path="about" element={<About />} />
          <Route path="open-lab" element={<OpenLab />} />
          <Route path="project-websuite" element={<ProjectWebsuite />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
