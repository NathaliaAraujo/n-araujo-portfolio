import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SelectedWorks } from './pages/SelectedWorks'
import { About } from './pages/About'
import { Playground } from './pages/Playground'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="selected-works" element={<SelectedWorks />} />
          <Route path="about" element={<About />} />
          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
