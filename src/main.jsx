import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Root from './routes/root.jsx'
import App from './routes/App.jsx'
import ErrorPage from './error-page.jsx'

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<App />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)