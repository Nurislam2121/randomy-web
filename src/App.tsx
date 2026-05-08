import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import RandomNumberPage from './pages/RandomNumberPage/RandomNumberPage'
import RandomListsPage from './pages/RandomListsPage/RandomListPage'
import WheelPage from './pages/WheelPage/WheelPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/number" replace />} />
          
          <Route path="number" element={<RandomNumberPage />} />
          <Route path="list" element={<RandomListsPage />} />
          <Route path="wheel" element={<WheelPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App